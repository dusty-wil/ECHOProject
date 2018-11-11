import * as types from '../mutationTypes'
import Vue from 'vue'

const getDefaultState = () => {
  return {
    categories: {
      all: []
    }
  }
}

const state = getDefaultState()

const getters = {
  allCategories: state => state.categories.all
}

const actions = {
  getAllCategories ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'categories.getAllCategories'})
      .then(categories => {
        commit(types.UPDATE_ALL_CATEGORIES, { categories })
      })
  },

  getCategoryById ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'categories.getCategoryById', args: [payload]})
      .then(category => {
        return category
      })
  },

  updateCategory ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'categories.updateCategory', args: [payload]})
      .then(category => {
        return category
      })
  },

  addNewCategory ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'categories.addNewCategory', args: [payload]})
      .then(category => {
        return category
      })
  },

  deleteCategory ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'categories.deleteCategory', args: [payload]})
      .then(category => {
        return category
      })
  },

  createCategory ({dispatch, commit, state}, payload) {
    return dispatch('apiRequest', {func: 'categories.createCategory', args: [payload]})
      .then(category => {
        return category
      })
  }
}

const mutations = {
  [types.UPDATE_ALL_CATEGORIES] (state, { categories }) {
    state.categories.all = categories
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  getDefaultState
}
