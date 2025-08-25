/// <reference types="vite/client" />

// Firefox-specific type declarations
declare global {
  interface Window {
    requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
    cancelIdleCallback?: (handle: number) => void;
  }

  interface CSS {
    supports(property: string, value: string): boolean;
  }
}

export {};
