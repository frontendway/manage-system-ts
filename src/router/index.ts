import { createRouter, createWebHashHistory } from 'vue-router'
import staticRoutes from './static-rotes'

// 约束路由元信息
declare module 'vue-router' {
  interface RouteMeta {
    title: string
    icon: string
  }
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes
})

export default router
