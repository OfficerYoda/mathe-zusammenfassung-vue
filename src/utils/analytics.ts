// Replace with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-F523EFE7F1';

let pendingEvents: Array<() => void> = [];

// Check if we're in production
const isProduction = import.meta.env.PROD;

// Initialize Google Analytics tracking
export function initGoogleAnalytics() {
    // Only initialize tracking in production or if explicitly enabled
    if (!isProduction && !import.meta.env.VITE_ENABLE_GA) {
        console.log('Google Analytics disabled in development mode');
        return;
    }

    console.log('Initializing Google Analytics tracking...', GA_MEASUREMENT_ID);

    // Check if gtag is available (loaded from HTML)
    if (typeof window.gtag === 'function') {
        console.log('Google Analytics script found, setting up tracking');

        // Send initial page view
        window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname,
        });

        // Process any pending events
        pendingEvents.forEach(eventFn => eventFn());
        pendingEvents = [];
        console.log('Google Analytics initialized successfully');
    } else {
        console.warn('Google Analytics gtag function not found');
        // Retry after a short delay in case the script is still loading
        setTimeout(() => {
            if (typeof window.gtag === 'function') {
                console.log('Google Analytics script loaded after delay');
                window.gtag('event', 'page_view', {
                    page_title: document.title,
                    page_location: window.location.href,
                    page_path: window.location.pathname,
                });
                pendingEvents.forEach(eventFn => eventFn());
                pendingEvents = [];
            } else {
                console.error('Google Analytics script failed to load');
            }
        }, 1000);
    }
}

// Track page views
export function trackPageView(pagePath: string, pageTitle?: string) {
    const trackFn = () => {
        if (!isProduction && !import.meta.env.VITE_ENABLE_GA) return;

        console.log('Tracking page view:', pagePath, pageTitle);
        if (window.gtag) {
            window.gtag('event', 'page_view', {
                page_path: pagePath,
                page_title: pageTitle || document.title,
                page_location: window.location.origin + pagePath,
            });
        } else {
            console.warn('gtag not available for page view tracking');
        }
    };

    if (typeof window.gtag === 'function') {
        trackFn();
    } else {
        console.log('Google Analytics not ready, queuing page view:', pagePath);
        pendingEvents.push(trackFn);
    }
}

// Track custom events
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
    const trackFn = () => {
        if (!isProduction && !import.meta.env.VITE_ENABLE_GA) return;

        console.log('Tracking event:', eventName, parameters);
        if (window.gtag) {
            window.gtag('event', eventName, {
                custom_parameter_1: 'mathe_zusammenfassung',
                ...parameters,
            });
        } else {
            console.warn('gtag not available for event tracking');
        }
    };

    if (typeof window.gtag === 'function') {
        trackFn();
    } else {
        console.log('Google Analytics not ready, queuing event:', eventName);
        pendingEvents.push(trackFn);
    }
}

// Track PDF downloads
export function trackPdfDownload(pdfName: string) {
    trackEvent('file_download', {
        file_name: pdfName,
        file_extension: 'pdf',
        event_category: 'PDF',
        event_label: pdfName,
    });
}

// Track search queries
export function trackSearch(searchTerm: string) {
    trackEvent('search', {
        search_term: searchTerm,
        event_category: 'Search',
        event_label: searchTerm,
    });
}
