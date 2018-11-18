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

    update: async (payload) => {
      return StoryAuthor.query()
        .patchAndFetchById(
          payload.id,
          {
            name: payload.name,
            description: payload.description
          }
        )
        .throwIfNotFound()
    },

    create: async (payload) => {
      return StoryAuthor.query()
        .insert({
          name: payload.name,
          description: payload.description
        })
    },

    new: async (payload) => {
      return StoryAuthor.query()
        .insert({
          name: payload.name,
          description: payload.description
        })
    },

    delete: async (id) => {
      return StoryAuthor.query()
        .where({id: id})
        .delete()
    }
  }
}
