import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('../components/admin/Login.vue'),
	},
	{
		path: '/',
		name: 'home',
		component: () => import('../App.vue'),
	},
	{
		path: '/new-project',
		name: 'new-project',
		component: () => import('../components/admin/CreateProject.vue'),
	},
	{
		path: '/statistics',
		name: 'statistics',
		component: () => import('../components/admin/Statistics.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: '/',
	routes,
});

export default router;
