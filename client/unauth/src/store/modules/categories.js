import Vue from 'vue'
import * as types from '../mutationTypes'

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
