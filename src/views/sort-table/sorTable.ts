import Sortable from 'sortablejs'
import { ElTableType } from '@/types'
import type { Ref } from 'vue'

export const initSortable = (tableRef: Ref<ElTableType | undefined>) => {
  const el = tableRef.value!.$el.querySelector('.el-table__body-wrapper table tbody')
  if (!el) return

  Sortable.create(el, {
    // 拖拽时的类名
    ghostClass: 'sortable-ghost',
    onEnd (ev) {
      const { newIndex, oldIndex } = ev
      console.log(newIndex, oldIndex)
    }
  })
}
