'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.createTable('stories', function (table) {
      table.increments().primary()
      table.integer('author_id').unsigned().references('id').inTable('users').notNullable()
      table.integer('approver_id').unsigned().references('id').inTable('users')
      table.boolean('approved').defaultTo(false)
      table.string('title')
      table.text('description')
      table.string('county')
      table.string('storage_path')
      table.string('youtube_path')
      table.dateTime('publish_date')
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP')).comment('Sets created at to time: now.')
      table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')).comment('Initially set to time: now, however will update to time t at update automatically.') // This accomplishes the updated_at trigger

  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('stories')
}
