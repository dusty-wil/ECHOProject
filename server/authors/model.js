const validator = require('../utils/validator')
const BaseModel = require('../baseModel')

const schemas = {
}

class Author extends BaseModel 
{
    // Table name is the only required property.
    static get tableName () 
    {
        return 'authors'
    }

    // Optional JSON schema. This is not the database schema! Nothing is generated
    // based on this. This is only used for validation. Whenever a model instance
    // is created it is checked against this schema. http://json-schema.org/.
    static get jsonSchema () 
    {
        return {
            type: 'object',
            required: ['id', 'user_id'],
            
            properties: {
                id: { type: 'integer' },
                user_id: { type: 'integer' },
                calu_id: { type: 'string' },
                phone: { type: 'string' },
                alt_phone: { type: 'string' },
                address: { type: 'string' },
                created_at: { type: 'string' },
                updated_at: { type: 'string' }
            }
        }
    }

    static get publicColumns () {
        return [
            'id',
            'user_id',
            'calu_id',
            'phone',
            'alt_phone',
            'address',
            'created_at',
            'updated_at'
        ]
    }
}

module.exports = {
  Author
}
