import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type { Data } from './types'

const instance = axios.create({
  baseURL: '',
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
    return resp
  },
  err => {
    return Promise.reject(err)
  }
)

interface Http {
  get: (url: string, data?: Data, config?: AxiosRequestConfig<unknown>) => Promise<AxiosResponse>
  post: (url: string, data?: Data, config?: AxiosRequestConfig<unknown>) => Promise<AxiosResponse>
}

const http: Http = {
  get (url, data, config) {
    return instance.get(url, {
      params: data,
      ...config
    })
  },

  post (url, data, config) {
    return instance.post(url, data, config)
  }
}

export default http
