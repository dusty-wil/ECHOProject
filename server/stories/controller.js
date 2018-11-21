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

    getByCategoryVal: async (val) => {
      var v = val.toLowerCase().trim()
      return Story.query()
        .select(Story.publicColumns)
        .join(
          'categoryBridge',
          'categoryBridge.story_id',
          'stories.id'
        )
        .join(
          'categories',
          'categories.id',
          'categoryBridge.category_id'
        )
        .where(raw('lower(categories.name) like ?', '%' + v + '%'))
        .groupBy('stories.id')
    },

    getByLocationVal: async (val) => {
      var v = val.toLowerCase().trim()
      return Story.query()
        .select(Story.publicColumns)
        .join(
          'locationBridge',
          'locationBridge.story_id',
          'stories.id'
        )
        .join(
          'locations',
          'locations.id',
          'locationBridge.location_id'
        )
        .where(raw('lower(locations.name) like ?', '%' + v + '%'))
        .groupBy('stories.id')
    },

    getByNameVal: async (val) => {
      var v = val.toLowerCase().trim()
      return Story.query()
        .select(Story.publicColumns)
        .join(
          'nameBridge',
          'nameBridge.story_id',
          'stories.id'
        )
        .join(
          'names',
          'names.id',
          'nameBridge.name_id'
        )
        .where(raw('lower(names.name) like ?', '%' + v + '%'))
        .groupBy('stories.id')
    },

    getByPeriodVal: async (val) => {
      var v = val.toLowerCase().trim()
      return Story.query()
        .select(Story.publicColumns)
        .join(
          'periodBridge',
          'periodBridge.story_id',
          'stories.id'
        )
        .join(
          'periods',
          'periods.id',
          'periodBridge.period_id'
        )
        .where(raw('lower(periods.name) like ?', '%' + v + '%'))
        .groupBy('stories.id')
    },

    getByAuthorVal: async (val) => {
      var v = val.toLowerCase().trim()
      return Story.query()
        .select(Story.publicColumns)
        .join(
          'storyAuthorBridge',
          'storyAuthorBridge.story_id',
          'stories.id'
        )
        .join(
          'storyAuthors',
          'storyAuthors.id',
          'storyAuthorBridge.story_author_id'
        )
        .where(raw('lower(storyAuthors.name) like ?', '%' + v + '%'))
        .groupBy('stories.id')
    },

    getBySubjectVal: async (val) => {
      var v = val.toLowerCase().trim()
      return Story.query()
        .select(Story.publicColumns)
        .join(
          'subjectBridge',
          'subjectBridge.story_id',
          'stories.id'
        )
        .join(
          'subjects',
          'subjects.id',
          'subjectBridge.subject_id'
        )
        .where(raw('lower(subjects.name) like ?', '%' + v + '%'))
        .groupBy('stories.id')
    },

    getByTitleVal: async (val) => {
      var v = val.toLowerCase().trim()
      return Story.query()
        .select(Story.publicColumns)
        // is this getting properly escaped?
        // .where('stories.title', 'like', '%' + v + '%')
        // is this?
        .where(raw('lower(stories.title) like ?', '%' + v + '%'))
        .groupBy('stories.id')
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
