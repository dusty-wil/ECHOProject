const BaseModel = require('../baseModel')

const schemas = {}

class NameBridge extends BaseModel {
  static get tableName () {
    return 'nameBridge'
  }

  static get publicColumns () {
    return [
      'name_id',
      'story_id'
    ]
  }
}

module.exports = {
  NameBridge
}
