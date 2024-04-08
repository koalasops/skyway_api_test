import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import Room from '@/views/Room.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/room',
    name: 'room',
    component: Room
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;