const validator = require('../utils/validator')
const BaseModel = require('../baseModel')

const schemas = {}

class StoryAuthor extends BaseModel {
  // Table name is the only required property.
  static get tableName () {
    return 'storyAuthors'
  }

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema () {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { 
          type: 'integer',
          primaryKey: true
        },
        name: { type: 'string' },
        email: { type: 'string' },
        major: { type: 'string' },
        year: { type: 'integer' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' }
      }
    }
  }

  static get publicColumns () {
    return [
      'id',
      'name',
      'created_at',
      'updated_at'
    ]
  }
}

module.exports = {
  StoryAuthor
}
