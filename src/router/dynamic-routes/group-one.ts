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
      name: 'dyMenus',
      path: '/groupOne/dyMenus',
      meta: {
        title: '动态菜单',
        isMenu: true
      },
      component: () => import('@/views/dy-menus/index.vue')
    }
  ]
}

export default groupOne
