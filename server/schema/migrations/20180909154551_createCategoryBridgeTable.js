'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.createTable('categoryBridge', function (table) {
    table.integer('category_id').unsigned().references('id').inTable('categories').notNullable()
    table.integer('story_id').unsigned().references('id').inTable('stories').notNullable()
    table.unique(['category_id', 'story_id'])
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('categoryBridge')
}
