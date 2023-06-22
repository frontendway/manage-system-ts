import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/layout/index.vue'

const groupOne: RouteRecordRaw = {
  name: 'groupOne',
  path: '/groupOne',
  component: Layout,
  meta: {
    title: '一组',
    isMenu: true
  },
  children: [
    {
      name: 'breadcrumb',
      path: '/groupOne/breadcrumb',
      meta: {
        title: '动态面包屑',
        isMenu: true
      },
      component: () => import('@/views/breadcrumb/index.vue')
    },
    {
      name: 'internationalization',
      path: '/groupOne/internationalization',
      meta: {
        title: '国际化',
        isMenu: true
      },
      component: () => import('@/views/internationalization/index.vue')
    },
    {
      name: 'customTheme',
      path: '/groupOne/customTheme',
      meta: {
        title: '自定义主题',
        isMenu: true
      },
      component: () => import('@/views/custom-theme/index.vue')
    }
  ]
}

export default groupOne
