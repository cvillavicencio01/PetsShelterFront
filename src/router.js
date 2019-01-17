import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', component: 'Landing' },
  { path: '/signin', component: 'Signin' }, // like login
  { path: '/signup', component: 'Signup' }, // register
  { path: '/account', component: 'Home' },
  { path: '/new-report', component: 'CreatePet' },
  { path: '/details/:Pid', component: 'PetDetails', name: 'details' },
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
  const publicPages = ['/','/signin', '/signup','/new-report'];
  const publicNames = ['details'];

  const authRequired = !(!publicPages.includes(to.path) || !publicNames.includes(to.name) );
  const loggedIn = localStorage.getItem('user');

  if ((to.path === '/signup' || to.path === '/signin') && loggedIn){
    return next('/account');
  }

  if (authRequired && !loggedIn) {
    return next('/signin');
  }

  next();
})
