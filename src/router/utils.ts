import type { Router, RouteRecordRaw, RouteRecordName } from 'vue-router'
import store from '@/store'
import type { State } from '@/store'
import { fetchUserProfile } from '@/api/system'
import dynamicRoutes from './dynamic-routes'

// 根据角色分配路由权限
const obtainCurrentRoutes = (menus: RouteRecordName[]) => {
  const _obtainCurrentRoutes = (routes: RouteRecordRaw[]) => {
    const newRoutes: RouteRecordRaw[] = []

    routes.forEach((routeItem) => {
      const route = {} as RouteRecordRaw
      const isInclude = menus.includes(routeItem.name!)
      const children = routeItem.children

      if (isInclude) {
        Object.assign(route, routeItem)
        newRoutes.push(route)
      }

      if (Array.isArray(children)) {
        route.children = _obtainCurrentRoutes(children)
      }
    })

    return newRoutes
  }

  return _obtainCurrentRoutes(dynamicRoutes)
}

// 安装 beforeEach 钩子
export const installBeforeEach = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    const token = (store.state as State).user.token
    if (token) {
      const userInfo = await fetchUserProfile()

      obtainCurrentRoutes(userInfo.data.permission.menus)
      next()
    } else {
      next()
    }
  })
}
