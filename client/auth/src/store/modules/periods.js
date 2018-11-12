import * as types from '../mutationTypes'
import Vue from 'vue'

const getDefaultState = () => {
  return {
    periods: {
      all: []
    }
  }
}

const state = getDefaultState()

const getters = {
  allPeriods: state => state.periods.all
}

const actions = {
  getAllPeriods ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'periods.getAllPeriods'})
      .then(periods => {
        commit(types.UPDATE_ALL_PERIODS, { periods })
      })
  },

  getPeriodById ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'periods.getPeriodById', args: [payload]})
      .then(period => {
        return period
      })
  },

  updatePeriod ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'periods.updatePeriod', args: [payload]})
      .then(period => {
        return period
      })
  },

  addNewPeriod ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'periods.addNewPeriod', args: [payload]})
      .then(period => {
        return period
      })
  },

  deletePeriod ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'periods.deletePeriod', args: [payload]})
      .then(period => {
        return period
      })
  },

  createPeriod ({dispatch, commit, state}, payload) {
    return dispatch('apiRequest', {func: 'periods.createPeriod', args: [payload]})
      .then(period => {
        return period
      })
  }
}

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
