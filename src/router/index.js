import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Menu from '@/components/Menu';
import Menu2 from '@/components/Menu2';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu,
    },
    {
      path: '/menu2',
      name: 'Menu2',
      component: Menu2,
    },
  ],
});
