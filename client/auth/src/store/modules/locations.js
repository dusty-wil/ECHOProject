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
  getAllLocations ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'locations.getAllLocations'})
      .then(locations => {
        return locations
      })
  },
  deleteLocation ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'locations.deleteLocation', args: [payload]})
      .then(location => {
        return location
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
