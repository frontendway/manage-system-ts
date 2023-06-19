<template>
  <div
    v-if="route.meta && route.meta.isMenu"
    class="menu-item-outer"
  >
    <el-sub-menu
      v-if="normalize(route)"
      :index="route.path"
    >
      <template #title>
        <span>{{ route.meta && route.meta.title }}</span>
      </template>
      <menu-item
        v-for="item in route.children"
        :key="item.path"
        :route="item"
      />
    </el-sub-menu>
    <el-menu-item
      v-else
      :index="route.path"
    >
      <span>{{ route.meta && route.meta.title }}</span>
    </el-menu-item>
  </div>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

type Props = {
  route: RouteRecordRaw
}

defineProps<Props>()

const normalize = (route: RouteRecordRaw) => {
  const children = route.children
  return children && children.length > 1
}

</script>

<style scoped lang="scss">

</style>
