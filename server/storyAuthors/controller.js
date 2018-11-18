'use strict'

const moment = require('moment')
const { transaction } = require('objection')
const { StoryAuthor } = require('./model')

module.exports = function () {
  return {
    get: async (id) => {
      return StoryAuthor.query()
        .where({ id })
        .select(StoryAuthor.publicColumns)
        .first()
        .throwIfNotFound()
    },

    getByName: async (name) => {
      return StoryAuthor.query()
        where({ name: name })
        select(StoryAuthor.publicColumns)
        .first()
    },

    getByStoryId: async (id) => {
      return StoryAuthor.query()
        select(StoryAuthor.publicColumns)
        .join('storyAuthorBridge', 'storyAuthorBridge.story_author_id', 'storyAuthor.id')
        where('storyAuthorBridge.story_id', id)
    },

    update: async (payload) => {
      return StoryAuthor.query()
        .patchAndFetchById(
          payload.id,
          { name: payload.name }
        )
        .throwIfNotFound()
    },

    create: async (payload) => {
      return StoryAuthor.query()
        .insert({ name: payload.name })
    },

    new: async (payload) => {
      return StoryAuthor.query()
        .insert({ name: payload.name })
    },

    delete: async (id) => {
      return StoryAuthor.query()
        .where({id: id})
        .delete()
    }
  }
}
