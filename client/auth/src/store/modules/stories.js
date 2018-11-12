import * as types from '../mutationTypes'
import Vue from 'vue'

import Categories from './categories'
import Names from './names'
import Periods from './periods'
import Subjects from './subjects'
import Themes from './themes'
import Locations from './locations'
import Authors from './authors'

const getDefaultState = () => {
  return {
    stories: {
      all: []
    }
  }
}

const state = getDefaultState()

const getters = {
  allStories: state => state.stories.all
}

const actions = {
  getAllStories ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.getAllStories'})
      .then(stories => {
        commit(types.UPDATE_ALL_STORIES, { stories })
      })
  },

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
  },

  addNewStory ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.addNewStory', args: [payload]})
      .then(story => {
        return story
      })
  },

  deleteStory ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.deleteStory', args: [payload]})
      .then(story => {
        return story
      })
  },

  createStory ({dispatch, commit, state}, payload) {
    return dispatch('apiRequest', {func: 'stories.createStory', args: [payload]})
      .then(story => {
        return story
      })
  }
}

const mutations = {
  [types.UPDATE_ALL_STORIES] (state, { stories }) {
    state.stories.all = stories
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  getDefaultState,
  Categories,
  Names,
  Periods,
  Subjects,
  Locations,
  Themes,
  Authors
}
