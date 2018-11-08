import * as types from '../mutationTypes'
import Vue from 'vue'

import Categories from './categories'
import Names from './names'
import Periods from './periods'
import Subjects from './subjects'
import Themes from './themes'

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
  },
  addNewStory ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.addNewStory', args: [payload]})
      .then(story => {
        return story
      })
  },
  getAllStories ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.getAllStories'})
      .then(stories => {
        return stories
      })
  },
  deleteStory ({ dispatch, commit, state }, payload) {
    return dispatch('apiRequest', {func: 'stories.deleteStory', args: [payload]})
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
  mutations,
  Categories,
  Names,
  Periods,
  Subjects,
  Themes
}
