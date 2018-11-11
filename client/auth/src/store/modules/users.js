import * as types from '../mutationTypes'

const getDefaultState = () => {
  return {
    currentUser: {}
  }
}

// initial state
const state = getDefaultState()

// getters
const getters = {
  currentUser: state => state.currentUser,
  displayName: state => {
    if (state.currentUser.first_name || state.currentUser.last_name) {
      return `${state.currentUser.first_name} ${state.currentUser.last_name}`.trim()
    } else {
      return `${state.currentUser.username}`
    }
  }
}

// actions
const actions = {
  updatePassword ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'users.updatePassword', args: [payload]})
      .then(user => {
        commit(types.UPDATED_USER_PASSWORD, { user })
      })
  },
  getCurrentUser ({ dispatch, commit, state }) {
    return dispatch('apiRequest', {func: 'users.getCurrentUser'})
      .then(user => {
        commit(types.RECEIVED_CURRENT_USER, { user })
      })
  },
  updateProfile ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'users.updateProfile', args: [payload]})
      .then(user => {
        commit(types.UPDATED_USER_PROFILE, { user })
      })
  },
  logout ({ dispatch, commit, state }) {
    return dispatch('apiRequest', { func: 'users.logout' })
      .then(function() {
        location.reload()
      })
  }
}

// mutations
const mutations = {
  [types.UPDATED_USER_PASSWORD] (state, { user }) {
    state.currentUser = user
  },
  [types.RECEIVED_CURRENT_USER] (state, { user }) {
    state.currentUser = user
  },
  [types.UPDATED_USER_PROFILE] (state, { user }) {
    state.currentUser = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  getDefaultState
}
