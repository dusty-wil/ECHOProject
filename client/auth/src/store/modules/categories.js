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
  getAllCategories ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'categories.getAllCategories'})
      .then(categories => {
        return categories
      })
  },
  deleteCategory ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'categories.deleteCategory', args: [payload]})
      .then(category => {
        return category
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
