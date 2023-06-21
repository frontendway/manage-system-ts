import { createStore, Store, useStore as baseUseStore } from 'vuex'
import user from './modules/user'
import system from './modules/system'
import type { UserState } from './modules/user'
import type { SystemState } from './modules/system'

import type { InjectionKey } from 'vue'

export interface RootState {}

export interface State extends RootState {
  user: UserState
  system: SystemState
}

export const key: InjectionKey<Store<State>> = Symbol('stateAll')

// 定义自己的 useStore 组合式函数
export const useStore = () => baseUseStore(key)

export default createStore({
  state: {},
  getters: {},
  modules: {
    user,
    system
  }
})
