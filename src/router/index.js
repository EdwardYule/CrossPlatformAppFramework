import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

export const routes = [
  {
    path: '/',
    name: '首页',
    redirect: '/home',
    component: Main,
    icon: '首页',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/AboutView.vue'),
        meta: {
          title: 'Home'
        },
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue')
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
