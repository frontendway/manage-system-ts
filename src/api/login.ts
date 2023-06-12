import http from './http'
import type { Data } from './types'

export const loginApi = (params: Data) => http.post('/test', params)
