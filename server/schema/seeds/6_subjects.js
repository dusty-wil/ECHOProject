'use strict'

const ids = [1,2,3,4]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('subjects')
    .then((subjects) => {
      if (subjects.length >= ids.length) {
        return Promise.resolve()
      }

      return knex('subjects')
        .insert([
            {
                name: 'subject 1',
                description: 'description of subject 1',
            },
            {
                name: 'subject 2',
                description: 'description of subject 2',
            },
            {
                name: 'subject 3',
                description: 'description of subject 3',
            },
            {
                name: 'subject 4',
                description: 'description of subject 4',
            }
        ])
    })
}
