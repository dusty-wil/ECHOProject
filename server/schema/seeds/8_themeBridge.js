'use strict'

const ids = [1,2,3,2,3,4,1,3,4]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('themeBridge')
    .then((themeBridge) => {
      if (themeBridge.length >= ids.length) {
        return Promise.resolve()
      }

      return knex('themeBridge')
        .insert([
            { theme_id: 1, story_id: 1 },
            { theme_id: 2, story_id: 1 },
            { theme_id: 3, story_id: 1 },
            { theme_id: 2, story_id: 2 },
            { theme_id: 3, story_id: 2 },
            { theme_id: 4, story_id: 2 },
            { theme_id: 1, story_id: 3 },
            { theme_id: 3, story_id: 3 },
            { theme_id: 4, story_id: 3 }
        ])
    })
}
