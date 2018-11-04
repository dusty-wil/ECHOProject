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
  getStoryById ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.getStoryById', args: [payload]})
      .then(story => {
        return story
      })
  },
  updateStory ({ dispatch, commit, state }, payload) { 
    return dispatch('apiRequest', {func: 'stories.updateStory', args: [payload]})
      .then(story => {
        return story
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
