'use strict'

const ids = [1,2,3,4]

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
            },
            {
                name: 'theme 2',
                description: 'description of theme 2',
            },
            {
                name: 'theme 3',
                description: 'description of theme 3',
            },
            {
                name: 'theme 4',
                description: 'description of theme 4',
            }
        ])
    })
}
