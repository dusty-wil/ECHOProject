import * as types from '../mutationTypes'

const getDefaultState = () => {
  return {
    categories: {
        all: []
    }
  }
}

// initial state
const state = getDefaultState()

// getters
const getters = {
    allCategories: state => state.categories.all
}

// actions
const actions = {
    getAllCategories ({ dispatch, commit, state }) {
      return dispatch('apiRequest', {func: 'categories.getAll'})
        .then(categories => {
            commit(types.UPDATE_ALL_CATEGORIES, { categories })
        })
    },
    deleteCategory ({dispatch, commit, state}, payload) {
        return dispatch('apiRequest', {func: 'categories.deleteCategory', args: [payload]})
        .then(categories => {
            commit(types.UPDATE_ALL_CATEGORIES, { categories })
        })
    },
    createCategory ({dispatch, commit, state}, payload) {
        console.log(payload)
        return dispatch('apiRequest', {func: 'categories.create', args: [payload]})
        .then(categories => {
            commit(types.UPDATE_ALL_CATEGORIES, { categories })
        })
    }
}

// mutations
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
