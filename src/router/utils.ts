import type { Router } from 'vue-router'

// 根据角色分配路由权限

// 安装 beforeEach 钩子
export const installBeforeEach = (router: Router) => {
  router.beforeEach((to, from, next) => {
    next()
  })
}
