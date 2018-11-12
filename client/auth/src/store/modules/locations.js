import * as types from '../mutationTypes'
import Vue from 'vue'

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
  },

  updateLocation ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'locations.updateLocation', args: [payload]})
      .then(location => {
        return location
      })
  },

  addNewLocation ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'locations.addNewLocation', args: [payload]})
      .then(location => {
        return location
      })
  },

  deleteLocation ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'locations.deleteLocation', args: [payload]})
      .then(location => {
        return location
      })
  },

  createLocation ({dispatch, commit, state}, payload) {
    return dispatch('apiRequest', {func: 'locations.createLocation', args: [payload]})
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
