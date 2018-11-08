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
    update: async function (payload) {
      return Story.query()
        .patchAndFetchById( 
          payload.id, 
          {
            title: payload.title,
            author_id: payload.author_id,
            description: payload.description
          }
        )
        .throwIfNotFound()
    },
    new: async (payload) => {
      return Story.query()
        .insert({
          title: payload.title,
          author_id: payload.author_id,
          description: payload.description
        })
    },
    delete: async (payload) => {
      let id = payload.id
      return Story.query()
        .where({ id })
        .select(Story.publicColumns)
        .first()
        .throwIfNotFound()
    }
  }
}
