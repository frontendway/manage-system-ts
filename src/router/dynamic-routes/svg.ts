import Layout from '@/components/layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'

const personalCenter: RouteRecordRaw = {
  path: '/layout1',
  name: 'layout1',
  component: Layout,
  redirect: '/layout1/svg',
  meta: {
    title: 'SVG解决方案',
    isMenu: true,
    singleChild: true
  },
  children: [
    {
      path: '/layout1/svg',
      name: 'svg',
      component: () => import('@/views/svg/index.vue')
    }
  ]
}

export default personalCenter
