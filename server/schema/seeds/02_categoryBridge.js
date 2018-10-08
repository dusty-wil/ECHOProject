'use strict'

const ids = [1,2,3,2,3,4,1,3,4]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('categoryBridge')
    .whereIn('category_id', ids)
    .then((categoryBridge) => {
      if (categoryBridge.length === ids.length) {
        return Promise.resolve()
      }

      return knex('categoryBridge')
        .insert([
            { category_id: 1, story_id: 1 },
            { category_id: 2, story_id: 1 },
            { category_id: 3, story_id: 1 },
            { category_id: 2, story_id: 2 },
            { category_id: 3, story_id: 2 },
            { category_id: 4, story_id: 2 },
            { category_id: 1, story_id: 3 },
            { category_id: 3, story_id: 3 },
            { category_id: 4, story_id: 3 }
        ])
    })
}
