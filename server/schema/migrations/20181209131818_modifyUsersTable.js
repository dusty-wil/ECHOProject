'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.table('users', function (table) {
      table.enu('role', ['user', 'admin'])
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('role')
  })
}
