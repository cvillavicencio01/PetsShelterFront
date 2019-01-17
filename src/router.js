import Vue from 'vue'
import Router from 'vue-router'

/*Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  ]
})*/

const routerOptions = [
  { path: '/', component: 'Landing' },
  { path: '/signin', component: 'Signin' }, // like login
  { path: '/signup', component: 'Signup' }, // register
  { path: '/account', component: 'Home' },
  { path: '*', redirect: '/' }
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
});

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes
});


router.beforeEach((to, from, next) => {
  const publicPages = ['/','/signin', '/signup'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if ((to.path === '/signup' || to.path === '/signin') && loggedIn){
    return next('/account');
  }

  if (authRequired && !loggedIn) {
    return next('/signin');
  }

  next();
})
