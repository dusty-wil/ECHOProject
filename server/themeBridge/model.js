//const validator = require('../utils/validator')
const BaseModel = require('../baseModel')

const schemas = {}

class ThemeBridge extends BaseModel {
  static get tableName () {
    return 'themeBridge'
  }

  static get publicColumns () {
    return [
      'theme_id',
      'story_id'
    ]
  }
}

module.exports = {
  ThemeBridge
}
