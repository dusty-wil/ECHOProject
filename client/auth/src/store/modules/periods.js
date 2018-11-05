import * as types from '../mutationTypes'

const getDefaultState = () => {
  return {
    periods: {
        all: []
    }
  }
}

// initial state
const state = getDefaultState()

// getters
const getters = {
    allPeriods: state => state.periods.all
}

// actions
const actions = {
    getAllPeriods ({ dispatch, commit, state }) {
      return dispatch('apiRequest', {func: 'periods.getAll'})
        .then(periods => {
            commit(types.UPDATE_ALL_PERIODS, { periods })
        })
    },
    deletePeriod ({dispatch, commit, state}, payload) {
        return dispatch('apiRequest', {func: 'periods.deletePeriod', args: [payload]})
        .then(periods => {
            commit(types.UPDATE_ALL_PERIODS, { periods })
        })
    },
    createPeriod ({dispatch, commit, state}, payload) {
        console.log(payload)
        return dispatch('apiRequest', {func: 'periods.create', args: [payload]})
        .then(periods => {
            commit(types.UPDATE_ALL_PERIODS, { periods })
        })
    }
}

// mutations
const mutations = {
    [types.UPDATE_ALL_PERIODS] (state, { periods }) {
      state.periods.all = periods
    }
}

export default {
  state,
  getters,
  actions,
  mutations,
  getDefaultState
}
