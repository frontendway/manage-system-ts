import Layout from '@/components/layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'

const personalCenterRoute: RouteRecordRaw = {
  path: '/personal',
  name: 'personal',
  component: Layout,
  children: [
    {
      path: '/personalCenter',
      name: 'personalCenter',
      component: () => import('@/views/personalCenter/index.vue')
    }
  ]
}

export default personalCenterRoute
