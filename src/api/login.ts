import http from './http'
import type { ArbitrarilyData } from './types'

export const loginApi = (params: ArbitrarilyData) => http.post('/sys/login', params)
