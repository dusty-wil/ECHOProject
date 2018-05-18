const Model = require('objection').Model
const moment = require('moment')

class BaseModel extends Model {
  $beforeInsert () {

  }

  $beforeUpdate () {

  }

  static toMySQLDateTimeStr (jsDate) {
    return moment(jsDate).format('YYYY-MM-DD HH:mm:ss')
  }
}

module.exports = BaseModel
