'use strict'
const moment = require('moment')
const sgMail = require('@sendgrid/mail')
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
    verifyResetToken: async function (payload) {
      return User.query()
        .select(User.publicColumns)
        .where({reset_token: payload})
        .andWhere('reset_token_expiration', '>', moment().format('YYYY-MM-DD HH:mm:ss'))
        .first()
        .throwIfNotFound()
    },

    updatePasswordViaToken: async function (payload) {
      const authHelpers = require('../utils/authHelpers')
      return User.query()
        .patch({
          password: authHelpers.generateHash(payload.password),
          reset_token: null,
          reset_token_expiration: null
        })
        .where({
          reset_token: payload.token
        })
    },

    resetTokenFor: async function (payload) {
      const authHelpers = require('../utils/authHelpers')
      const username = payload.body.username
      const host = payload.headers.host

      if (!username || username == '' || typeof username == 'undefined') {
        const error = new Error('Username is missing. Please try subitting a reset request again.')
        error.status = 400
        throw error
      }

      return transaction(User.knex(), async (trx) => {
        const token = authHelpers.generateTokenObject('reset_token', 'reset_token_expiration')
        // Get the user by "username" or "emails"
        const user = await User.query(trx)
          .where({
            username: username,
            active: true
          })
          .orWhere({
            email: username,
            active: true
          })
          .first()
          .throwIfNotFound()

          // We have a token and it has not expired
        if (user.reset_token && user.reset_token_expiration && moment(user.reset_token_expiration).isAfter(Date.now())) {
          const error = new Error(
            'An email with instructions to change your password has already been sent. '
            + 'Please check your email, and ensure the email was not marked as spam.'
          )
          error.status = 400
          throw error
        }
        // send email with reset link
        // db.raw is used here because knex/objection struggle with mySQL date-time format.
        // The reset_token_expiration expiration string being passed works in raw SQL but not in.patch or .update methods.
        return User.raw(`UPDATE users SET reset_token='${token.reset_token}', reset_token_expiration='${token.reset_token_expiration}' WHERE id=${user.id} AND active=true;`)
          .then(() => {
            User.raw(`SELECT reset_token FROM users WHERE id=${user.id};`)
              .then((tokenValue) => {
                let token = tokenValue[0][0].reset_token
                return this.sendResetPasswordEmail(user.username, user.email, host, token)
              })
          })
      })
    },

    sendResetPasswordEmail: async function (username, email, host, token) {
      process.env.SENDGRID_API_KEY='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'
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: email,
        from: 'resetpassword@digitalstoriesarchive.com',
        subject: 'Password Reset Request for Digital Stories Archive',
        text: 'You\'re receiving this email because you (or someone pretending to be you) '
          + 'requested the password for the Digital Stories Archive to be reset.\n'
          + 'If you did, in fact, initiate this request, please follow the link below to '
          + 'reset your password.\n\n'
          + 'http://' + host + '/#/reset/' + token + '\n\n'
          + 'Otherwise, please disregard this message and the link will expire in one hour.\n\n'
          + 'Thanks!\n'
          + 'Digital Stories Archive Support'
      };
      sgMail.send(msg);
    },

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
