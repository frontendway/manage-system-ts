<template>
  <div
    v-if="isExternal"
    class="svg-icon-outer"
    :style="externalIconStyle"
  />
  <svg
    v-else
    class="svg-icon-outer"
  >
    <use :xlink:href="innerIconLink" />
  </svg>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { hasHttp } from '@/utils/index'

const props = defineProps({
  url: {
    type: String,
    default: ''
  }
})

// 判断是否外链的 icon 地址
const isExternal = computed(() => hasHttp(props.url))

// 动态设置外链 icon 的样式
const externalIconStyle = computed(() => ({
  mask: `url(${props.url}) no-repeat 50% 50%`,
  'webkit-mask': `url(${props.url}) no-repeat 50% 50%`
}))

// 计算出项目内部引入的 icon 地址
const innerIconLink = computed(() => `#icon-${props.url}`)

</script>

<style scoped lang="scss">
.svg-icon-outer{
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  background-color: currentColor;
  mask-size: cover !important;
}
</style>
