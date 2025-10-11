// Replace with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-F523EFE7F1';

// Initialize Google Analytics
export function initGoogleAnalytics() {
    // Only initialize in production
    if (import.meta.env.PROD) {
        // Load the gtag library
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];

        function gtag(...args: any[]) {
            window.dataLayer.push(args);
        }

        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID, {
            page_title: document.title,
            page_location: window.location.href,
        });
    }
}

// Track page views
export function trackPageView(pagePath: string, pageTitle?: string) {
    if (import.meta.env.PROD && window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: pagePath,
            page_title: pageTitle || document.title,
        });

        console.log("tracked page view");
    }
}

// Track custom events
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
    if (import.meta.env.PROD && window.gtag) {
        window.gtag('event', eventName, parameters);

        console.log("tracked custom event");
    }
}

// Track PDF downloads
export function trackPdfDownload(pdfName: string) {
    trackEvent('pdf_download', {
        file_name: pdfName,
        file_extension: 'pdf',
    });

    console.log("tracked pdf download");
}

// Track search queries
export function trackSearch(searchTerm: string) {
    trackEvent('search', {
        search_term: searchTerm,
    });

    console.log("tracked search");
}
