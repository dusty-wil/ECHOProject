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
        }    
    }
}
