'use strict'
const moment = require('moment')
const { transaction } = require('objection')
const {
  Story,
  validateUpdateStory
} = require('./model')

module.exports = function () {
  return {
    get: async (id) => {
      return Story.query()
        .where({ id })
        .select(Story.publicColumns)
        .first()
        .throwIfNotFound()
    },

    getAll: async () => {
      return Story.query()
        .select(Story.publicColumns)
        .throwIfNotFound()
    },

    update: async (payload) => {
      return Story.query()
        .patchAndFetchById(
          payload.id,
          {
            approved: (payload.approved) ? 1 : 0,
            title: payload.title,
            description: payload.description,
            youtube_path: payload.youtubeId,
            publish_date: payload.publishDate,
            featured_rotation: (payload.featuredRotation) ? 1 : 0
          }
        )
        .throwIfNotFound()
    },

    create: async (payload) => {
      return Story.query()
        .insert({
          approved: (payload.approved) ? 1 : 0,
          title: payload.title,
          description: payload.description,
          youtube_path: payload.youtubeId,
          publish_date: payload.publishDate,
          featured_rotation: (payload.featuredRotation) ? 1 : 0
        })
    },

    new: async (payload) => {
      return Story.query()
        .insert({
          approved: (payload.approved) ? 1 : 0,
          title: payload.title,
          description: payload.description,
          youtube_path: payload.youtubeId,
          publish_date: payload.publishDate,
          featured_rotation: (payload.featuredRotation) ? 1 : 0
        })
    },

    delete: async (id) => {
      return Story.query()
        .where({id: id})
        .delete()
    }
  }
}
