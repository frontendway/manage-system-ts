import type { CommonAttrs } from '@/types'
import axios from 'axios'

// 判断是否网络地址
export const hasHttp = (url: string): boolean => {
  return /^(https?:|mailto:|tel:)/.test(url)
}

type Item = {
  path: string
  meta: CommonAttrs
  name: string
  children?: Item[]
}

// 获取指定层级下所有的树形数据
export const traversalTree = (list: Item[], minLevel: number) => {
  const map = new WeakMap()
  const result: Item[] = []
  let temp: Item | null = null

  const _traversalTree = (list: Item[], pid = 1) => {
    const res: Item[] = []

    list.forEach((item: Item) => {
      const itemWrap: Item = {
        path: item.path,
        meta: item.meta,
        name: item.name
      }
      if (Array.isArray(item.children)) {
        itemWrap.children = _traversalTree(item.children, pid + 1)
      }

      if ((!minLevel || minLevel <= pid)) {
        res.push(temp = itemWrap)
      } else {
        if (!map.get(temp!)) {
          map.set(temp!, temp)
          result.push(temp!)
        }
      }
    })

    return res
  }

  _traversalTree(list)

  return result
}

type Options = {
  url: string
  method: 'get' | 'post' | 'GET' | 'POST'
  fileName: string
  paramsOrData: CommonAttrs
  blobType: string
  responseType: string
  headers: CommonAttrs
}

// 下载流文件
export const downloadStreamFile = ({
  url,
  method = 'GET',
  fileName = '',
  paramsOrData,
  blobType,
  responseType = 'blob', // blob 就是字节流
  headers = {}
}: Options) => {
  const q: CommonAttrs = {
    url,
    method,
    responseType,
    headers: {
      ...headers
    }
  }
  if (method.toLocaleLowerCase() === 'get') {
    q.params = paramsOrData
  } else {
    q.data = paramsOrData
  }

  return axios(q)
    .then(resp => {
      const blob = blobType ? new Blob([resp.data], { type: blobType }) : new Blob([resp.data])
      const href = window.URL.createObjectURL(blob)
      const aElm = document.createElement('a')
      aElm.href = href
      aElm.setAttribute('download', fileName)
      document.body.appendChild(aElm)
      aElm.click()
      window.URL.revokeObjectURL(href)
      aElm.remove()
    })
}

/*
  下载 zip 文件
  downloadStreamFile({
    url: '/ywXjjl/filePack',
    method: 'POST',
    paramsOrData: this.params,
    blobType: 'application/zip',
    fileName: `${fileName}.zip`,
    headers: {
      'Content-Type': 'application/json; application/octet-stream' // 字节流
    }
  })
    .then(() => {
      this.downloadClose()
    })
    .catch(() => {
      this.loadingFile = false
      this.$message.error('下载错误')
    })
*/
