import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
import type { ArbitrarilyData, ResponseData } from './types'
import { ElMessage } from 'element-plus'

const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/31450493ed987ee4de2e058fe4a35578/api',
  timeout: 15000
})

instance.interceptors.request.use(
  config => {
    return config
  },
  err => Promise.reject(err)
)

instance.interceptors.response.use(
  resp => {
    const { code, desc } = resp.data
    if (code !== '1000') {
      ElMessage.error(desc)
      return Promise.reject(desc)
    }

    return resp.data
  },
  err => {
    return Promise.reject(err)
  }
)

interface Http {
  get: (url: string, data?: ArbitrarilyData, config?: AxiosRequestConfig) => Promise<ResponseData>
  post: (url: string, data?: ArbitrarilyData, config?: AxiosRequestConfig) => Promise<ResponseData>
}

const http: Http = {
  get (url, data, config) {
    return instance.get(url, { params: data, ...config })
  },
  post (url, data, config) {
    return instance.post(url, data, config)
  }
}

export default http
