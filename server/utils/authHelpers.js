const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const moment = require('moment')
const config = require('../../config/main')
const jwt = require('jsonwebtoken')
const Users = require('../users/')
module.exports = {
  isLoggedIn (req, res, next) {
    let userCandidate
    if (req.body.jwt) {
      userCandidate = jwt.verify(req.body.jwt, config.jwt_secret)
    } else if (req.cookies.jwt) {
      userCandidate = jwt.verify(req.cookies.jwt, config.jwt_secret)
    }
    if (userCandidate && userCandidate.id) {
      Users.controller().passport.findById(userCandidate.id)
        .then((user) => {
          if (user.password === userCandidate.password) {
            req.user = userCandidate
            next()
          } else {
            next()
          }
        })
        .catch((error) => {
          res.status(401).json(error.name)
        })
    } else {
      next()
    }
  },

  generateHash (password) {
    const rounds = 10
    return bcrypt.hashSync(password, bcrypt.genSaltSync(rounds), null)
  },

  validPassword (password, hash) {
    return bcrypt.compareSync(password, hash)
  },

  generateTokenObject (tokenKey, expirationKey) {
    const ret = {}
    ret[tokenKey] = crypto.randomBytes(20).toString('hex')
    ret[expirationKey] = moment().add(1, 'd').format('YYYY-MM-DD HH:mm:ss')
    return ret
  }
}
