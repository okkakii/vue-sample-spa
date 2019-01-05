import VueRouter from 'vue-router';
import Top from './pages/top.vue';
import About from './pages/about.vue';

const routes = [
  {
    path: '/',
    component: Top
  },
  {
    path: '/about',
    component: About
  }
];
export default new VueRouter({ routes, mode: 'history' });
