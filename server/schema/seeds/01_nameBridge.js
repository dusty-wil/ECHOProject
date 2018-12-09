'use strict'

const ids = [4,1]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('nameBridge')
    .whereIn('name_id', ids)
    .then((bridges) => {
      if (bridges.length === ids.length) {
        return Promise.resolve()
      }

      return knex('nameBridge')
        .insert([
            { name_id: 4, story_id: 2 },
            { name_id: 1, story_id: 4 }
        ])
    })
}
