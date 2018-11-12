import * as types from '../mutationTypes'
import Vue from 'vue'

const getDefaultState = () => {
  return {
    names: {
      all: []
    }
  }
}

const state = getDefaultState()

const getters = {
  allNames: state => state.names.all
}

const actions = {
  getAllNames ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'names.getAllNames'})
      .then(names => {
        commit(types.UPDATE_ALL_NAMES, { names })
      })
  },

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

  deleteName ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'names.deleteName', args: [payload]})
      .then(name => {
        return name
      })
  },

  createName ({dispatch, commit, state}, payload) {
    return dispatch('apiRequest', {func: 'names.createName', args: [payload]})
      .then(name => {
        return name
      })
  }
}

const mutations = {
  [types.UPDATE_ALL_NAMES] (state, { names }) {
    state.names.all = names
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  getDefaultState
}
