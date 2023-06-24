<template>
  <el-button @click="onDownloadExcel">
    数组导出为 excel 表格
  </el-button>
</template>

<script setup lang="ts">

const excelData = [
  [
    'super-admin',
    '188xxxxxxxx',
    ['超级管理员'],
    '14300000000000'
  ]
]
const onDownloadExcel = async () => {
  const excel = await import(/* webpackChunkName: "Export2Excel" */ './export2Excel.js')
  excel.export_json_to_excel({
    // 表头
    header: ['姓名', '联系方式', '角色', '开通时间'],
    // 数据
    data: excelData,
    // 文件名称
    filename: '用户角色'
    // 是否自动列宽
    // 文件类型
  })
}
</script>

<style scoped>

</style>
