import { ref } from 'vue';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export function usePdfExport() {
    const isExporting = ref(false);
    const exportProgress = ref(0);
    const exportStatus = ref('');

    // Helper function to create a temporary CSS style that converts color-mix to rgba
    function createColorMixFallbackCSS() {
        const style = document.createElement('style');
        style.id = 'pdf-export-fallback';
        style.textContent = `
            /* PDF Export Fallbacks for color-mix */
            .info-box-blue {
                background-color: rgba(59, 130, 246, 0.4) !important;
            }
            .info-box-green {
                background-color: rgba(34, 197, 94, 0.4) !important;
            }
            .info-box-yellow {
                background-color: rgba(251, 191, 36, 0.4) !important;
            }
            .info-box-red {
                background-color: rgba(239, 68, 68, 0.4) !important;
            }
            .report-error-button {
                background-color: rgba(239, 68, 68, 0.8) !important;
            }
        `;
        document.head.appendChild(style);
        return style;
    }

    // Helper function to remove the fallback CSS
    function removeFallbackCSS(style: HTMLStyleElement) {
        if (style && style.parentNode) {
            style.parentNode.removeChild(style);
        }
    }

    // Export a single content section to PDF
    async function exportContentSection(sectionElement: Element, sectionTitle: string) {
        try {
            exportStatus.value = `Exporting: ${sectionTitle}`;

            // Create fallback CSS for better compatibility
            const fallbackStyle = createColorMixFallbackCSS();

            // Wait a bit for styles to apply
            await new Promise(resolve => setTimeout(resolve, 100));

            // Configure html2canvas options for better quality
            const canvas = await html2canvas(sectionElement as HTMLElement, {
                scale: 2, // Higher resolution
                useCORS: true,
                allowTaint: false,
                backgroundColor: '#ffffff',
                logging: false,
                width: sectionElement.scrollWidth,
                height: sectionElement.scrollHeight,
                windowWidth: 1200,
                windowHeight: 800
            });

            // Remove fallback CSS
            removeFallbackCSS(fallbackStyle);

            // Calculate PDF dimensions
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 297; // A4 height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            // Create PDF
            const pdf = new jsPDF('p', 'mm', 'a4');
            let heightLeft = imgHeight;
            let position = 0;

            // Add the image to PDF (split into pages if needed)
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            // Save the PDF
            const sanitizedTitle = sectionTitle.replace(/[^\w\s-]/g, '').replace(/\s+/g, '_');
            const filename = `${sanitizedTitle}.pdf`;
            pdf.save(filename);

            return true;
        } catch (error) {
            console.error('Error exporting section:', error);
            exportStatus.value = `Error exporting: ${sectionTitle}`;
            throw error;
        }
    }

    // Export all content sections on the current page
    async function exportAllContentSections() {
        if (isExporting.value) return;

        try {
            isExporting.value = true;
            exportProgress.value = 0;
            exportStatus.value = 'Starting export...';

            // Find all content sections
            const contentSections = document.querySelectorAll('.content-section');

            if (contentSections.length === 0) {
                throw new Error('No content sections found on this page');
            }

            exportStatus.value = `Found ${contentSections.length} sections to export`;

            // Export each section
            for (let i = 0; i < contentSections.length; i++) {
                const section = contentSections[i];
                const titleElement = section.querySelector('.section-title');
                const sectionTitle = titleElement?.textContent?.trim() || `Section_${i + 1}`;

                await exportContentSection(section, sectionTitle);

                exportProgress.value = ((i + 1) / contentSections.length) * 100;

                // Small delay between exports to prevent browser freezing
                await new Promise(resolve => setTimeout(resolve, 500));
            }

            exportStatus.value = 'Export completed successfully!';

            // Clear status after 3 seconds
            setTimeout(() => {
                exportStatus.value = '';
            }, 3000);

        } catch (error) {
            console.error('Export failed:', error);
            exportStatus.value = `Export failed: ${error}`;

            // Clear error after 5 seconds
            setTimeout(() => {
                exportStatus.value = '';
            }, 5000);
        } finally {
            isExporting.value = false;
            exportProgress.value = 0;
        }
    }

    // Export a specific content section
    async function exportSingleSection(sectionId: string) {
        if (isExporting.value) return;

        try {
            isExporting.value = true;
            exportProgress.value = 0;

            const sectionElement = document.getElementById(sectionId);
            if (!sectionElement) {
                throw new Error(`Section with ID "${sectionId}" not found`);
            }

            const titleElement = sectionElement.querySelector('.section-title');
            const sectionTitle = titleElement?.textContent?.trim() || sectionId;

            await exportContentSection(sectionElement, sectionTitle);

            exportProgress.value = 100;
            exportStatus.value = 'Export completed!';

            setTimeout(() => {
                exportStatus.value = '';
            }, 3000);

        } catch (error) {
            console.error('Export failed:', error);
            exportStatus.value = `Export failed: ${error}`;

            setTimeout(() => {
                exportStatus.value = '';
            }, 5000);
        } finally {
            isExporting.value = false;
            exportProgress.value = 0;
        }
    }

    return {
        isExporting,
        exportProgress,
        exportStatus,
        exportAllContentSections,
        exportSingleSection
    };
}
