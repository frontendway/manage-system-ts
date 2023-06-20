import { createRouter, createWebHashHistory } from 'vue-router'
import staticRoutes from './static-rotes'

// 约束路由元信息
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    isMenu?: boolean
    singleChild?: boolean
  }
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes
})

export default router
