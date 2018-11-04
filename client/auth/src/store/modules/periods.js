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
