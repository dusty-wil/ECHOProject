const validator = require('../utils/validator')
const BaseModel = require('../baseModel')

const schemas = {
}

class Story extends BaseModel 
{
    // Table name is the only required property.
    static get tableName () 
    {
        return 'stories'
    }

    // Optional JSON schema. This is not the database schema! Nothing is generated
    // based on this. This is only used for validation. Whenever a model instance
    // is created it is checked against this schema. http://json-schema.org/.
    static get jsonSchema () 
    {
        return {
            type: 'object',
            required: ['id', 'author_id', 'title', 'description'],

            properties: {
                id: { 
                    type: 'integer',
                    primaryKey: true
                },
                author_id: { type: 'integer' },
                approver_id: { type: 'integer' },
                approved: { type: 'integer' },
                title: { type: 'string' },
                description: { type: 'string' },
                county: { type: 'string' },
                storage_path: { type: 'string' },
                youtube_path: { type: 'string' },
                publish_date: { type: 'string' },
                created_at: { type: 'string' },
                updated_at: { type: 'string' }
            }
        }
    }

    static get publicColumns () {
        return [
            'id',
            'author_id',
            'approver_id',
            'approved',
            'title',
            'description',
            'county',
            'storage_path',
            'youtube_path',
            'publish_date',
            'created_at',
            'updated_at' 
        ]
    }
}

module.exports = {
  Story
}
