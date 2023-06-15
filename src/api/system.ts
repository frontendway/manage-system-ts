import http from './http'

// 获取用户信息
export const fetchUserProfile = () => {
  return http.get('/sys/profile')
}
