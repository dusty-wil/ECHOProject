'use strict'

const moment = require('moment')
const { transaction } = require('objection')
const { Location } = require('./model')

module.exports = function () {
  return {
    get: async (id) => {
      return Location.query()
        .where({ id })
        .select(Location.publicColumns)
        .first()
        .throwIfNotFound()
    },

    getAll: async () => {
      return Location.query()
        .select(Location.publicColumns)
        .orderBy('name')
        .throwIfNotFound()
    },

    getByStoryId: async (id) => {
      return Location.query()
        .select(Location.publicColumns)
        .join(
          'locationBridge', 
          'locationBridge.location_id', 
          'locations.id'
        )
        .where('locationBridge.story_id', id)
    },

    update: async (payload) => {
      return Location.query()
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
      return Location.query()
        .insert({
          name: payload.name,
          description: payload.description
        })
    },

    new: async (payload) => {
      return Location.query()
        .insert({
          name: payload.name,
          description: payload.description
        })
    },

    delete: async (id) => {
      return Location.query()
        .where({id: id})
        .delete()
    }
  }
}
