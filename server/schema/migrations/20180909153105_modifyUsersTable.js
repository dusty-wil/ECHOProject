'use strict'

exports.up = function (knex, Promise) {
  return knex.table('users', function (table) {
      table.enu('role', ['user', 'admin'])
  })
}

exports.down = function (knex, Promise) {
  return knex.table('users').dropColumn('role')
}
