'use strict'

const ids = [1,2,3,2,3,4,1,3,4]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('periodBridge')
    .whereIn('period_id', ids)
    .then((periodBridge) => {
      if (periodBridge.length === ids.length) {
        return Promise.resolve()
      }

      return knex('periodBridge')
        .insert([
            { period_id: 1, story_id: 1 },
            { period_id: 2, story_id: 1 },
            { period_id: 3, story_id: 1 },
            { period_id: 2, story_id: 2 },
            { period_id: 3, story_id: 2 },
            { period_id: 4, story_id: 2 },
            { period_id: 1, story_id: 3 },
            { period_id: 3, story_id: 3 },
            { period_id: 4, story_id: 3 }
        ])
    })
}
