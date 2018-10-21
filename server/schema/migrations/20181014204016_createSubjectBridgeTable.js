'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.createTable('subjectBridge', function (table) {
    table.integer('subject_id').unsigned().references('id').inTable('subjects').notNullable()
    table.integer('story_id').unsigned().references('id').inTable('stories').notNullable()
    table.unique(['subject_id', 'story_id'])
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('subjectBridge')
}
