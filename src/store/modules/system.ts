import type { MutationTree } from 'vuex'
import { getItem, setItem } from '@/utils/storage'
import { DEFAULT_COLOR } from '@/constant/index'

export interface SystemState {
  language: string
  themeColor: string
}

const state: SystemState = {
  language: getItem('LANGUAGE') || 'zh',
  themeColor: getItem('THEME_COLOR') || DEFAULT_COLOR
}

const mutations: MutationTree<SystemState> = {
  setLanguage (state, payload) {
    state.language = payload
    setItem('LANGUAGE', payload)
  },
  setThemeColor (state, payload) {
    state.themeColor = payload
    setItem('THEME_COLOR', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
