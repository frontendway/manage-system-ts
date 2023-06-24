<template>
  <div
    v-if="routeItem.meta && routeItem.meta.isMenu"
    class="menu-item-outer"
  >
    <el-sub-menu
      v-if="routeItem.meta.singleChild === false"
      :index="routeItem.path"
    >
      <template #title>
        <span>{{ routeItem.meta && routeItem.meta.title }}</span>
      </template>
      <menu-item
        v-for="item in routeItem.children"
        :key="item.path"
        :route-item="item"
      />
    </el-sub-menu>
    <el-menu-item
      v-else
      :index="routeItem.path"
    >
      <span>{{ routeItem.meta && routeItem.meta.title }}</span>
    </el-menu-item>
  </div>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

type Props = {
  routeItem: RouteRecordRaw
}

defineProps<Props>()

</script>

<style scoped lang="scss">

</style>
