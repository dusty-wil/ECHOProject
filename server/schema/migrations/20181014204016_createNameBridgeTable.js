'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.createTable('nameBridge', function (table) {
    table.integer('name_id').unsigned().references('id').inTable('names').notNullable()
    table.integer('story_id').unsigned().references('id').inTable('stories').notNullable()
    table.unique(['name_id', 'story_id'])
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('nameBridge')
}
