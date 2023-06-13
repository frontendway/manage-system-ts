import SvgIcon from './svg-icon/index.vue'
import type { App } from 'vue'

const installGlobalComponents = (app: App) => {
  app.component('SvgIcon', SvgIcon)
}

export default installGlobalComponents
