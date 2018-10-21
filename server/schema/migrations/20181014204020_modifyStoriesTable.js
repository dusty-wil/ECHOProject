'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.table('stories', function (table) {
      table.boolean('featured_rotation').defaultTo(true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('stories', function (table) {
    table.dropColumn('featured_rotation')
  })
}
