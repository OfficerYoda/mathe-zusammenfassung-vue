import {createApp} from 'vue';
import App from './views/App.vue';
import router from './router';
import vMathJax from './directives/mathjax';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faHouse, faMagnifyingGlass, faMoon, faSun, faXmark} from '@fortawesome/free-solid-svg-icons'
import './style.css';

// Firefox compatibility polyfills
if (!window.requestIdleCallback) {
    window.requestIdleCallback = function(cb: IdleRequestCallback) {
        return setTimeout(cb, 1);
    };
}

if (!window.cancelIdleCallback) {
    window.cancelIdleCallback = function(id: number) {
        clearTimeout(id);
    };
}

// Firefox smooth scrolling polyfill
if (!CSS.supports('scroll-behavior', 'smooth')) {
    // Add smooth scroll polyfill for older Firefox versions
    document.documentElement.style.scrollBehavior = 'smooth';
}

library.add(faMagnifyingGlass)
library.add(faHouse)
library.add(faXmark)
library.add(faMoon)
library.add(faSun)

const app = createApp(App);

app.use(router)
app.directive('mathjax', vMathJax);
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app');
