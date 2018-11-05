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
  getAllPeriods ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'periods.getAllPeriods'})
      .then(periods => {
        return periods
      })
  },
  deletePeriod ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'periods.deletePeriod', args: [payload]})
      .then(period => {
        return period
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
