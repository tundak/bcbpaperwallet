import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Create from '../components/Create.vue';
import Redeem from '../components/Redeem.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'Create',
      component: Create,
    },
    /*{
      path: '/create',
      name: 'Create',
      component: Create,
    },
    {
      path: '/redeem',
      name: 'Redeem',
      component: Redeem,
    },*/
  ],
});