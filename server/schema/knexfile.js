const config = require('../../config/main')
const path = require('path')

module.exports = {
  testing: {
    client: 'mysql',
    connection: config.db,
    migrations: {
      directory: path.join(__dirname, 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'seeds')
    }
  },

  development: {
    client: 'mysql',
    connection: config.db,
    migrations: {
      directory: path.join(__dirname, 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'seeds')
    }
  },

  staging: {

  },

  production: {

  }
}
