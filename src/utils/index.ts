export const hasHttp = (url: string): boolean => {
  return /^(https?:|mailto:|tel:)/.test(url)
}
