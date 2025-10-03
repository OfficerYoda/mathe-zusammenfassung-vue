import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_URL = 'http://localhost:5173'; // Vite dev server
const OUTPUT_DIR = path.join(__dirname, '..', 'pdfs');

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Routes to export (add more as needed)
const ROUTES_TO_EXPORT = [
    { path: '/notation', name: 'Notation' },
    { path: '/analysis', name: 'Analysis' },
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
            await page.setViewport({ width: 1200, height: 800 });

            // Navigate to the page
            const url = `${BASE_URL}${route.path}`;
            await page.goto(url, {
                waitUntil: 'networkidle0',
                timeout: 30000
            });

            // Wait for MathJax to render
            await page.waitForFunction(
                () => window.MathJax && window.MathJax.startup && window.MathJax.startup.document.state() >= 10,
                { timeout: 10000 }
            ).catch(() => {
                console.log('MathJax timeout, continuing anyway...');
            });

            // Get all content sections
            const contentSections = await page.$$eval('.content-section', sections => {
                return sections.map((section, index) => {
                    const title = section.querySelector('.section-title')?.textContent?.trim() || `Section_${index + 1}`;
                    const id = section.id || `section-${index + 1}`;
                    return { title, id, index };
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
                    }, section.id);

                    // Generate PDF
                    const sanitizedTitle = section.title.replace(/[^\w\s-]/g, '').replace(/\s+/g, '_');
                    const filename = `${route.name}_${sanitizedTitle}.pdf`;
                    const filepath = path.join(OUTPUT_DIR, filename);

                    await page.pdf({
                        path: filepath,
                        format: 'A4',
                        margin: {
                            top: '20mm',
                            right: '15mm',
                            bottom: '20mm',
                            left: '15mm'
                        },
                        printBackground: true,
                        preferCSSPageSize: false
                    });

                    console.log(`    ✓ Saved: ${filename}`);

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
