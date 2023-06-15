const { defineConfig } = require('@vue/cli-service')

const isProduction = process.env.NODE_ENV === 'production'
const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

/**
 * @description: 关闭预加载
 * @param {*} config webpack 的配置项
 * @return {*}
 */
const applyPrefetch = config => {
  if (!isProduction) {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  }
}

/**
 * @description: 添加 svg-sprite-loader
 * @param {object} config webpack 的配置项
 * @return {*} void
 */
const applySvgSpriteLoader = config => {
  config.module
    .rule('svg')
    .exclude.add(resolve('src/assets/svg/icons'))
    .end()
  config.module
    .rule('icons')
    .test(/\.svg$/)
    .include.add(resolve('src/assets/svg/icons'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]'
    })
    .end()
}

module.exports = defineConfig({
  chainWebpack (config) {
    applyPrefetch(config)
    applySvgSpriteLoader(config)
  },
  transpileDependencies: true
})
