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
  },

  getSearchResultById ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.getSearchResultById', args: [payload]})
      .then(story => {
        return story
      })
  },

  getByCategoryId ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.getByCategoryId', args: [payload]})
      .then(story => {
        return story
      })
  },

  getByLocationId ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.getByLocationId', args: [payload]})
      .then(story => {
        return story
      })
  },

  getByNameId ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.getByNameId', args: [payload]})
      .then(story => {
        return story
      })
  },

  getByPeriodId ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.getByPeriodId', args: [payload]})
      .then(story => {
        return story
      })
  },

  getByAuthorId ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.getByAuthorId', args: [payload]})
      .then(story => {
        return story
      })
  },

  getBySubjectId ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.getBySubjectId', args: [payload]})
      .then(story => {
        return story
      })
  },

  getByCategoryVal ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.getByCategoryVal', args: [payload]})
      .then(story => {
        return story
      })
  },

  getByLocationVal ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.getByLocationVal', args: [payload]})
      .then(story => {
        return story
      })
  },

  getByNameVal ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.getByNameVal', args: [payload]})
      .then(story => {
        return story
      })
  },

  getByPeriodVal ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.getByPeriodVal', args: [payload]})
      .then(story => {
        return story
      })
  },

  getByAuthorVal ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.getByAuthorVal', args: [payload]})
      .then(story => {
        return story
      })
  },

  getBySubjectVal ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.getBySubjectVal', args: [payload]})
      .then(story => {
        return story
      })
  },

  getByTitleVal ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.getByTitleVal', args: [payload]})
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
