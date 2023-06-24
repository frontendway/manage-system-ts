<template>
  <el-button @click="startUpload">
    点击上传
  </el-button>
  <input
    ref="inputElm"
    type="file"
    class="file-input"
    @change="fileChange"
  >
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { upload } from './utils'

type Result = {
  headers: unknown
  bodys: unknown
}

type Props = {
  onBeforeUpload: (file: File) => boolean
  onSuccess: (result: Result) => void
}

const props = defineProps<Props>()

const inputElm = ref(null)
const startUpload = () => {
  (inputElm.value! as HTMLInputElement).click()
}

const fileChange = (ev: Event) => {
  const rawFile = (ev.target! as HTMLInputElement).files![0]
  if (!rawFile) return

  (inputElm.value! as HTMLInputElement).value = ''
  upload(rawFile, props)
}

</script>

<style lang="scss" scoped>
.file-input{
  display: none;
}
</style>
