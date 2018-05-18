const Model = require('objection').Model
const moment = require('moment')
const knex = require('./db')()
class BaseModel extends Model {
  $beforeInsert () {

  }

  $beforeUpdate () {

  }

  static toMySQLDateTimeStr (jsDate) {
    return moment(jsDate).format('YYYY-MM-DD HH:mm:ss')
  }
}
BaseModel.knex(knex)
module.exports = BaseModel
