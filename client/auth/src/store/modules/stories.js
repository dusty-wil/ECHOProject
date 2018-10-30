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
        console.log(story)
        return story
      })
  },
  updateStory ({ dispatch, commit, state }, payload) { 
    console.log('store/modules/story')
    console.log('payload')
    console.log(payload)
    return dispatch('apiRequest', {func: 'stories.updateStory', args: [payload]})
      .then(story => {
        console.log('dispatch then')
        console.log(story)
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
