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
    new: async (payload) => {
      return Period.query()
        .insert({
          name: payload.name,
          description: payload.description
        })
    },
    delete: async (payload) => {
      let id = payload.id
      console.log(id)
      return Period.query()
        .where({ id })
        .select(Period.publicColumns)
        .first()
        .throwIfNotFound()
    }
  }
}
