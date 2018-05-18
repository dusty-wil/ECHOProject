'use strict'

exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments().primary()
    table.string('username').unique().notNullable()
    table.string('email').unique().notNullable()
    table.string('first_name')
    table.string('last_name')
    table.string('password').notNullable()
    table.bool('active').default(false)
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP')).comment('Sets created at to time: now.')
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')).comment('Initially set to time: now, however will update to time t at update automatically.') // This accomplishes the updated_at trigger
    table.unique(['username', 'email'])
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
