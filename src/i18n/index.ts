import { createI18n } from 'vue-i18n'
import zhLocale from './lang/zh'
import enLocale from './lang/en'
import store from '@/store'
import type { State } from '@/store'

const messages = {
  en: {
    msg: {
      ...enLocale
    }
  },
  zh: {
    msg: {
      ...zhLocale
    }
  }
}

const i18n = createI18n({
  // 使用 composition api
  legacy: false,
  // 全局使用 t 函数
  globalInjection: true,
  // 语言
  locale: (store.state as State).system.language,
  // 数据源
  messages
})

export default i18n
