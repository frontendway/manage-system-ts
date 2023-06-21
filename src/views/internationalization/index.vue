<template>
  <div>
    {{ $t('msg.navBar.themeChange') }}
  </div>
  <el-button @click="toggleLanguage">
    切换中英文
  </el-button>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

const i18n = useI18n()
const store = useStore()

const toggleLanguage = () => {
  const language = store.state.system.language === 'en' ? 'zh' : 'en'
  i18n.locale.value = language
  store.commit('system/setLanguage', language)
  // 组件中使用 i18n
  ElMessage.success(i18n.t('msg.navBar.themeChange'))
}

/*
  js 文件中使用 i18n
  import i18n from '@/i18n'
  i18n.global.t('msg.navBar.themeChange')
*/

</script>

<style scoped>

</style>
