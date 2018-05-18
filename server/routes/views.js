'use strict'

const isLoggedIn = require('../utils/authHelpers').isLoggedIn

module.exports = function (app) {
  app.get('/', isLoggedIn, (req, res, next) => {
    const userMessages = []
    const layoutParams = {
      messages: userMessages
    }
    if (req.user && req.cookies.jwt) {
      res.render('auth', layoutParams)
    } else {
      res.render('unauth', layoutParams)
    }
  })
}
