//const validator = require('../utils/validator')
const BaseModel = require('../baseModel')

const schemas = {}

class SubjectBridge extends BaseModel {
  static get tableName () {
    return 'subjectBridge'
  }

  static get publicColumns () {
    return [
      'subject_id',
      'story_id'
    ]
  }
}

module.exports = {
  SubjectBridge
}
