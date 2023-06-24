import type { CommonAttrs } from '@/types'

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
