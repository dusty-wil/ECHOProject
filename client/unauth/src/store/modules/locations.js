import Vue from 'vue'
import * as types from '../mutationTypes'

const getDefaultState = () => {
  return {
    locations: {
      all: []
    }
  }
}

const state = getDefaultState()

const getters = {
  allLocations: state => state.locations.all
}

const actions = {
  getAllLocations ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'locations.getAllLocations'})
      .then(locations => {
        commit(types.UPDATE_ALL_LOCATIONS, { locations })
      })
  },

  getLocationById ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'locations.getLocationById', args: [payload]})
      .then(location => {
        return location
      })
  }
}

const mutations = {
  [types.UPDATE_ALL_LOCATIONS] (state, { locations }) {
    state.locations.all = locations
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  getDefaultState
}
