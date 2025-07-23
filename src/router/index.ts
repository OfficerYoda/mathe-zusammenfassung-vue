import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue'
import ReportView from '../views/Report.vue';
import NotationView from '../views/Notation.vue';
import GleichungenView from '../views/Gleichungen.vue';
import AnalysisView from '../views/Analysis.vue';
import GeometrieView from '../views/Geometrie.vue';
import StochastikView from '../views/Stochastik.vue';

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/report', name: 'report', component: ReportView},
    {path: '/notation', name: 'notation', component: NotationView},
    {path: '/gleichungen', name: 'gleichungen', component: GleichungenView},
    {path: '/analysis', name: 'analysis', component: AnalysisView},
    {path: '/geometrie', name: 'geometrie', component: GeometrieView},
    {path: '/stochastik', name: 'stochastik', component: StochastikView},
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;