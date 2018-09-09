'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.createTable('periodBridge', function (table) {
    table.integer('period_id').unsigned().references('id').inTable('periods').notNullable()
    table.integer('story_id').unsigned().references('id').inTable('stories').notNullable()
    table.unique(['period_id', 'story_id'])
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('periodBridge')
}
