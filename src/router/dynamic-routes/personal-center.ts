import Layout from '@/components/layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'

const personalCenter: RouteRecordRaw = {
  path: '/personal',
  name: 'personal',
  component: Layout,
  children: [
    {
      path: 'personalCenter',
      name: 'personalCenter',
      component: () => import('@/views/personal-center/index.vue')
    }
  ]
}

export default personalCenter
