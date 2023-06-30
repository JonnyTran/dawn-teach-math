import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/courses',
    name: 'courses',
    component: () => import('../views/CourseView.vue')
  },
  {
    path: '/courses/:course_id/units/:unit_id',
    name: 'units',
    component: () => import('../views/UnitView.vue')
  },
  {
    path: '/bio',
    name: 'bio',
    component: () => import('../views/BioView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
]

const router = createRouter({
  linkExactActiveClass: 'is-active',  // for the corresponding NavbarLink to be active
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router;
