'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.table('users', function (table) {
      table.string('reset_token')
      table.dateTime('reset_token_expiration')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('reset_token')
    table.dropColumn('reset_token_expiration')
  })
}
