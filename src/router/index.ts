import {createRouter, createWebHistory} from 'vue-router';
import App from '../views/App.vue';
import NotationView from '../views/Notation.vue';
import GleichungenView from '../views/Gleichungen.vue';
import AnalysisView from '../views/Analysis.vue';
import ReportView from '../views/Report.vue';

const routes = [
    {path: '/', name: 'home', component: App},
    {path: '/notation', name: 'notation', component: NotationView},
    {path: '/gleichungen', name: 'gleichungen', component: GleichungenView},
    {path: '/analysis', name: 'analysis', component: AnalysisView},
    {path: '/report', name: 'report', component: ReportView},
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;