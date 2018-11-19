import Vue from 'vue'

const getDefaultState = () => {
  return {}
}

const state = getDefaultState()

const getters = {}

const actions = {
  getStoryById ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.getStoryById', args: [payload]})
      .then(story => {
        return story
      })
  },

  getRandomFeaturedStory ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.getRandomFeaturedStory'})
      .then(story => {
        return story
      })
  }
}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations,
  getDefaultState
}
