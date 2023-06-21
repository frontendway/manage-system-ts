<template>
  <el-breadcrumb
    id="guide-breadcrumb"
    separator="/"
  >
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="b in breadcrumbs"
        :key="b.path"
        :to="{ path: b.path }"
      >
        {{ b.meta.title }}
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbs = ref([])
watch(route, () => {
  breadcrumbs.value = route.matched.filter(item => item.meta.title)
}, { immediate: true })

</script>

<style lang="scss" scoped>
.breadcrumb-enter-from{
  opacity: 0;
  transform: translateX(50px);
}
.breadcrumb-enter-active,.breadcrumb-leave-from{
  transition: all .5s ease 0s;
}
</style>
