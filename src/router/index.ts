import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// 约束路由元信息
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    icon?: string
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'home',
    component: () => import('@/views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
