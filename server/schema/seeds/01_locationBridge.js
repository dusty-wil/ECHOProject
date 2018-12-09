'use strict'

const ids = [5,1,1]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('locationBridge')
    .whereIn('location_id', ids)
    .then((bridges) => {
      if (bridges.length === ids.length) {
        return Promise.resolve()
      }

      return knex('locationBridge')
        .insert([
            { location_id: 5, story_id: 1 },
            { location_id: 1, story_id: 3 },
            { location_id: 1, story_id: 4 }
        ])
    })
}
