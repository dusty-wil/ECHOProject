const moment = require('moment')
const { transaction } = require('objection')
const { Theme } = require('./model')


module.exports = function ()
{
    return {
        get: async (id) => {
            return Theme.query()
                .where({ id })
                .select(Theme.publicColumns)
                .first()
                .throwIfNotFound()
        },
        getAll: async () => {
            return Theme.query()
                .select(Theme.publicColumns)
        },
        deleteTheme: async(id) => {
                return Theme.query()
                    .where({id: id})
                    .delete()
                    .throwIfNotFound()
        },
        create: async(payload) => {
            return Theme.query()
                    .insert({name: payload.name, description: payload.description})
        }
    }
}
