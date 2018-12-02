const express = require('express')
const path = require('path')
// const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const passport = require('passport')
const config = require('../config/main')
const helmet = require('helmet')
const app = express()
const server = require('http').Server(app)

app.use(helmet())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(passport.initialize())

if (config.isProduction()) {
  app.set('trust proxy', 1)
}

require('./passport')(passport)
require('./routes/index')(app, passport)

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})

process.env.SENDGRID_API_KEY = ''

module.exports = { app, server }
