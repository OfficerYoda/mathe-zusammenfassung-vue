import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/App.vue';
import NotationView from '../views/Notation.vue';
import GleichungenView from '../views/Gleichungen.vue';
import AnalysisView from '../views/Analysis.vue';
import ReportView from '../views/Report.vue';

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/Notation', name: 'notation', component: NotationView },
    { path: '/Gleichungen', name: 'gleichungen', component: GleichungenView },
    { path: '/Analysis', name: 'analysis', component: AnalysisView},
    { path: '/Report', name: 'report', component: ReportView },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;