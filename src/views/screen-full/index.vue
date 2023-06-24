<template>
  <el-button @click="onScreenFull">
    全屏
  </el-button>
</template>

<script setup lang="ts">
import screenfull from 'screenfull'

const onScreenFull = () => {
  screenfull.toggle()
}
</script>

<style scoped>

</style>
