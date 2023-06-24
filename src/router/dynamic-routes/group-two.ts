import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/layout/index.vue'

const groupTwo: RouteRecordRaw = {
  path: '/groupTwo',
  name: 'groupTwo',
  meta: {
    title: '组二',
    singleChild: false,
    isMenu: true
  },
  redirect: '/groupTwo/import',
  component: Layout,
  children: [
    {
      path: '/groupTwo/import',
      name: 'import',
      meta: {
        title: 'excel 导入',
        isMenu: true
      },
      component: () => import('@/views/import/index.vue')
    },
    {
      path: '/groupTwo/export',
      name: 'export',
      meta: {
        title: '数组导出为 excel 表格',
        isMenu: true
      },
      component: () => import('@/views/export/index.vue')
    },
    {
      path: '/groupTwo/screenFull',
      name: 'screenFull',
      meta: {
        title: '全屏',
        isMenu: true
      },
      component: () => import('@/views/screen-full/index.vue')
    },
    {
      path: '/groupTwo/print',
      name: 'print',
      meta: {
        title: '打印',
        isMenu: true
      },
      component: () => import('@/views/print/index.vue')
    },
    {
      path: '/groupTwo/guide',
      name: 'guide',
      meta: {
        title: '引导页',
        isMenu: true
      },
      component: () => import('@/views/guide/index.vue')
    },
    {
      path: '/groupTwo/sortTable',
      name: 'sortTable',
      meta: {
        title: '表格拖拽排序',
        isMenu: true
      },
      component: () => import('@/views/sort-table/index.vue')
    }
  ]
}

export default groupTwo
