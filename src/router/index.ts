import Vue from 'vue';
import VueRouter, { Location, Route, RouteConfig } from 'vue-router';
import { makeHot, reload } from '../util/hot-reload';
import store from '../store'
const LoginComponent = () => import('../login').then(({ LoginComponent }) => LoginComponent);

// if (process.env.ENV === 'development' && module.hot) {
//   const homeModuleId = './components/home';
//   const aboutModuleId = './components/about';
//   const listModuleId = './components/list';

//   // first arguments for `module.hot.accept` and `require` methods have to be static strings
//   // see https://github.com/webpack/webpack/issues/5668
//   makeHot(homeModuleId, homeComponent,
//     module.hot.accept('./components/home', () => reload(homeModuleId, (<any>require('./components/home')).HomeComponent)));

//   makeHot(aboutModuleId, aboutComponent,
//     module.hot.accept('./components/about', () => reload(aboutModuleId, (<any>require('./components/about')).AboutComponent)));

//   makeHot(listModuleId, listComponent,
//     module.hot.accept('./components/list', () => reload(listModuleId, (<any>require('./components/list')).ListComponent)));
// }

Vue.use(VueRouter);

export const routes: () => RouteConfig[] = () => [
  {
    path: '/',
    component: LoginComponent,
  }
];

const router = new VueRouter({ mode: 'history', routes: routes() })

// router.beforeEach((to, from, next) => {
//     if (!store.state.login) {
//       if (to.path !== '/login') {
//         next({path: '/login'})
//       } else {
//         next()
//       }
//     } else {
//       next()
//     }
//   })

export default router
