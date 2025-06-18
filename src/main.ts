import { createApp } from 'vue';
import App from './App.vue';

declare global {
    interface Window {
        MathJax: any;
    }
}

function loadMathJax(callback: () => void) {
    window.MathJax = {
        tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']]
        },
        svg: { fontCache: 'global' },
        options: {
            skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
        }
    };

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'MathJax-script';
    script.async = true;
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    script.onload = callback;
    document.head.appendChild(script);
}

const app = createApp(App);

loadMathJax(() => { // Make sure MathJax is loaded before loading the app
    app.mount('#app');
    // After mounting, typeset the page
    window.MathJax && window.MathJax.typeset && window.MathJax.typeset();
});