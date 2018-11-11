import * as types from '../mutationTypes'
import Vue from 'vue'

const getDefaultState = () => {
  return {}
}

const state = getDefaultState()

const getters = {}

const actions = {
  getNameById ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'names.getNameById', args: [payload]})
      .then(name => {
        return name
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
