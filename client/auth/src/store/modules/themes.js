import * as types from '../mutationTypes'

const getDefaultState = () => {
  return {
    themes: {
        all: []
    }
  }
}

// initial state
const state = getDefaultState()

// getters
const getters = {
    allThemes: state => state.themes.all
}

// actions
const actions = {
    getAllThemes ({ dispatch, commit, state }) {
      return dispatch('apiRequest', {func: 'themes.getAll'})
        .then(themes => {
            commit(types.UPDATE_ALL_THEMES, { themes })
        })
    },
    deleteTheme ({dispatch, commit, state}, payload) {
        return dispatch('apiRequest', {func: 'themes.deleteTheme', args: [payload]})
        .then(themes => {
            commit(types.UPDATE_ALL_THEMES, { themes })
        })
    },
    createTheme ({dispatch, commit, state}, payload) {
        console.log(payload)
        return dispatch('apiRequest', {func: 'themes.create', args: [payload]})
        .then(themes => {
            commit(types.UPDATE_ALL_THEMES, { themes })
        })
    }
}

// mutations
const mutations = {
    [types.UPDATE_ALL_THEMES] (state, { themes }) {
      state.themes.all = themes
    }
}

export default {
  state,
  getters,
  actions,
  mutations,
  getDefaultState
}
