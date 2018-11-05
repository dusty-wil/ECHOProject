'use strict'
const moment = require('moment')
const { transaction } = require('objection')
const { Subject } = require('./model')

module.exports = function () {
  return {
    get: async (id) => {
      return Subject.query()
        .where({ id })
        .select(Subject.publicColumns)
        .first()
        .throwIfNotFound()
    },
    getAll: async () => {
      return Subject.query()
        .select(Subject.publicColumns)
        .throwIfNotFound()
    },
    update: async (payload) => {
      return Subject.query()
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
      return Subject.query()
        .insert({
          name: payload.name,
          description: payload.description
        })
    },
    delete: async (payload) => {
      let id = payload.id
      console.log(id)
      return Subject.query()
        .where({ id })
        .select(Subject.publicColumns)
        .first()
        .throwIfNotFound()
    }
  }
}
