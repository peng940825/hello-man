import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import MotherView from '../views/MotherView.vue';
import FuckerView from '../views/FuckerView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/mother',
      name: 'mother',
      component: MotherView,
    },
    ,
    {
      path: '/fucker',
      name: 'fucker',
      component: FuckerView,
    },
  ],
});

export default router;
