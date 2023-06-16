import type { Router, RouteRecordRaw, RouteRecordName } from 'vue-router'
import store from '@/store'
import type { State } from '@/store'

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

// 添加当前用户匹配的路由
const addCurrentRoutes = (router: Router, routes: RouteRecordRaw[]) => {
  routes.forEach(route => {
    router.addRoute(route)
  })
}

// 安装 beforeEach 钩子
export const installBeforeEach = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    debugger
    const token = (store.state as State).user.token
    const userInfo = (store.state as State).user.userInfo
    const loginpath = to.fullPath === '/login'

    if (token) {
      if (!userInfo) {
        const userInfo = await store.dispatch('user/fetchUserProfile')
        const currentRoutes = obtainCurrentRoutes(userInfo.data.permission.menus)
        addCurrentRoutes(router, currentRoutes)
      }
      loginpath ? next('/') : next()
    } else {
      loginpath ? next() : next('/login')
    }
  })
}
