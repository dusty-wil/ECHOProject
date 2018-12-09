'use strict'

const ids = [1,2,3,5,4,6,7,8]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('periodBridge')
    .whereIn('period_id', ids)
    .then((bridges) => {
      if (bridges.length === ids.length) {
        return Promise.resolve()
      }

      return knex('periodBridge')
        .insert([
            { period_id: 1, story_id: 1 },
            { period_id: 2, story_id: 1 },
            { period_id: 3, story_id: 2 },
            { period_id: 5, story_id: 2 },
            { period_id: 4, story_id: 3 },
            { period_id: 6, story_id: 3 },
            { period_id: 7, story_id: 4 },
            { period_id: 8, story_id: 4 }
        ])
    })
}
