'use strict'

const ids = [1]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('categoryBridge')
    .whereIn('id', ids)
    .then((categoryBridge) => {
      if (categoryBridge.length === ids.length) {
        return Promise.resolve()
      }

      return knex('categoryBridge')
        .insert([
            {
                category_id: 1,
                story_id: 1
            }
        ])
    })
}
