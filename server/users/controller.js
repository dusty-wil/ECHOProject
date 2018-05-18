'use strict'
const moment = require('moment')
const { transaction } = require('objection')
const {
  User,
  validatePasswordResetToken,
  validatePasswordReset,
  validatePasswordResetRequest,
  validateUpdatePassword,
  validateUpdateProfile
} = require('./model')

module.exports = function () {
  return {
    // verifyResetToken: async function (payload) {
    //   const instance = await validatePasswordResetToken(payload)
    //   return User.query()
    //     .select(User.publicColumns)
    //     .where({reset_token: instance.token})
    //     .andWhere('reset_token_expiration', '>', moment().format('YYYY-MM-DD HH:mm:ss'))
    //     .first()
    //     .throwIfNotFound()
    // },
    // updatePasswordViaToken: async function (payload) {
    //   const instance = await validatePasswordReset(payload)
    //   if (instance.password !== instance.passwordConfirmation) {
    //     const error = new Error(`Password and the confirmation must match`)
    //     error.status = 400
    //     throw error
    //   }
    //   return User.raw(`UPDATE users SET password='${authHelpers.generateHash(instance.password)}', reset_token=NULL, reset_token_expiration=NULL WHERE reset_token='${instance.token}';`)
    // },
    // resetTokenFor: async function (payload) {
    //   return transaction(User.knex(), async (trx) => {
    //     const token = authHelpers.generateTokenObject('reset_token', 'reset_token_expiration')
    //     const instance = await validatePasswordResetRequest(payload)
    //     // Get the user by "username" or "emails"
    //     const user = await User.query(trx)
    //       .where({
    //         username: instance.usernameOrEmail,
    //         active: true
    //       })
    //       .orWhere({
    //         email: instance.usernameOrEmail,
    //         active: true
    //       })
    //       .first()
    //       .throwIfNotFound()
    //
    //       // We have a token and it has not expired
    //     if (user.reset_token && user.reset_token_expiration && moment(user.reset_token_expiration).isAfter(Date.now())) {
    //       const error = new Error('We have already sent steps to change your password. Please check your email.')
    //       error.status = 400
    //       throw error
    //     }
    //     // send email with reset link
    //     // db.raw is used here because knex/objection struggle with mySQL date-time format.
    //     // The reset_token_expiration expiration string being passed works in raw SQL but not in.patch or .update methods.
    //     return User.raw(`UPDATE users SET reset_token='${token.reset_token}', reset_token_expiration='${token.reset_token_expiration}' WHERE id=${user.id} AND active=true;`)
    //       .then(() => {
    //         User.raw(`SELECT reset_token FROM users WHERE id=${user.id};`)
    //           .then((tokenValue) => {
    //             let token = tokenValue[0][0].reset_token
    //             return emailHelpers.sendResetPasswordEmail(user.username, user.email, token)
    //           })
    //       })
    //   })
    // },
    updatePassword: async function (options, id) {
      const authHelpers = require('../utils/authHelpers')
      return transaction(User.knex(), async (trx) => {
        const result = await validateUpdatePassword(options)

        const user = await User.query()
          .where({
            active: true,
            id
          })
          .first()
          .throwIfNotFound()
        if (!authHelpers.validPassword(result.currentPassword, user.password)) {
          const error = new Error('Incorrect current password')
          error.status = 400
          throw error
        }

        const newPasswordHash = authHelpers.generateHash(result.newPassword)

        return User.query()
          .where({
            id: id,
            active: true
          })
          .patch({
            password: newPasswordHash
          })
          .returning(User.publicColumns)
          .first()
          .throwIfNotFound()
      })
    },

    updateProfile: async function (payload, id) {
      const updateInstance = await validateUpdateProfile(payload)

      return User.query()
        .where({
          active: true,
          id: id
        })
        .patch(updateInstance)
        .returning(User.publicColumns)
        .first()
        .throwIfNotFound()
    },

    get: async (id) => {
      return User.query()
        .where({
          id,
          active: true
        })
        .select(User.publicColumns)
        .first()
        .throwIfNotFound()
    },

    // Functions used by passport.js only
    passport: {

      findByUsername: async function (username) {
        return User.query()
          .where({
            active: true,
            username: username
          })
          .first()
          .throwIfNotFound()
      },

      findById: async function (id) {
        return User.query()
          .where({
            active: true,
            id: id
          })
          .first()
          .throwIfNotFound()
      }
    }

  }
}
