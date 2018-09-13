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
                id: 1,
                username: 'echo_admin',
                email: `echo@echo.school`,
                first_name: 'ECHO',
                last_name: 'Admin',
                password: authHelpers.generateHash('TerriblePassword'),
                active: true
            },
            {
                id: 2,
                username: 'echo_author',
                email: `author@echo.school`,
                first_name: 'ECHO',
                last_name: 'Author',
                password: authHelpers.generateHash('TerriblePassword'),
                active: true
            },
            {
                id: 3,
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
