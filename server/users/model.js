const validator = require('../utils/validator')
const BaseModel = require('../baseModel')

const schemas = {
  updatePassword: {
    id: '/updatePassword',
    type: 'object',
    properties: {
      'currentPassword': validator.schemas.password,
      'newPassword': validator.schemas.password,
      'newPasswordConfirmation': validator.schemas.password
    },
    required: ['currentPassword', 'newPassword', 'newPasswordConfirmation']
  },
  updateProfile: {
    id: '/updateProfile',
    type: 'object',
    properties: {
      'first_name': {type: 'string'},
      'last_name': {type: 'string'},
      'email': {type: 'string', format: 'email'}
    },
    required: ['email']
  },
  login: {
    id: '/login',
    type: 'object',
    properties: {
      'username': validator.schemas.username,
      'password': validator.schemas.password
    },
    required: ['username', 'password']
  },
  passwordReset: {
    id: '/passwordReset',
    type: 'object',
    properties: {
      'token': validator.schemas.token,
      'password': validator.schemas.password,
      'passwordConfirmation': validator.schemas.password
    },
    required: ['token', 'password', 'passwordConfirmation']
  },
  passwordResetToken: {
    id: '/passwordResetToken',
    type: 'object',
    properties: {
      'token': validator.schemas.token
    },
    required: ['token']
  },
  passwordResetRequest: {
    id: '/passwordResetRequest',
    type: 'object',
    properties: {
      'usernameOrEmail': {type: 'string'}
    },
    required: ['usernameOrEmail']
  }
}

class User extends BaseModel {
  // Table name is the only required property.
  static get tableName () {
    return 'users'
  }

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema () {
    return {
      type: 'object',
      required: ['username', 'email', 'active', 'password', 'first_name', 'last_name'],

      properties: {
        id: validator.schemas.dbId,
        username: { type: 'string' },
        email: { type: 'string' },
        first_name: { type: 'string' },
        last_name: { type: 'string' },
        password: { type: 'string' },
        active: { type: 'boolean', default: true },
        created_at: validator.schemas.mysqlDateTime,
        updated_at: validator.schemas.mysqlDateTime
      }
    }
  }

  static get publicColumns () {
    return [
      'id',
      'username',
      'email',
      'first_name',
      'last_name',
      'created_at',
      'updated_at'
    ]
  }
}

module.exports = {
  validateUpdatePassword: payload => validator.validate(payload, schemas.updatePassword),
  validateUpdateProfile: payload => validator.validate(payload, schemas.updateProfile),
  validateLogin: payload => validator.validate(payload, schemas.login),
  validatePasswordReset: payload => validator.validate(payload, schemas.passwordReset),
  validatePasswordResetToken: payload => validator.validate(payload, schemas.passwordResetToken),
  validatePasswordResetRequest: payload => validator.validate(payload, schemas.passwordResetRequest),
  User
}
