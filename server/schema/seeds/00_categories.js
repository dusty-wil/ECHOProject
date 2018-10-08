'use strict'

const ids = [1,2,3,4]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('categories')
    .whereIn('id', ids)
    .then((categories) => {
      if (categories.length === ids.length) {
        return Promise.resolve()
      }

      return knex('categories')
        .insert([
            {
                name: 'category 1',
                description: 'description of category 1',
            },
            {
                name: 'category 2',
                description: 'description of category 2',
            },
            {
                name: 'category 3',
                description: 'description of category 3',
            },
            {
                name: 'category 4',
                description: 'description of category 4',
            }
        ])
    })
}
