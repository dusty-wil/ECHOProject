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
        .throwIfNotFound()
    },

    update: async function (payload) {
      console.log('landed in update theme')
      console.log(payload)

      // const updateInstance = await validateUpdateStory(payload)
     
      // console.log(updateInstance)

      return Theme.query()
        .patchAndFetchById( 
          payload.id, 
          {
            name: payload.name,
            description: payload.description
          }
        )
        // .returning(Story.publicColumns)
        // .select(Story.publicColumns)
        .throwIfNotFound()
    },
  }
}
