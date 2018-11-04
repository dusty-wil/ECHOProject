'use strict'

const ids = [1, 2]

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
                username: 'echo_author',
                email: `author@echo.school`,
                first_name: 'ECHO',
                last_name: 'Author',
                password: authHelpers.generateHash('TerriblePassword'),
                active: true
            },
            {
                username: 'echo_user',
                email: `user@echo.school`,
                first_name: 'ECHO',
                last_name: 'User',
                password: authHelpers.generateHash('TerriblePassword'),
                active: true
            },
        ])
    })
}
