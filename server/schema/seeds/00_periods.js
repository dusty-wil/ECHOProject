'use strict'

const ids = [1]

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
                id: 1,
                name: 'period 1',
                description: 'description of period 1',
            }
        ])
    })
}
