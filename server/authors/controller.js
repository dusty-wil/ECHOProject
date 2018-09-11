const moment = require('moment')
const { transaction } = require('objection')
const { Author } = require('./model')

module.exports = function () 
{
    return {
        get: async (id) => {
            return Author.query()
                .where({ id })
                .select(Author.publicColumns)
                .first()
                .throwIfNotFound()       
        }    
    }
}
