import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Artists from '../views/Artists.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/artists',
      name: 'artists',
      component: () => import('../views/Artists.vue')
    }
  ]
})

export default router
