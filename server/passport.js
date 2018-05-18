const LocalStrategy = require('passport-local').Strategy
const authHelpers = require('./utils/authHelpers')
const Logger = require('./utils/logger').Logger
const log = Logger('app:hologram:passport')
const Users = require('./users/')

module.exports = (passport) => {
  const controller = Users.controller()

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    controller.passport.findById(id)
      .then((user) => {
        return done(null, user)
      })
      .catch((err) => {
        log.error(err)
        return done(null, false)
      })
  })

  passport.use(new LocalStrategy({
    passReqToCallback: true,
    session: false
  },
  (req, username, password, done) => {
    const userErrorMessage = 'There was a problem with your login, please try again.'
    Users.model.validateLogin(req.body)
      .then((instance) => {
        return controller.passport.findByUsername(username)
      })
      .then((user) => {
        if (!authHelpers.validPassword(password, user.password)) {
          throw new Error('Incorrect Login!')
        }
        return done(null, user)
      })
      .catch((err) => {
        log.error(err)
        return done(null, false, userErrorMessage)
      })
  }))
}
