import {createApp} from 'vue';
import App from './views/App.vue';
import router from './router';
import vMathJax from './directives/mathjax';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import './style.css';

/* add icons to the library */
library.add(faMagnifyingGlass)

const app = createApp(App);

app.use(router)
app.directive('mathjax', vMathJax);
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app');
