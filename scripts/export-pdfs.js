import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_URL = 'http://localhost:5173'; // Vite dev server
const OUTPUT_DIR = path.join(__dirname, '..', 'pdfs');

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, {recursive: true});
}

// Routes to export (add more as needed)
const ROUTES_TO_EXPORT = [
    { path: '/notation', name: 'Notation' },
    {path: '/analysis', name: 'Analysis'},
    { path: '/geometrie', name: 'Geometrie' },
    { path: '/stochastik', name: 'Stochastik' },
    { path: '/gleichungen', name: 'Gleichungen' },
    { path: '/zusatz', name: 'Zusatz' }
];

async function exportContentSectionsToPDF() {
    console.log('Starting PDF export...');

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        for (const route of ROUTES_TO_EXPORT) {
            console.log(`Processing route: ${route.path}`);

            const page = await browser.newPage();

            // Set viewport for consistent rendering
            await page.setViewport({width: 1200, height: 800});

            // Navigate to the page
            const url = `${BASE_URL}${route.path}`;
            await page.goto(url, {
                waitUntil: 'networkidle0',
                timeout: 30000
            });

            // Force all lazy-loaded images to load by triggering their IntersectionObserver
            await page.evaluate(() => {
                // Scroll to trigger all lazy loading
                const containers = document.querySelectorAll('.clickable-image-container');
                containers.forEach(container => {
                    // Force the intersection observer to trigger by scrolling to each image
                    container.scrollIntoView();
                });

                // Also manually trigger image loading for any that haven't loaded
                const placeholders = document.querySelectorAll('.image-placeholder');
                placeholders.forEach(placeholder => {
                    const container = placeholder.closest('.clickable-image-container');
                    if (container) {
                        // Manually set inView to true to force image loading
                        const event = new Event('intersect');
                        container.dispatchEvent(event);
                    }
                });
            });

            // Wait for all images to load
            await page.evaluate(() => {
                return new Promise((resolve) => {
                    const images = document.querySelectorAll('img');
                    const imagePromises = Array.from(images).map(img => {
                        if (img.complete) {
                            return Promise.resolve();
                        }
                        return new Promise((imgResolve) => {
                            img.onload = () => imgResolve();
                            img.onerror = () => imgResolve(); // Continue even if image fails to load
                            // Timeout after 5 seconds per image
                            setTimeout(() => imgResolve(), 5000);
                        });
                    });
                    Promise.all(imagePromises).then(() => resolve());
                });
            });

            // Additional wait to ensure everything is rendered
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Get all content sections
            const contentSections = await page.$$eval('.content-section', sections => {
                return sections.map((section, index) => {
                    const title = section.querySelector('.section-title')?.textContent?.trim() || `Section_${index + 1}`;
                    const id = section.id || `section-${index + 1}`;
                    return {title, id, index};
                });
            });

            console.log(`Found ${contentSections.length} content sections in ${route.name}`);

            // Export each content section as a separate PDF
            for (const section of contentSections) {
                try {
                    console.log(`  Exporting: ${section.title}`);

                    // Hide all content sections except the current one
                    await page.evaluate((targetId) => {
                        const allSections = document.querySelectorAll('.content-section');
                        allSections.forEach(sec => {
                            if (sec.id !== targetId) {
                                sec.style.display = 'none';
                            } else {
                                sec.style.display = 'block';
                            }
                        });

                        // Hide navigation and other UI elements
                        const sidebar = document.querySelector('.sidebar');
                        if (sidebar) sidebar.style.display = 'none';

                        const searchPopup = document.querySelector('.search-popup-overlay');
                        if (searchPopup) searchPopup.style.display = 'none';

                        // Force all images in the visible section to be visible (override lazy loading)
                        const visibleSection = document.getElementById(targetId);
                        if (visibleSection) {
                            const imageContainers = visibleSection.querySelectorAll('.clickable-image-container');
                            imageContainers.forEach(container => {
                                const placeholder = container.querySelector('.image-placeholder');
                                const img = container.querySelector('img');
                                if (placeholder) {
                                    placeholder.style.display = 'none';
                                }
                                if (img) {
                                    img.style.display = 'block';
                                    img.style.opacity = '1';
                                }
                            });
                        }
                    }, section.id);

                    // Wait a bit more for any remaining image loading
                    await new Promise(resolve => setTimeout(resolve, 1000));

                    // Get the dimensions of the content section
                    const sectionDimensions = await page.evaluate((targetId) => {
                        const section = document.getElementById(targetId);
                        if (!section) return null;

                        const rect = section.getBoundingClientRect();
                        return {
                            width: section.scrollWidth,
                            height: section.scrollHeight,
                            x: rect.x,
                            y: rect.y
                        };
                    }, section.id);

                    if (!sectionDimensions) {
                        console.error(`    ✗ Could not get dimensions for section "${section.title}"`);
                        continue;
                    }

                    // A4 portrait dimensions in points (72 points = 1 inch)
                    // A4: 210mm x 297mm = 595.28pt x 841.89pt
                    const a4WidthPt = 595; // Round to integer

                    // Calculate height based on content, but scale to fit A4 width
                    const contentAspectRatio = sectionDimensions.height / sectionDimensions.width;
                    const pdfHeight = Math.round(a4WidthPt * contentAspectRatio);

                    // Generate PDF
                    const sanitizedTitle = section.title.replace(/[^\w\s-]/g, '').replace(/\s+/g, '_');
                    const filename = `${route.name}_${sanitizedTitle}.pdf`;
                    const filepath = path.join(OUTPUT_DIR, filename);

                    await page.pdf({
                        path: filepath,
                        width: `${a4WidthPt}`,
                        height: `${pdfHeight}`,
                        margin: {
                            top: '0mm',
                            right: '0mm',
                            bottom: '0mm',
                            left: '0mm'
                        },
                        printBackground: true,
                        preferCSSPageSize: false
                    });

                    console.log(`    ✓ Saved: ${filename} (${a4WidthPt}x${pdfHeight}pt)`);

                } catch (sectionError) {
                    console.error(`    ✗ Error exporting section "${section.title}":`, sectionError.message);
                }
            }

            await page.close();
        }

    } catch (error) {
        console.error('Error during PDF export:', error);
    } finally {
        await browser.close();
        console.log('\nPDF export completed!');
        console.log(`PDFs saved to: ${OUTPUT_DIR}`);
    }
}

// Run the export
exportContentSectionsToPDF().catch(console.error);
