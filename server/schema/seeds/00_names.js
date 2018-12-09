'use strict'

const ids = [1,2,3,4,5,6,7,8]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('names')
    .whereIn('id', ids)
    .then((names) => {
      if (names.length === ids.length) {
        return Promise.resolve()
      }

      return knex('names')
        .insert([
            {
		name: 'Linsly School',
                description: 'Linsly School'
            },
            {
                name: 'Henry Clay Frick',
                description: 'Henry Clay Frick'
            },
            {
                name: 'Andrew Carnegie',
                description: 'Andrew Carnegie'
            },
            {
                name: 'Freddie Elkes',
                description: 'Freddie Elkes'
            },
            {
                name: 'Lillian Russell',
                description: 'Lillian Russell'
            },
            {
                name: 'Mary Croghan Schenley',
                description: 'Mary Croghan Schenley'
            },
            {
                name: 'Willa Cather',
                description: 'Willa Cather'
            },
            {
                name: 'Nellie Bly',
                description: 'Nellie Bly'
            }
        ])
    })
}
