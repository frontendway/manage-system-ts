import formula from './formula.json'
import rgbHex from 'rgb-hex'
import color from 'css-color-function'
import axios from 'axios'
import eleJson from 'element-plus/package.json'
import { DEFAULT_COLOR } from '@/constant/index'
import type { CommonAttrs } from '@/types'

const version = eleJson.version

/**
 * @description: 根据当前主题色，生成新的 css
 */
export const setNewCss = async (primary: string) => {
  const colors = generatorColors(primary)
  const cssText = await fetchOriginCss(colors!)
  writeCss(cssText)
}

/**
 * @description: 将 css 写入 style 标签中
 */
const writeCss = (newCss: string) => {
  const [document, _oldStyle] = [window.document, (window.document as CommonAttrs)._oldStyle]
  if (_oldStyle) {
    _oldStyle.innerText = newCss
    return
  }

  const style = document.createElement('style')
  style.innerText = newCss
  document.head.append((document as CommonAttrs)._oldStyle = style)
}

const cacheOriginCss = () => {
  let cache = ''

  return () => {
    if (cache) return Promise.resolve({ data: cache })

    const url = `https://unpkg.com/element-plus@${version}/dist/index.css`
    return axios(url)
      .then(resp => {
        return ((cache = resp.data), resp)
      })
  }
}
const _fetchOriginCss = cacheOriginCss()

/**
 * @description: 获取当前 element-plus 的默认样式表，替换成用户选择的主题色
 */
const fetchOriginCss = async (colors: CommonAttrs) => {
  const { data } = await _fetchOriginCss()
  return createNewCss(data, colors)
}

/**
 * @description: 根据主色生成色值表
 */
const generatorColors = (primary: string) => {
  if (!primary) return

  const colors: CommonAttrs = {
    primary
  }
  Object.keys(formula).forEach(key => {
    const value = formula[key as keyof typeof formula].replace(/primary/g, primary)
    colors[key] = '#' + rgbHex((color as CommonAttrs).convert(value))
  })

  return colors
}

/**
 * @description: 将原有样式表中的色值替换成当前主题色色值
 */
const createNewCss = (data: string, colors: CommonAttrs) => {
  const colorsMap = {
    [DEFAULT_COLOR]: 'primary',
    '#3a8ee6': 'shade-1',
    '#53a8ff': 'light-1',
    '#66b1ff': 'light-2',
    '#79bbff': 'light-3',
    '#8cc5ff': 'light-4',
    '#a0cfff': 'light-5',
    '#b3d8ff': 'light-6',
    '#c6e2ff': 'light-7',
    '#d9ecff': 'light-8',
    '#ecf5ff': 'light-9'
  }
  Object.keys(colorsMap).forEach(key => {
    const value = colorsMap[key as keyof typeof colorsMap]
    data = data.replace(new RegExp(key, 'ig'), colors[value])
  })

  return data
}
