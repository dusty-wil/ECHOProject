import Vue from 'vue'
import * as types from '../mutationTypes'

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
