// 判断是否网络地址
export const hasHttp = (url: string): boolean => {
  return /^(https?:|mailto:|tel:)/.test(url)
}
