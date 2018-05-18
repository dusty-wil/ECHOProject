const validateSchema = require('jsonschema').validate
const Logger = require('./logger').Logger
const log = Logger('app:echo:validator')

const validate = (payload, schema) => (
  new Promise(function (resolve) {
    // Do not allow any additional properties -- unless schema has it set
    const localSchema = Object.assign({}, {additionalProperties: false}, schema)
    const result = validateSchema(payload, localSchema)
    if (result.errors.length > 0) {
      log.error('All Validation Errors:', result.errors, payload.toJSON())
      // Build our own error to show to the user
      const property = result.errors[0].property.split('.')[1]
      const message = result.errors[0].message
      const error = new Error(`"${property}" ${message}`)
      error.status = 400
      throw error
    }
    return resolve(result.instance)
  }))

const DEFAULT_SKIP = 0
const DEFAULT_LIMIT = 10

const paginationSchema = {
  id: '/pagination',
  type: 'object',
  properties: {
    'skip': {type: 'integer', minimum: 0},
    'limit': {type: 'integer', minimum: 0}
  }
}

const dbId = {
  type: 'integer',
  minimum: 1
}

const mysqlDateTime = {
  type: 'string',
  pattern: '^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9])(?:( [0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$'
}

const username = {
  type: 'string',
  minLength: 6
}

const password = {
  type: 'string',
  minLength: 8
}

const client = {
  type: 'string',
  minLength: 8
}

const email = {
  type: 'string',
  format: 'email'
}

const token = {
  type: 'string',
  pattern: '^[a-f0-9]+$', // hex
  minLength: 40 // 20 bytes
}

const emailList = {
  type: 'array',
  items: email
}

const stringArray = {
  type: 'array',
  items: { type: 'string' }
}

module.exports = {
  validate,
  validatePagination (payload) {
    // Query string values are returned as strings by Express so we need to make the number again
    const skip = payload.skip ? Number(payload.skip) : DEFAULT_SKIP
    const limit = payload.limit ? Number(payload.limit) : DEFAULT_LIMIT
    return validate({ skip, limit }, paginationSchema)
  },
  validatePasswordInput (passwordRaw) {
    // Taken from here (plus some more special characters & limit to 64 characters):
    // http://stackoverflow.com/a/19605207/1439914
    //
    // Length between 8 and 64 (inclusive)
    // At least one uppercase and one lowercase letter
    // At least one number
    // At least one special character --  ?=.*?[!@#$%^&*_+=,.?;:`"~'-\
    const regexPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*_+=,.?;:`"~'\-\\]).{8,64}$/g

    // Do additional validation
    const validationErrorMessage = 'Password does not meet the strength requirements.'

    // Regex
    const regexMatches = passwordRaw.match(regexPattern)
    if (regexMatches === null || regexMatches.length !== 1) {
      const error = new Error(validationErrorMessage)
      error.status = 400
      throw error
    }
  },
  schemas: {
    dbId,
    client,
    email,
    emailList,
    mysqlDateTime,
    password,
    stringArray,
    token,
    username
  }
}
