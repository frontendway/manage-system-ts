<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    router
  >
    <menu-item
      v-for="route in store.state.user.currentRoutes"
      :key="route.path"
      :route="route"
    />
  </el-menu>
</template>

<script setup lang="ts">
import MenuItem from './menu-item.vue'
import { useStore } from '@/store'

const store = useStore()

</script>

<style scoped lang="scss">

</style>
