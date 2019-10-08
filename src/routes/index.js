import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/list',
		component: () => import(`../pages/List`)
	},
	{
		path: '/example/:id',
		component: () => import(`../pages/Example`)
	},
	{
		path: '*',
		redirect: '/list'
	}
];

const router = new VueRouter({
	mode: 'history',
	routes
});

export default router;

