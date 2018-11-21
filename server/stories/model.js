const validator = require('../utils/validator')
const BaseModel = require('../baseModel')

const schemas = {
  updateStory: {
    id: '/updateStory',
    type: 'object',
    properties: {
      'approved': { type: 'integer' },
      'title': { type: 'string' },
      'description': { type: 'string' },
      'youtube_path': { type: ['string', 'null'] },
      'publish_date': { type: ['string', 'null'] },
      'featured_rotation': { type: 'integer' }
    },
    required: ['title', 'description']
  },
  createStory: {
    id: '/createStory',
    type: 'object',
    properties: {
      'approved': { type: 'integer' },
      'title': { type: 'string' },
      'description': { type: 'string' },
      'youtube_path': { type: ['string', 'null'] },
      'publish_date': { type: ['string', 'null'] },
      'featured_rotation': { type: 'integer' }
    },
    required: ['title', 'description']
  }
}

class Story extends BaseModel {
  // Table name is the only required property.
  static get tableName () {
    return 'stories'
  }

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  // Can be used by objection to check DB values.
  // https://vincit.github.io/objection.js/#jsonschema
  static get jsonSchema () {
    return {
      type: 'object',
      required: ['title', 'description'],
      properties: {
        id: {
          type: 'integer',
          primaryKey: true
        },
        approver_id: { type: ['integer', 'null'] },
        approved: { type: 'integer' },
        title: { type: 'string' },
        description: { type: 'string' },
        youtube_path: { type: ['string', 'null'] },
        publish_date: { type: ['string', 'null'] },
        created_at: { type: 'string' },
        updated_at: { type: 'string' },
        featured_rotation: { type: 'integer' }
      }
    }
  }

  static get publicColumns () {
    return [
      'stories.id',
      'stories.approver_id',
      'stories.approved',
      'stories.title',
      'stories.description',
      'stories.youtube_path',
      'stories.publish_date',
      'stories.created_at',
      'stories.updated_at',
      'stories.featured_rotation'
    ]
  }
}

module.exports = {
  Story,
  validateUpdateStory: payload => validator.validate(payload, schemas.updateStory),
  validateCreateStory: payload => validator.validate(payload, schemas.createStory)
}
