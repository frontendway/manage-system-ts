import { createStore, Store, useStore as baseUseStore } from 'vuex'
import userStore, { UserState } from './modules/user'
import type { InjectionKey } from 'vue'

export interface RootState {}

interface State extends RootState {
  user: UserState
}

export const key: InjectionKey<Store<State>> = Symbol('stateAll')

// 定义自己的 useStore 组合式函数
export const useStore = () => baseUseStore(key)

export default createStore({
  state: {},
  getters: {},
  modules: {
    user: userStore
  }
})
