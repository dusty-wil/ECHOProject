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
  getSubjectById ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'subjects.getSubjectById', args: [payload]})
      .then(subject => {
        return subject
      })
  },
  updateSubject ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'subjects.updateSubject', args: [payload]})
      .then(subject => {
        return subject
      })
  },
  addNewSubject ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'subjects.addNewSubject', args: [payload]})
      .then(subject => {
        return subject
      })
  },
  getAllSubjects ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'subjects.getAllSubjects'})
      .then(subjects => {
        return subjects
      })
  },
  deleteSubject ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'subjects.deleteSubject', args: [payload]})
      .then(subject => {
        return subject
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
