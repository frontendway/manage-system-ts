<template>
  <el-dialog
    :model-value="modelValue"
    title="Tips"
    width="30%"
    @close="close"
  >
    <div>
      <el-color-picker v-model="color" />
    </div>
    <template #footer>
      <el-button
        type="primary"
        @click="sure"
      >
        确定
      </el-button>
      <el-button
        type="primary"
        @click="close"
      >
        取消
      </el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/store'
import { setNewCss } from '@/utils/theme'

const store = useStore()

type Props = {
  modelValue: boolean
}

defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

const color = ref(store.state.system.themeColor)
const sure = () => {
  store.commit('system/setThemeColor', color.value)
  emit('update:modelValue', false)

  setNewCss(color.value)
}
const close = () => {
  emit('update:modelValue', false)
}
</script>
