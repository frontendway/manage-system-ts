import SvgIcon from './svg-icon/index.vue'
import type { App } from 'vue'

const requireCtx = require.context('../assets/svg/icons', false, /(\.svg)$/)
requireCtx.keys().forEach(key => requireCtx(key))

const installGlobalComponents = (app: App) => {
  app.component('SvgIcon', SvgIcon)
}

export default installGlobalComponents
