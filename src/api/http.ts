import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
import type { ArbitrarilyData, ResponseData } from './types'
import { ElMessage } from 'element-plus'
import store from '@/store'
import type { State } from '@/store'
import { tokenIsExpire } from './utils'

const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/31450493ed987ee4de2e058fe4a35578/api',
  timeout: 15000
})

instance.interceptors.request.use(
  config => {
    const token = (store.state as State).user.token
    if (token) {
      if (tokenIsExpire()) {
        ElMessage.error('登陆过期')
        return Promise.reject(new Error('登陆过期'))
      }
      config.headers.token = token
    }

    return config
  },
  err => Promise.reject(err)
)

instance.interceptors.response.use(
  resp => {
    const { code, message } = resp.data
    if (code !== 200) {
      ElMessage.error(message)
      return Promise.reject(message)
    }

    return resp.data
  },
  err => {
    ElMessage.error(err.message)
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
