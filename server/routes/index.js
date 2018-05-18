module.exports = function (app, passport) {
  require('./views')(app)
  require('./accessControl')(app, passport)
  require('./api')(app)
}
