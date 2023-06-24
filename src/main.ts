import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { installBeforeEach } from './router/utils'
import store, { key } from './store'
import installGlobalComponents from './components'
import installDirectives from './directives'
import i18n from './i18n'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/styles/index.scss'

installBeforeEach(router)

const app = createApp(App)
installDirectives(app)
installGlobalComponents(app)

app.use(ElementPlus)
  .use(store, key)
  .use(router)
  .use(i18n)
  .mount('#app')
