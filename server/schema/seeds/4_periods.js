'use strict'

const ids = [1,2,3,4]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('periods')
    .then((periods) => {
      if (periods.length >= ids.length) {
        return Promise.resolve()
      }

      return knex('periods')
        .insert([
            {
                name: 'period 1',
                description: 'description of period 1',
            },
            {
                name: 'period 2',
                description: 'description of period 2',
            },
            {
                name: 'period 3',
                description: 'description of period 3',
            },
            {
                name: 'period 4',
                description: 'description of period 4',
            }
        ])
    })
}
