import Vue from 'vue'
import VueRouter from 'vue-router'
import TaskListPage from '../pages/TaskList'
import RegisterPage from '../pages/Register'
import ConfirmationPage from '../pages/Confirmation'
import LoginPage from '../pages/Login'
import DashboardPage from '../pages/Dashboard'
import { store } from '../store'

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: TaskListPage
    },
    {
    	path: '/register',
    	name: 'register',
    	component: RegisterPage
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: ConfirmationPage
    },
    {
    	path: '/login',
    	name: 'login',
    	component: LoginPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage,
      meta: {
        requiresAuth: true
      }
    }
  ]
});


// todo: clean this up
// router.beforeEach((to, from, next) => {
//     if(to.matched.some(record => record.meta.requiresAuth)) {
//         if (localStorage.getItem('jwt') == null) {
//             next({
//                 path: '/login',
//                 params: { nextUrl: to.fullPath }
//             })
//         } else {
//             let user = JSON.parse(localStorage.getItem('user'))
//             if(to.matched.some(record => record.meta.is_admin)) {
//                 if(user.is_admin == 1){
//                     next()
//                 }
//                 else{
//                     next({ name: 'userboard'})
//                 }
//             }else {
//                 next()
//             }
//         }
//     } else if(to.matched.some(record => record.meta.guest)) {
//         if(localStorage.getItem('jwt') == null){
//             next()
//         }
//         else{
//             next({ name: 'userboard'})
//         }
//     }else {
//         next() 
//     }
// });