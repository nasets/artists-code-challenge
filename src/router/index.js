import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home-layout" */ '@/layouts/HomeLayout.vue'),
    children: [
      {
        path: '',
        name: 'characters-page',
        component: () => import(/* webpackChunkName: "characters-page" */ '@/pages/CharactersPage.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
