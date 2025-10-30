let pendingEvents: Array<() => void> = [];

// Initialize Google Analytics tracking
export function initGoogleAnalytics() {
  // Check if gtag is available (loaded from HTML)
  if (typeof window.gtag === 'function') {
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

// Track custom events
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  const trackFn = () => {
    console.log('Tracking event:', eventName, parameters);
    if (window.gtag) {
      window.gtag('event', eventName, {
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

// Track search queries
export function trackSearch(searchTerm: string, foundChapter: string) {
  trackEvent('search', {
    search_term: searchTerm,
    found_chapter: foundChapter,
  });
}
