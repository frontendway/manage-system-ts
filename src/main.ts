import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { installBeforeEach } from './router/utils'
import store, { key } from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

installBeforeEach(router)

createApp(App)
  .use(ElementPlus)
  .use(store, key)
  .use(router)
  .mount('#app')
