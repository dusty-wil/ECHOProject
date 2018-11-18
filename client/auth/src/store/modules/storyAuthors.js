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
  },

  updateAuthor ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'storyAuthors.updateAuthor', args: [payload]})
      .then(author => {
        return author
      })
  },

  addNewAuthor ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'storyAuthors.addNewAuthor', args: [payload]})
      .then(author => {
        return author
      })
  },

  deleteAuthor ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'storyAuthors.deleteAuthor', args: [payload]})
      .then(author => {
        return author
      })
  },

  createAuthor ({dispatch, commit, state}, payload) {
    return dispatch('apiRequest', {func: 'storyAuthors.createAuthor', args: [payload]})
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
