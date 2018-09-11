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
        }    
    }
}
