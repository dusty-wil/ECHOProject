'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.table('stories', function (table) {
    table.dropForeign('author_id')
    table.dropColumn('author_id')
    table.dropColumn('county')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('stories', function (table) {
    table.integer('author_id').unsigned().references('id').inTable('users').notNullable()
    table.string('county')
  })
}
