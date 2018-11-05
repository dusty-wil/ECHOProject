const moment = require('moment')
const { transaction } = require('objection')
const { Period } = require('./model')


module.exports = function ()
{
    return {
        get: async (id) => {
            return Period.query()
                .where({ id })
                .select(Period.publicColumns)
                .first()
                .throwIfNotFound()
        },
        getAll: async () => {
            return Period.query()
                .select(Period.publicColumns)
        },
        deletePeriod: async(id) => {
                return Period.query()
                    .where({id: id})
                    .delete()
                    .throwIfNotFound()
        },
        create: async(payload) => {
            return Period.query()
                    .insert({name: payload.name, description: payload.description})
        }
    }
}
