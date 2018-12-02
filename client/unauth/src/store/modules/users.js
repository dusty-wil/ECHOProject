import * as types from '../mutationTypes'

const getDefaultState = () => {
  return {}
}

// initial state
const state = getDefaultState()

// getters
const getters = {}

// actions
const actions = {
  forgotPassword ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'users.forgotPassword', args: [payload]})
      .then((res) => {
        return res
      })
  },

  resetPassword ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'users.resetPassword', args: [payload]})
      .then((res) => {
        return res
      })
  }
}

// mutations
const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations,
  getDefaultState
}
