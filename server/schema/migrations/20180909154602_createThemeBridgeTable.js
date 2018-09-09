'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.createTable('themeBridge', function (table) {
    table.integer('theme_id').unsigned().references('id').inTable('themes').notNullable()
    table.integer('story_id').unsigned().references('id').inTable('stories').notNullable()
    table.unique(['theme_id', 'story_id'])
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('themeBridge')
}
