import personalCenter from './svg'
import home from './home'
import groupOne from './group-one'
import groupTwo from './group-two'
import type { RouteRecordRaw } from 'vue-router'

const dynamicRoutes: RouteRecordRaw[] = [
  home,
  personalCenter,
  groupOne,
  groupTwo
]

export default dynamicRoutes
