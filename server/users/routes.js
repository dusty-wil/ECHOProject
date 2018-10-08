const controller = require('./controller')
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
}
