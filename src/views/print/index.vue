<template>
  <div id="print-box">
    打印的内容
  </div>
  <el-button v-print="printObj">
    打印
  </el-button>
</template>

<script setup lang="ts">

const printObj = {
  id: 'print-box',
  popTitle: '打印标题'
}

</script>

<style scoped>

</style>
