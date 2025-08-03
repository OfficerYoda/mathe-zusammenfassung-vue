import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue'

const ReportView = () => import('../views/Report.vue');
const NotationView = () => import('../views/Notation.vue');
const GleichungenView = () => import('../views/Gleichungen.vue');
const AnalysisView = () => import('../views/Analysis.vue');
const GeometrieView = () => import('../views/Geometrie.vue');
const StochastikView = () => import('../views/Stochastik.vue');
const ZusatzView = () => import('../views/Zusatz.vue');

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/report', name: 'report', component: ReportView},
    {path: '/notation', name: 'notation', component: NotationView},
    {path: '/gleichungen', name: 'gleichungen', component: GleichungenView},
    {path: '/analysis', name: 'analysis', component: AnalysisView},
    {path: '/geometrie', name: 'geometrie', component: GeometrieView},
    {path: '/stochastik', name: 'stochastik', component: StochastikView},
    {path: '/zusatz', name: 'Ergänzungen', component: ZusatzView},
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;