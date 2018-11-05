import * as types from '../mutationTypes'

const getDefaultState = () => {
  return {
    subjects: {
        all: []
    }
  }
}

// initial state
const state = getDefaultState()

// getters
const getters = {
    allSubjects: state => state.subjects.all
}

// actions
const actions = {
    getAllSubjects ({ dispatch, commit, state }) {
      return dispatch('apiRequest', {func: 'subjects.getAll'})
        .then(subjects => {
            commit(types.UPDATE_ALL_SUBJECTS, { subjects })
        })
    },
    deleteSubject ({dispatch, commit, state}, payload) {
        return dispatch('apiRequest', {func: 'subjects.deleteSubject', args: [payload]})
        .then(subjects => {
            commit(types.UPDATE_ALL_SUBJECTS, { subjects })
        })
    },
    createSubject ({dispatch, commit, state}, payload) {
        console.log(payload)
        return dispatch('apiRequest', {func: 'subjects.create', args: [payload]})
        .then(subjects => {
            commit(types.UPDATE_ALL_SUBJECTS, { subjects })
        })
    }
}

// mutations
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
