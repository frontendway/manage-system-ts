import Layout from '@/components/layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'

const personalCenter: RouteRecordRaw = {
  path: '/layout1',
  name: 'layout1',
  component: Layout,
  redirect: '/layout1/personalCenter',
  children: [
    {
      path: '/layout1/personalCenter',
      name: 'personalCenter',
      component: () => import('@/views/personal-center/index.vue')
    }
  ]
}

export default personalCenter
