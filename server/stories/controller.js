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
    
    updateStory: async function (payload) {
      console.log('landed in updateStory')
      console.log(payload)

      // const updateInstance = await validateUpdateStory(payload)
     
      // console.log(updateInstance)

      return Story.query()
        .patchAndFetchById( 
          payload.id, 
          {
            title: payload.title,
            author_id: payload.author_id,
            description: payload.description
          }
        )
        // .returning(Story.publicColumns)
        // .select(Story.publicColumns)
        .throwIfNotFound()
    },
  }
}
