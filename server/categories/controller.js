const moment = require('moment')
const { transaction } = require('objection')
const { Category } = require('./model')


module.exports = function ()
{
    return {
        get: async (id) => {
            return Category.query()
                .where({ id })
                .select(Category.publicColumns)
                .first()
                .throwIfNotFound()
        },
        getAll: async () => {
            return Category.query()
                .select(Category.publicColumns)
        },
        deleteCategory: async(id) => {
                return Category.query()
                    .where({id: id})
                    .delete()
                    .throwIfNotFound()
        },
        create: async(payload) => {
            return Category.query()
                    .insert({name: payload.name, description: payload.description})
        }
    }
}
