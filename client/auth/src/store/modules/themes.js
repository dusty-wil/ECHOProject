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
  getAllThemes ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'themes.getAllThemes'})
      .then(themes => {
        return themes
      })
  },
  deleteTheme ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'themes.deleteTheme', args: [payload]})
      .then(theme => {
        return theme
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
