'use strict'

const ids = [1,2,3,4,5,6,7,8]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('periods')
    .whereIn('id', ids)
    .then((periods) => {
      if (periods.length === ids.length) {
        return Promise.resolve()
      }

      return knex('periods')
        .insert([
            {
                name: 'Reconstruction Era',
                description: 'Reconstruction Era',
            },
            {
                name: '1848',
                description: '1848'
            },
            {
                name: '1942',
                description: '1942'
            },
            {
                name: 'Machine Age',
                description: 'Machine Age'
            },
            {
                name: 'World War II',
                description: 'World War II'
            },
            {
                name: '1862',
                description: '1862'
            },
            {
                name: 'Late Modern Period',
                description: 'Late Modern Period'
            },
            {
                name: '1814',
                description: '1814'
            }
        ])
    })
}
