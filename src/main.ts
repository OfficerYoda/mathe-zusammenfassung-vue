import { createApp } from 'vue';
import App from './App.vue';
import vMathJax from './directives/mathjax'; // Import the custom directive

const app = createApp(App);

// Register the directive globally
app.directive('mathjax', vMathJax);

app.mount('#app');
