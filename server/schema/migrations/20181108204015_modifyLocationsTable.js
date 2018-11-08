'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.table('locations', function (table) {
      table.text('description')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('locations', function (table) {
    table.dropColumn('description')
  })
}
