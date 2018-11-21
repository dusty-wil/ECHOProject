'use strict'
const moment = require('moment')
const { transaction, raw } = require('objection')
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

    getByCategoryId: async (id) => {
      return Story.query()
        .select(Story.publicColumns)
        .join(
          'categoryBridge',
          'categoryBridge.story_id',
          'stories.id'
        )
        .where('categoryBridge.category_id', id)
    },

    getByLocationId: async (id) => {
      return Story.query()
        .select(Story.publicColumns)
        .join(
          'locationBridge',
          'locationBridge.story_id',
          'stories.id'
        )
        .where('locationBridge.location_id', id)
    },

    getByNameId: async (id) => {
      return Story.query()
        .select(Story.publicColumns)
        .join(
          'nameBridge',
          'nameBridge.story_id',
          'stories.id'
        )
        .where('nameBridge.name_id', id)
    },

    getByPeriodId: async (id) => {
      return Story.query()
        .select(Story.publicColumns)
        .join(
          'periodBridge',
          'periodBridge.story_id',
          'stories.id'
        )
        .where('periodBridge.period_id', id)
    },

    getByAuthorId: async (id) => {
      return Story.query()
        .select(Story.publicColumns)
        .join(
          'storyAuthorBridge',
          'storyAuthorBridge.story_id',
          'stories.id'
        )
        .where('storyAuthorBridge.story_author_id', id)
    },

    getBySubjectId: async (id) => {
      return Story.query()
        .select(Story.publicColumns)
        .join(
          'subjectBridge',
          'subjectBridge.story_id',
          'stories.id'
        )
        .where('subjectBridge.subject_id', id)
    },

    getRandomFeatured: async () => {
      // https://github.com/Vincit/objection.js/blob/master/doc/includes/RECIPES.md
      return Story.query()
        .select(Story.publicColumns)
        .where({ featured_rotation: 1 })
        .orderBy(raw('rand()'))
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
