'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.createTable('storyAuthorBridge', function (table) {
    table.integer('story_author_id').unsigned().references('id').inTable('storyAuthors').notNullable()
    table.integer('story_id').unsigned().references('id').inTable('stories').notNullable()
    table.unique(['story_author_id', 'story_id'])
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('storyAuthorBridge')
}
