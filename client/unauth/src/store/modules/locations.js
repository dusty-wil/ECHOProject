import * as types from '../mutationTypes'
import Vue from 'vue'

const getDefaultState = () => {
  return {}
}

const state = getDefaultState()

const getters = {}

const actions = {
  getLocationById ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'locations.getLocationById', args: [payload]})
      .then(location => {
        return location
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
