const BaseModel = require('../baseModel')

const schemas = {}

class PeriodBridge extends BaseModel {
  static get tableName () {
    return 'periodBridge'
  }

  static get publicColumns () {
    return [
      'period_id',
      'story_id'
    ]
  }
}

module.exports = {
  PeriodBridge
}
