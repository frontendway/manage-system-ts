<template>
  <excel-upload
    :on-before-upload="onBeforeUpload"
    :on-success="onSuccess"
  />
</template>

<script setup lang="ts">
import ExcelUpload from './excel-upload.vue'

const onBeforeUpload = (file: File) => {
  console.log(file)
  return false
}

const onSuccess = (data: any) => {
  console.log(data)
}

</script>

<style scoped>

</style>
