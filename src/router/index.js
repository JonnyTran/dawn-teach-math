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
    component: () => import('../views/CoursesView.vue')
  },
  {
    path: '/courses/:sectionId',
    name: 'section',
    component: () => import('../views/SectionView.vue')
  },
  {
    path: '/courses/:sectionId/lesson/:pageId',
    name: 'lesson',
    component: () => import('../views/LessonView.vue')
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
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  linkExactActiveClass: 'is-active', // for the corresponding NavbarLink to be active
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
