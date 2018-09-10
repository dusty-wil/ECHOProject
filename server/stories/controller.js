const moment = require('moment')
const { transaction } = require('objection')
const { Story } = require('./model')

module.exports = function () 
{
    return {
        get: async (id) => {
            return Story.query()
                .where({ id })
                .select(Story.publicColumns)
                .first()
                .throwIfNotFound()       
        }    
    }
}
