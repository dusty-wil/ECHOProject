import Vue from 'vue'

const getDefaultState = () => {
  return {}
}

const state = getDefaultState()

const getters = {}

const actions = {
  getAuthorById ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'authors.getAuthorById', args: [payload]})
      .then(author => {
        return author
      })
  },

  updateAuthor ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'authors.updateAuthor', args: [payload]})
      .then(author => {
        return author
      })
  },

  addNewAuthor ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'authors.addNewAuthor', args: [payload]})
      .then(author => {
        return author
      })
  },

  deleteAuthor ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'authors.deleteAuthor', args: [payload]})
      .then(author => {
        return author
      })
  },

  createAuthor ({dispatch, commit, state}, payload) {
    return dispatch('apiRequest', {func: 'authors.createAuthor', args: [payload]})
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
