import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Authorisation from '../views/Authorisation.vue'
import AuthorisationRedirect from "@/views/AuthorisationRedirect.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
   path: '/auth',
   name: 'Authorisation',
   component: Authorisation
  },
  {
    path: '/auth/redirect',
    name: "Authorisation redirect",
    component: AuthorisationRedirect,
    props: (route) => ({github: route.query.code})
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
