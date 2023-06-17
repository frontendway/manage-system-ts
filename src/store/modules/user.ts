import type { MutationTree, ActionTree, GetterTree } from 'vuex'
import type { RootState } from '../index'
import { setItem, getItem } from '@/utils/storage'
import { fetchUserProfile } from '@/api/system'

export interface UserState {
  token: string | null
  userInfo: any
}

const state: UserState = {
  token: getItem('token') || null,
  userInfo: null
}

const getters: GetterTree<UserState, RootState> = {}

const mutations: MutationTree<UserState> = {
  setToken (state, payload) {
    state.token = payload
    setItem('token', payload)
  },
  setUserInfo (state, payload) {
    state.userInfo = payload
  }
}

const actions: ActionTree<UserState, RootState> = {
  async fetchUserProfile ({ commit }) {
    const userInfo = await fetchUserProfile()
    commit('setUserInfo', userInfo)
    return userInfo
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
