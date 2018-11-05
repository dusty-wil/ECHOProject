const validator = require('../utils/validator')
const BaseModel = require('../baseModel')

const schemas = {
}

class Theme extends BaseModel
{
    // Table name is the only required property.
    static get tableName ()
    {
        return 'themes'
    }

    // Optional JSON schema. This is not the database schema! Nothing is generated
    // based on this. This is only used for validation. Whenever a model instance
    // is created it is checked against this schema. http://json-schema.org/.
    // static get jsonSchema ()
    // {
    //     return {
    //         type: 'object',
    //         required: ['id', 'name', 'description'],
    //
    //         properties: {
    //             id: {
    //                 type: 'integer',
    //                 primaryKey: true
    //             },
    //             name: { type: 'string' },
    //             description: { type: 'string' },
    //             created_at: { type: 'string' },
    //             updated_at: { type: 'string' }
    //         }
    //     }
    // }

    static get publicColumns ()
    {
        return [
            'id',
            'name',
            'description',
            'created_at',
            'updated_at'
        ]
    }
}

module.exports = {
  Theme
}
