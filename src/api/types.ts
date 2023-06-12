export interface ArbitrarilyData {
  [key: string]: unknown
}

export type ResponseData = {
  code: string
  desc: string
  data: ArbitrarilyData
  [key: string]: unknown
}
