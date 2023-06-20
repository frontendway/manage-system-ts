<template>
  <el-menu
    :default-active="currentRoutePath"
    router
  >
    <menu-item
      v-for="routeItem in store.state.user.currentRoutes"
      :key="routeItem.path"
      :route-item="routeItem"
    />
  </el-menu>
</template>

<script setup lang="ts">
import MenuItem from './menu-item.vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()

let currentRoutePath = ''
if (route.meta.singleChild) {
  const firstRoute = route.matched[0]
  currentRoutePath = firstRoute && firstRoute.path
} else {
  currentRoutePath = route.path
}

</script>

<style scoped lang="scss">

</style>
