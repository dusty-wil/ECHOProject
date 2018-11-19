import Vue from 'vue'

const getDefaultState = () => {
  return {}
}

const state = getDefaultState()

const getters = {}

const actions = {
  getAuthorById ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'storyAuthors.getAuthorById', args: [payload]})
      .then(author => {
        return author
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
