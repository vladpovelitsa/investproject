import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
 {
  path: '/login',
  name: 'login',
  component: () => import('../components/Login.vue'),
 },
 {
  path: '/',
  name: 'home',
  component: () => import('../App.vue'),
 },
 {
  path: '/new-project',
  name: 'new-project',
  component: () => import('../components/CreateProject.vue'),
 },
 {
  path: '/statistics',
  name: 'statistics',
  component: () => import('../components/Statistics.vue'),
 },
 // start
 {
  path: '/start',
  name: 'start',
  component: () => import('../components/start/Start.vue'),
 },
 {
  path: '/start/dividends-cycle',
  name: 'dividends-cycle',
  component: () => import('../components/start/DividendsCycle.vue'),
 },
 {
  path: '/start/dividends-user',
  name: 'dividends-user',
  component: () => import('../components/start/DividendsUser.vue'),
 },
 {
  path: '/start/new-cycle',
  name: 'new-cycle',
  component: () => import('../components/start/NewCycle.vue'),
 },
 {
  path: '/start/approve',
  name: 'approve',
  component: () => import('../components/start/Approve.vue'),
 },
 {
  path: '/start/done',
  name: 'done',
  component: () => import('../components/start/Done.vue'),
 },
 // start
 {
  path: '/settings',
  name: 'settings',
  component: () => import('../components/Settings.vue'),
 },
 {
  path: '/change-fund',
  name: 'change-fund',
  component: () => import('../components/ChangeFund.vue'),
 },
 {
  path: '/add-spend',
  name: 'add-spend',
  component: () => import('../components/AddSpend.vue'),
 },
 {
  path: '/add-user',
  name: 'add-user',
  component: () => import('../components/AddUser.vue'),
 },
 {
  path: '/profile',
  name: 'profile',
  component: () => import('../components/Profile.vue'),
 },
 {
  path: '/users',
  name: 'users',
  component: () => import('../components/Users.vue'),
 },
 {
  path: '/history',
  name: 'history',
  component: () => import('../components/History.vue'),
 },
];

const router = new VueRouter({
 mode: 'history',
 base: '/',
 routes,
});

export default router;
