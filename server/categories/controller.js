'use strict'
const moment = require('moment')
const { transaction } = require('objection')
const { Category } = require('./model')

module.exports = function () {
  return {
    get: async (id) => {
      return Category.query()
        .where({ id })
        .select(Category.publicColumns)
        .first()
        .throwIfNotFound()
    },
    getAll: async () => {
      return Category.query()
        .select(Category.publicColumns)
        .throwIfNotFound()
    },
    update: async (payload) => {
      return Category.query()
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
      return Category.query()
        .insert({
          name: payload.name,
          description: payload.description
        })
    },
    delete: async (payload) => {
      let id = payload.id
      console.log(id)
      return Category.query()
        .where({ id })
        .select(Category.publicColumns)
        .first()
        .throwIfNotFound()
    }
  }
}
