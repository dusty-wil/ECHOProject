'use strict'

const ids = [1,2,3,4,5,6,7,8,9]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('categoryBridge')
    .whereIn('category_id', ids)
    .then((bridges) => {
      if (bridges.length === ids.length) {
        return Promise.resolve()
      }

      return knex('categoryBridge')
        .insert([
            { category_id: 1, story_id: 1 },
            { category_id: 2, story_id: 1 },
            { category_id: 3, story_id: 2 },
            { category_id: 4, story_id: 2 },
            { category_id: 5, story_id: 3 },
            { category_id: 6, story_id: 3 },
            { category_id: 7, story_id: 4 },
            { category_id: 8, story_id: 4 },
            { category_id: 9, story_id: 4 }
        ])
    })
}
