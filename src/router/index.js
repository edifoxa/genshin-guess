import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Classic from '../views/GameModes/Classic.vue'
import Quote from '../views/GameModes/Quote.vue'
import Splash from '../views/GameModes/Splash.vue'
import NotExist from '../views/NotExist.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/classic',
    name: 'Classic',
    component: Classic
  },
  {
    path: '/quote',
    name: 'Quote',
    component: Quote
  },
  {
    path: '/splash',
    name: 'Splash',
    component: Splash
  },

  // catchall 404 Not Found
  {
    path: '/:catchAll(.*)',
    name: 'NotExist',
    component: NotExist
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
