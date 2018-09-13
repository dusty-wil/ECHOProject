'use strict'

const ids = [1]

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
                id: 1,
                name: 'category 1',
                description: 'description of category 1',
            }
        ])
    })
}
