//const validator = require('../utils/validator')
const BaseModel = require('../baseModel')

const schemas = {}

class CategoryBridge extends BaseModel {
  static get tableName () {
    return 'categoryBridge'
  }

  static get publicColumns () {
    return [
      'category_id',
      'story_id'
    ]
  }
}

module.exports = {
  CategoryBridge
}
