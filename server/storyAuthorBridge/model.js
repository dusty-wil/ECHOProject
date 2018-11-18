const BaseModel = require('../baseModel')

const schemas = {}

class StoryAuthorBridge extends BaseModel {
  static get tableName () {
    return 'storyAuthorBridge'
  }

  static get publicColumns () {
    return [
      'story_author_id',
      'story_id'
    ]
  }
}

module.exports = {
  StoryAuthorBridge
}
