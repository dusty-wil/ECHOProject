//const validator = require('../utils/validator')
const BaseModel = require('../baseModel')

const schemas = {}

class LocationBridge extends BaseModel {
  static get tableName () {
    return 'locationBridge'
  }

  static get publicColumns () {
    return [
      'location_id',
      'story_id'
    ]
  }
}

module.exports = {
  LocationBridge
}
