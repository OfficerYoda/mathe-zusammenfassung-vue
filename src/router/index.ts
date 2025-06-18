import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/App.vue';
import NotationView from '../views/Notation.vue';
import GleichungenView from '../views/Gleichungen.vue';
import AnalysisView from '../views/Analysis.vue';
import FeedbackView from '../views/Feedback.vue';

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/notation', name: 'notation', component: NotationView },
    { path: '/gleichungen', name: 'gleichungen', component: GleichungenView },
    { path: '/analysis', name: 'analysis', component: AnalysisView},
    { path: '/feedback', name: 'feedback', component: FeedbackView },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;