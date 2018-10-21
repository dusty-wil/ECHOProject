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
    }    
  }
}
