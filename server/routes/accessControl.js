
const Users = require('../users')
const jwt = require('jsonwebtoken')
const config = require('../../config/main')
const Logger = require('../utils/logger').Logger
const log = Logger('app:accessControl:passport')

module.exports = function (app, passport) {
  app.post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
      if (err || !user) {
        res.render('unauth', {messages: ['Login Failed']})
      } else {
        const jwtToken = jwt.sign(user.toJSON(), config.jwt_secret)
        res.cookie('jwt', jwtToken, {maxAge: 5400000, httpOnly: true})
        res.redirect(`/`)
      }
    })(req, res)
  })

  app.get('/logout', function (req, res) {
    // logout() is a function added by Passport's middleware
    res.clearCookie('jwt')
    req.logout()
    res.redirect('/')
  })

  // Used by back-end cluster to communicate
  app.post('/auth/login', passport.authenticate('local', { failureRedirect: '/auth/failure', session: false }),
    (req, res) => {
      return res.send('Authenticated!')
    })

  app.get('/auth/failure', (req, res) => {
    let errorMessage = 'Login attempt failed, please check your credentials and try again.'
    res.status(403).send(errorMessage)
  })

  app.get('/auth/logout', function (req, res) {
    res.clearCookie('jwt')
    req.logout()
    return res.send('Logged Out!')
  })

//   app.get('/users/passwordReset', function (req, res, done) {
//     const controller = Users.controller()
//     return controller.verifyResetToken(req.query)
//       .then(function () {
//         res.redirect(`/#/passwordReset?token=${req.query.token}`)
//       })
//       .catch(function () {
//         res.redirect('/#/passwordReset/invalid_token')
//       })
//   })
//
//   app.post('/users/passwordReset', function (req, res, done) {
//     const controller = Users.controller()
//     return controller.updatePasswordViaToken(req.body)
//       .then(function (user) {
//         res.redirect('/')
//       })
//       .catch((err) => {
//         log.error(`Reset Password Error: ${err.message}\n\t ${err.stack}`)
//         // If we have `token` we can go back to the password reset page.
//         // Otherwise we just go back to the beginning, forgot password
//         if (req.body.token) {
//           res.redirect(`/#/passwordReset?token=${req.body.token}`)
//         } else {
//           res.redirect('/#/forgot_password')
//         }
//       })
//   })
//
//   app.post('/users/passwordReset/request', (req, res, done) => {
//     const controller = Users.controller()
//     return controller.resetTokenFor(req.body)
//       .then(function () {
//         res.redirect('/#/passwordReset/check_email')
//       })
//       .catch((err) => {
//         log.error(`Reset Password Request Error: ${err.message}\n\t ${err.stack}`)
//         res.redirect('/#/forgot_password')
//       })
//   })
}
