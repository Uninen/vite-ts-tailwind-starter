import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/pages/Index.vue'
import About from '@/pages/About.vue'

const routes = [
  {
    path: '/',
    component: Index,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
  {
    path: '/about/',
    component: About,
    meta: {
      title: 'About',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
