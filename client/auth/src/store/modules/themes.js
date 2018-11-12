import * as types from '../mutationTypes'
import Vue from 'vue'

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
  getAllThemes ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'themes.getAllThemes'})
      .then(themes => {
        commit(types.UPDATE_ALL_THEMES, { themes })
      })
  },

  getThemeById ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'themes.getThemeById', args: [payload]})
      .then(theme => {
        return theme
      })
  },

  updateTheme ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'themes.updateTheme', args: [payload]})
      .then(theme => {
        return theme
      })
  },

  addNewTheme ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'themes.addNewTheme', args: [payload]})
      .then(theme => {
        return theme
      })
  },

  deleteTheme ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'themes.deleteTheme', args: [payload]})
      .then(theme => {
        return theme
      })
  },

  createTheme ({dispatch, commit, state}, payload) {
    return dispatch('apiRequest', {func: 'themes.createTheme', args: [payload]})
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
