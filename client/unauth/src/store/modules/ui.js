import * as types from '../mutationTypes'
import Vue from 'vue'

const defaultState = () => {
  return {
  }
}

const state = defaultState()

const getters = {
  isNavListOpen: state => state.isNavListOpen
}

const mutations = {
  [types.TOGGLE_FLAG] (state, { key }) {
    const flagValue = !state[key]
    Vue.set(state, key, flagValue)
  }
}

export default {
  state,
  getters,
  mutations
}
