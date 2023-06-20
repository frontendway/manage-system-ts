import { getItem } from '@/utils/storage'
import { TOKEN_EXPIRE_TIME } from './config'

// 判断 token 是否过期
export const tokenIsExpire = () => {
  const loginTime = getItem('LOGIN_TIME')
  if (!loginTime) return true

  return Date.now() > (+loginTime + TOKEN_EXPIRE_TIME)
}
