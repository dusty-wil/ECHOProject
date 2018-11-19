import Vue from 'vue'

const getDefaultState = () => {
  return {}
}

const state = getDefaultState()

const getters = {}

const actions = {
  getPeriodById ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'periods.getPeriodById', args: [payload]})
      .then(period => {
        return period
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
