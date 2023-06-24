<template>
  <span
    id="guide-start"
    @click="showGuide"
  >
    <svg-icon
      url="guide"
    />
  </span>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'

let driver: any = null
onMounted(() => {
  /* eslint-disable */
  driver = new Driver({
    allowClose: false, // 禁止点击蒙版关闭
    closeBtnText: '关闭',
    nextBtnText: '下一个',
    prevBtnText: '上一个'
  })
})

const showGuide = () => {
  driver.defineSteps([
    {
      element: '#guide-start',
      popover: {
        title: 'a',
        description: 'b',
        position: 'bottom-right'
      }
    }
  ])
  driver.start()
}

</script>
