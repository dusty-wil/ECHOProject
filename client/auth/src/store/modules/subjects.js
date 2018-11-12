import * as types from '../mutationTypes'
import Vue from 'vue'

const getDefaultState = () => {
  return {
    subjects: {
      all: []
    }
  }
}

const state = getDefaultState()

const getters = {
  allSubjects: state => state.subjects.all
}

const actions = {
  getAllSubjects ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'subjects.getAllSubjects'})
      .then(subjects => {
        commit(types.UPDATE_ALL_SUBJECTS, { subjects })
      })
  },

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

  deleteSubject ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'subjects.deleteSubject', args: [payload]})
      .then(subject => {
        return subject
      })
  },

  createSubject ({dispatch, commit, state}, payload) {
    return dispatch('apiRequest', {func: 'subjects.createSubject', args: [payload]})
      .then(subject => {
        return subject
      })
  }
}

const mutations = {
  [types.UPDATE_ALL_SUBJECTS] (state, { subjects }) {
    state.subjects.all = subjects
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  getDefaultState
}
