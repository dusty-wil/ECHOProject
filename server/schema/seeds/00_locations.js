'use strict'

const ids = [1,2,3,4,5]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('locations')
    .whereIn('id', ids)
    .then((locations) => {
      if (locations.length === ids.length) {
        return Promise.resolve()
      }

      return knex('locations')
        .insert([
            {
                name: 'West Virginia',
                description: 'West Virginia'
            },
            {
                name: 'SWPA',
                description: 'SWPA'
            },
            {
                name: 'Mon Valley',
                description: 'Mon Valley'
            },
            {
                name: 'Allegheny County',
                description: 'Allegheny County'
            },
            {
                name: 'Mt. Pleasant',
                description: 'Mt. Pleasant'
            }
        ])
    })
}
