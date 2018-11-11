import * as types from '../mutationTypes'
import Vue from 'vue'

const getDefaultState = () => {
  return {}
}

const state = getDefaultState()

const getters = {}

const actions = {
  getSubjectById ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'subjects.getSubjectById', args: [payload]})
      .then(subject => {
        return subject
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
