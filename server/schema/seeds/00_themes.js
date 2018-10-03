'use strict'

const ids = [1]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('themes')
    .whereIn('id', ids)
    .then((themes) => {
      if (themes.length === ids.length) {
        return Promise.resolve()
      }

      return knex('themes')
        .insert([
            {
                name: 'theme 1',
                description: 'description of theme 1',
            }
        ])
    })
}
