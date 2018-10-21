const moment = require('moment')
const { transaction } = require('objection')
const { Name } = require('./model')

module.exports = function () 
{
    return {
        get: async (id) => {
            return Name.query()
                .where({ id })
                .select(Name.publicColumns)
                .first()
                .throwIfNotFound()       
        }    
    }
}
