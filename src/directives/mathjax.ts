import type {Directive} from 'vue';
import {nextTick} from 'vue';

let mathJaxLoaded = false;

const mathJaxLoadCallback = () => {
    mathJaxLoaded = true;
    document.querySelectorAll('[data-v-mathjax-pending]').forEach(el => {
        el.removeAttribute('data-v-mathjax-pending');
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([el]);
        }
    });
};

if (!window.MathJax && !document.getElementById('MathJax-script')) {
    window.MathJax = {
        loader: {load: ['[tex]/color']},
        tex: {
            packages: {'[+]': ['color']},
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']]
        },
        svg: {fontCache: 'global'},
        options: {
            skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
        }
    };

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'MathJax-script';
    script.async = true;
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    script.onload = mathJaxLoadCallback;
    document.head.appendChild(script);
} else if (window.MathJax) {
    mathJaxLoaded = true;
}

const vMathJax: Directive = {
    mounted(el: HTMLElement) {
        if (mathJaxLoaded) {
            nextTick(() => {
                if (window.MathJax && window.MathJax.typesetPromise) {
                    window.MathJax.typesetPromise([el]);
                }
            });
        } else {
            el.setAttribute('data-v-mathjax-pending', 'true');
        }
    },
    updated(el: HTMLElement) {
        if (mathJaxLoaded) {
            nextTick(() => {
                if (window.MathJax && window.MathJax.typesetPromise) {
                    window.MathJax.typesetClear && window.MathJax.typesetClear([el]);
                    window.MathJax.typesetPromise([el]);
                }
            });
        } else {
            el.setAttribute('data-v-mathjax-pending', 'true');
        }
    },
    unmounted(el: HTMLElement) {
        if (window.MathJax && window.MathJax.typesetClear) {
            window.MathJax.typesetClear([el]);
        }
    }
};

export default vMathJax;
