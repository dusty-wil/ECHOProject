import Vue from 'vue'
import * as types from '../mutationTypes'

const getDefaultState = () => {
  return {
    themes: {
      all: []
    }
  }
}

const state = getDefaultState()

const getters = {
  allThemes: state => state.themes.all
}

const actions = {
  getThemeById ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'themes.getThemeById', args: [payload]})
      .then(theme => {
        return theme
      })
  }
}

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
