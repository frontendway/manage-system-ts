import type { RouteRecordRaw } from 'vue-router'

const home: RouteRecordRaw = {
  path: '/',
  name: 'home',
  redirect: '/layout1'
}

export default home
