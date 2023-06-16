import personalCenter from './personal-center'
import home from './home'
import type { RouteRecordRaw } from 'vue-router'

const dynamicRoutes: RouteRecordRaw[] = [
  home,
  personalCenter
]

export default dynamicRoutes
