import * as types from '../mutationTypes'
import Vue from 'vue'

const getDefaultState = () => {
  return {}
}

const state = getDefaultState()

const getters = {}

const actions = {
  getThemeById ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'themes.getThemeById', args: [payload]})
      .then(theme => {
        return theme
      })
  }
}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations,
  getDefaultState
}
