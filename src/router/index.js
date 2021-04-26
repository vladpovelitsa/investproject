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
];

const router = new VueRouter({
	mode: 'history',
	base: '/',
	routes,
});

export default router;
