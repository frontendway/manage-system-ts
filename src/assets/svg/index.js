import SvgIcon from '@/components/svgIcon/index'

const requireCtx = require.context('./icons', false, /(\.svg)$/)
requireCtx.keys().forEach(key => requireCtx(key))

export default app => {
  app.component('SvgIcon', SvgIcon)
}
