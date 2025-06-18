import { createApp } from 'vue';
import App from './views/App.vue';
import router from './router';
import vMathJax from './directives/mathjax';

const app = createApp(App);

app.use(router)
app.directive('mathjax', vMathJax);

app.mount('#app');
