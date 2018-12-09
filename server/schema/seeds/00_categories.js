'use strict'

const ids = [1,2,3,4,5,6,7,8,9]

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
                name: 'Slavery',
                description: 'Slavery'
            },
            {
                name: 'American Plantations',
                description: 'American Plantations'
            },
            {
                name: 'World War II',
                description: 'World War II'
            },
            {
                name: 'POW',
                description: 'POW'
            },
            {
                name: 'Robbery',
                description: 'Robbery'
            },
            {
                name: 'Crime',
                description: 'Crime'
            },
            {
                name: 'School',
                description: 'School'
            },
            {
                name: 'Museum',
                description: 'Museum'
            },
            {
                name: 'Military',
                description: 'Military'
            }
        ])
    })
}
