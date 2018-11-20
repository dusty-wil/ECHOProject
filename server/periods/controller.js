'use strict'

const moment = require('moment')
const { transaction } = require('objection')
const { Period } = require('./model')

module.exports = function () {
  return {
    get: async (id) => {
      return Period.query()
        .where({ id })
        .select(Period.publicColumns)
        .first()
        .throwIfNotFound()
    },

    getAll: async () => {
      return Period.query()
        .select(Period.publicColumns)
        .throwIfNotFound()
    },

    getByStoryId: async (id) => {
      return Period.query()
        .select(Period.publicColumns)
        .join(
          'periodBridge', 
          'periodBridge.period_id', 
          'periods.id'
        )
        .where('periodBridge.story_id', id)
    },

    update: async (payload) => {
      return Period.query()
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
      return Period.query()
        .insert({
          name: payload.name,
          description: payload.description
        })
    },

    new: async (payload) => {
      return Period.query()
        .insert({
          name: payload.name,
          description: payload.description
        })
    },

    delete: async (id) => {
      return Period.query()
        .where({id: id})
        .delete()
    }
  }
}
