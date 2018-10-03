'use strict'

const ids = [1]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('themeBridge')
    .whereIn('theme_id', ids)
    .then((themeBridge) => {
      if (themeBridge.length === ids.length) {
        return Promise.resolve()
      }

      return knex('themeBridge')
        .insert([
            {
                theme_id: 1,
                story_id: 1
            }
        ])
    })
}
