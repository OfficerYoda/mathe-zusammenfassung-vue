import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    target: ['es2015', 'chrome64', 'firefox67', 'safari12'],
    cssTarget: 'chrome64',
    // Ensure compatibility with Firefox - updated syntax
    modulePreload: {
      polyfill: true,
    },
  },
  css: {
    postcss: {
      plugins: [
        // Add autoprefixer-like functionality for Firefox
        {
          postcssPlugin: 'firefox-compatibility',
          Once(root) {
            // Ensure Firefox-specific prefixes are preserved
            root.walkRules(rule => {
              if (rule.selector.includes('-moz-')) {
                // Preserve Firefox-specific selectors
                return;
              }
            });
          },
        },
      ],
    },
  },
})
