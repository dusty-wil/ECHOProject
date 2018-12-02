const controller = require('./controller')
const { NotFoundError } = require('objection')
const User = controller()

module.exports = function (router) {
  router.put('/users/me/changePassword', function (req, res, done) {
    User.updatePassword(req.body, req.user.id, req.user.password)
      .then(function (user) {
        res.json(user)
      }).catch(done)
  })

  router.put('/users/me/profile', function (req, res, done) {
    User.updateProfile(req.body, req.user.id)
      .then(function (user) {
        res.json(user)
      }).catch(done)
  })

  router.get('/users/me', function (req, res, done) {
    User.get(req.user.id)
      .then(user => res.json(user)).catch(done)
  })

  router.get('/users/byId', function (req, res, done) {
    User.get(req.query.id)
      .then(user => res.json(user))
      .catch(done)
  })

  router.post('/users/forgotPassword', function (req, res, done) {
    User.resetTokenFor(req)
      .then((result) => res.json(result))
      .catch(function (e) {
        res.json({ 'error': e.toString() })
      })
      .catch(done)
  })

  router.post('/users/resetPassword', function (req, res, done) {
    console.log('router users resetPassword')
    console.log(req.body)
    var errors = []

    if (req.body.password !== req.body.passwordConf) {
      errors.push('Passwords do not match. Please check your passwords and try again.')
    }
    if (req.body.password.length < 8) {
      errors.push('Your password must be at least 8 characters long')
    }

    var hasUC = false
    var hasNum = false
    var i = 0

    while (i < req.body.password.length) {
      var c = req.body.password.charAt(i)
      if (!isNaN(parseInt(c, 10))) {
        hasNum = true
      } else if (c === c.toUpperCase() && isNaN(parseInt(c, 10))) {
        hasUC = true
      }
      i++
    }

    if (!hasUC || !hasNum) {
      errors.push(
        'Your password does not meet the minimum requirements. Please pick another password.'
      )
    }

    if (!req.body.token || req.body.token == '') {
      errors.push('Bad token')
    }

    if (errors.length <= 0) {
      Promise.resolve()
        .then(() => User.verifyResetToken(req.body.token))
        .then((verifyRes) => {
          User.updatePasswordViaToken(req.body)
            .then((result) => {
              res.json(result)
            })
            .catch(done)
        })
        .catch(function (e) {
          if (e instanceof NotFoundError) {
            errors.push('Bad token')
            res.json({ 'error' : errors })
          }
        })
        .catch(done)
    } else {
      res.json({ 'error' : errors })
    }
  })
}
