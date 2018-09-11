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
        }    
    }
}
