'use strict'

const moment = require('moment')
const { transaction } = require('objection')
const { Name } = require('./model')

module.exports = function () {
  return {
    get: async (id) => {
      return Name.query()
        .where({ id })
        .select(Name.publicColumns)
        .first()
        .throwIfNotFound()
    },

    getAll: async () => {
      return Name.query()
        .select(Name.publicColumns)
        .throwIfNotFound()
    },

    update: async (payload) => {
      return Name.query()
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
      return Name.query()
        .insert({
          name: payload.name,
          description: payload.description
        })
    },

    new: async (payload) => {
      return Name.query()
        .insert({
          name: payload.name,
          description: payload.description
        })
    },

    delete: async (id) => {
      return Name.query()
        .where({id: id})
        .delete()
    }
  }
}
