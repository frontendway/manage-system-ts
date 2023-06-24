import * as XLSX from 'xlsx'
import type { CommonAttrs } from '@/types'

type Result = {
  headers: unknown
  bodys: unknown
}

export interface Props {
  onBeforeUpload: (file: File) => boolean
  onSuccess: (result: Result) => void
}

export const upload = (file: File, props: Props) => {
  if (props.onBeforeUpload && props.onBeforeUpload(file)) {
    return
  }
  // 读取数据
  readData(file, props)
}

const readData = (file: File, props: Props) => {
  const reader = new FileReader()
  reader.onload = ev => {
    const data = ev.target!.result
    // 利用 XLSX 解析数据
    const workBook = XLSX.read(data, { type: 'array' })
    // 获取第一张表格名称
    const firstSheetName = workBook.SheetNames[0]
    // 读取 sheet1 的数据
    const workSheet = workBook.Sheets[firstSheetName]
    // 解析表头
    const headers = fetchHeaderRow(workSheet)
    // 解析表体
    const bodys = XLSX.utils.sheet_to_json(workSheet)
    props.onSuccess({ headers, bodys })
  }
  reader.readAsArrayBuffer(file)
}

const fetchHeaderRow = (sheet: CommonAttrs) => {
  const headers = []
  const range = XLSX.utils.decode_range(sheet['!ref'])
  let C
  const R = range.s.r

  for (C = range.s.c; C <= range.e.c; ++C) {
    const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
    let hdr = 'UNKNOWN' + C
    if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
    headers.push(hdr)
  }

  return headers
}
