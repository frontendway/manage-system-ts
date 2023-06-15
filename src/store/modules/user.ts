import type { MutationTree, ActionTree, GetterTree } from 'vuex'
import type { RootState } from '../index'
import { setItem, getItem } from '@/utils/storage'

export interface UserState {
  token: string
}

const state: UserState = {
  token: getItem('token') || ''
}

const getters: GetterTree<UserState, RootState> = {}

const mutations: MutationTree<UserState> = {
  setToken (state, payload) {
    state.token = payload
    setItem('token', payload)
  }
}

const actions: ActionTree<UserState, RootState> = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
