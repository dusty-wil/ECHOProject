const moment = require('moment')
const { transaction } = require('objection')
const { Subject } = require('./model')


module.exports = function ()
{
    return {
        get: async (id) => {
            return Subject.query()
                .where({ id })
                .select(Subject.publicColumns)
                .first()
                .throwIfNotFound()
        },
        getAll: async () => {
            return Subject.query()
                .select(Subject.publicColumns)
        },
        deleteSubject: async(id) => {
                return Subject.query()
                    .where({id: id})
                    .delete()
                    .throwIfNotFound()
        },
        create: async(payload) => {
            return Subject.query()
                    .insert({name: payload.name, description: payload.description})
        }
    }
}
