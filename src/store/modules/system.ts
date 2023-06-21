import type { MutationTree } from 'vuex'
import { getItem, setItem } from '@/utils/storage'

export interface SystemState {
  language: string
}

const state: SystemState = {
  language: getItem('LANGUAGE') || 'zh'
}

const mutations: MutationTree<SystemState> = {
  setLanguage (state, payload) {
    state.language = payload
    setItem('LANGUAGE', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
