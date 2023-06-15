export interface ArbitrarilyData {
  [key: string]: any
}

export type ResponseData = {
  code: number
  message: string
  data: ArbitrarilyData
  [key: string]: any
}
