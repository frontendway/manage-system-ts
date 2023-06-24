<template>
  <el-table
    ref="tableRef"
    :data="tableDataRef"
    style="width: 100%"
  >
    <el-table-column
      prop="id"
      label="Id"
    />
    <el-table-column
      prop="name"
      label="Name"
    />
  </el-table>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { initSortable } from './sorTable'
import { ElTableType } from '@/types'

const tableRef = ref<ElTableType>()

const tableDataRef = ref([
  { id: 1, name: '小明' },
  { id: 2, name: '小强' }
])

onMounted(() => {
  initSortable(tableRef)
})

</script>
