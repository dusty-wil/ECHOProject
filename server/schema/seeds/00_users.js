'use strict'

const ids = [1]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('users')
    .whereIn('id', ids)
    .then((users) => {
      // If there is not user add one
      if (users.length === ids.length) {
        return Promise.resolve()
      }

      return knex('users')
        .insert([
          {
            username: 'echo_admin',
            email: `dusty.wil@gmail.com`,
            first_name: 'ECHO',
            last_name: 'Admin',
            password: authHelpers.generateHash('TerriblePassword'),
            active: true,
            role: 'admin'
          }
        ])
    })
}
