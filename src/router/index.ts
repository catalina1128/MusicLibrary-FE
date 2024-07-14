import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
    },
    {
      path: '/artists/:artistId/albums/:albumTitle',
      name: 'album',
      component: () => import('../views/Album.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/Admin.vue')
    },
    {
      path: '/artists/edit/:artistId',
      name: 'edit-artist',
      component: () => import('../views/admin/Artist.vue')
    },
    {
      path: '/artists/add',
      name: 'add-artist',
      component: () => import('../views/admin/Artist.vue')
    },
    {
      path: '/artists/:id',
      name: 'artist-info',
      component: () => import('../views/Artist.vue')
    }
  ]
})

export default router
