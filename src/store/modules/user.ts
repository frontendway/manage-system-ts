import type { MutationTree, ActionTree, GetterTree } from 'vuex'
import type { RootState } from '../index'

export interface UserState {
  token: string
}

const state: UserState = {
  token: ''
}

const getters: GetterTree<UserState, RootState> = {}

const mutations: MutationTree<UserState> = {
  setToken (state, payload) {
    state.token = payload
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
