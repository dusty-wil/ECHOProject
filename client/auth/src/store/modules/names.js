import * as types from '../mutationTypes'
import Vue from 'vue'

const defaultState = () => {
  return {
  }
}

const state = defaultState()

const getters = {
}

const actions = {
  getNameById ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'names.getNameById', args: [payload]})
      .then(name => {
        return name
      })
  },
  updateName ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'names.updateName', args: [payload]})
      .then(name => {
        return name
      })
  },
  addNewName ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'names.addNewName', args: [payload]})
      .then(name => {
        return name
      })
  },
  getAllNames ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'names.getAllNames'})
      .then(names => {
        return names
      })
  },
  deleteName ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'names.deleteName', args: [payload]})
      .then(name => {
        return name
      })
  }
}

const mutations = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
