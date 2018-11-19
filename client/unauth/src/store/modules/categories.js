import Vue from 'vue'

const getDefaultState = () => {
  return {}
}

const state = getDefaultState()

const getters = {}

const actions = {
  getCategoryById ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'categories.getCategoryById', args: [payload]})
      .then(category => {
        return category
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
