'use strict'

const ids = [1]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('periodBridge')
    .whereIn('id', ids)
    .then((periodBridge) => {
      if (periodBridge.length === ids.length) {
        return Promise.resolve()
      }

      return knex('periodBridge')
        .insert([
            {
                period_id: 1,
                story_id: 1
            }
        ])
    })
}
