'use strict'

const moment = require('moment')
const { transaction } = require('objection')
const { Theme } = require('./model')

module.exports = function () {
  return {
    get: async (id) => {
      return Theme.query()
        .where({ id })
        .select(Theme.publicColumns)
        .first()
        .throwIfNotFound()
    },

    getAll: async () => {
      return Theme.query()
        .select(Theme.publicColumns)
        .orderBy('name')
        .throwIfNotFound()
    },

    getByStoryId: async (id) => {
      return Theme.query()
        .select(Theme.publicColumns)
        .join(
          'themeBridge', 
          'themeBridge.theme_id', 
          'themes.id'
        )
        .where('themeBridge.story_id', id)
    },

    update: async (payload) => {
      return Theme.query()
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
      return Theme.query()
        .insert({
          name: payload.name,
          description: payload.description
        })
    },

    new: async (payload) => {
      return Theme.query()
        .insert({
          name: payload.name,
          description: payload.description
        })
    },

    delete: async (id) => {
      return Theme.query()
        .where({id: id})
        .delete()
    }
  }
}
