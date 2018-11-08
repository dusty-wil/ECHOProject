const router = require('express').Router()
const config = require('../../config/main')
const isLoggedIn = require('../utils/authHelpers').isLoggedIn
const Logger = require('../utils/logger').Logger
const log = Logger('app:echo:api')

// Modules
const modules = [
  'users',
  'stories',
  'themes',
  'subjects',
  'categories',
  'names',
  'locations',
  'periods'
]

module.exports = function (app, passport) {
  // Apply JWT Check
  // Snag the token out of local storage and use for all API requests.

  // Add API Routes
  modules.forEach(m => {
    router.use(`/${m}*`, isLoggedIn)
    const mInstance = require(`../${m}`)
    mInstance.routes(router)
  })

  // Catch All Other Routes
  router.all('/*', function (req, res, done) {
    const error = new Error('API Route Not Found')
    error.status = 404
    throw error
  })

  // Apply namespace to everything defined in api.
  // Example: /projects ==> /api/v1/projects
  app.use(`/api/${config.api_version}`, router)

  router.use(function (err, req, res, next) {
    if (err) {
      log.error(err)
    }

    const status = err.status || 500
    res.status(status)

    if (status >= 500) {
      return res.json({
        error: {
          message: 'Server Error'
        }
      })
    } else {
      return res.json({
        error: {
          message: err.message
        }
      })
    }
  })
}
