<template>
  <custom-theme v-model="isVisibleRef" />
  <el-button type="primary">
    测试 element ui 切换主题色
  </el-button>
  <el-button @click="isVisibleRef = true">
    显示主题面板
  </el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomTheme from '@/components/theme-select/index.vue'

const isVisibleRef = ref(false)

</script>

<style scoped>

</style>
