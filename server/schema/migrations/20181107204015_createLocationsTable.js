'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.createTable('locations', function (table) {
      table.increments().primary()
      table.string('name')
      table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP')).comment('Sets created at to time: now.')
      table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')).comment('Initially set to time: now, however will update to time t at update automatically.') // This accomplishes the updated_at trigger

  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('locations')
}
