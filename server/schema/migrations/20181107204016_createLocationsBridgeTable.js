'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.createTable('locationBridge', function (table) {
    table.integer('location_id').unsigned().references('id').inTable('locations').notNullable()
    table.integer('story_id').unsigned().references('id').inTable('stories').notNullable()
    table.unique(['location_id', 'story_id'])
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('locationBridge')
}
