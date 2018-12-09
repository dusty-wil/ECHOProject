'use strict'

const ids = [1,2,3,4,5]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('subjects')
    .whereIn('id', ids)
    .then((subjects) => {
      if (subjects.length === ids.length) {
        return Promise.resolve()
      }

      return knex('subjects')
        .insert([
            {
                name: 'Historical',
                description: 'Historical',
            },
            {
                name: 'The Historical Society of Mt. Pleasant',
                description: 'The Historical Society of Mt. Pleasant'
            },
            {
                name: 'POW',
                description: 'POW'
            },
            {
                name: 'Ohio County Public Library',
                description: 'Ohio County Public Library'
            },
            {
                name: 'West Virginia Department of Arts, Culture, and History',
                description: 'West Virginia Department of Arts, Culture, and History'
            }
        ])
    })
}
