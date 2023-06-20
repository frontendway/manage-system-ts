import Layout from '@/components/layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'

const personalCenter: RouteRecordRaw = {
  path: '/layout1',
  name: 'layout1',
  component: Layout,
  redirect: '/layout1/personalCenter',
  meta: {
    title: 'SVG解决方案',
    isMenu: true
  },
  children: [
    {
      path: '/layout1/svg',
      name: 'svg',
      meta: {
        singleChild: true
      },
      component: () => import('@/views/personal-center/index.vue')
    }
  ]
}

export default personalCenter
