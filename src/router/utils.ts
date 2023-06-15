import type { Router } from 'vue-router'
import store from '@/store'
import type { State } from '@/store'
import { fetchUserProfile } from '@/api/system'

// 根据角色分配路由权限
const getCurrentRoutes = (menus: string[]) => {
  console.log(menus)
}

// 安装 beforeEach 钩子
export const installBeforeEach = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    const token = (store.state as State).user.token
    if (token) {
      const userInfo = await fetchUserProfile()
      getCurrentRoutes(userInfo.data.permission.menus)
      next()
    } else {
      next()
    }
  })
}
