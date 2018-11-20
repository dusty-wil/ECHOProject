'use strict'

const defaultConfig = {
  message: 'Hello from Default Config',
  db: {
    database: process.env.MYSQL_DATABASE || 'echo',
    user: process.env.MYSQL_USER || 'echoadmin',
    password: process.env.MYSQL_PASSWORD || 'badpassword',
    host: process.env.MYSQL_HOST || 'echo-db.cvtwolzxwhhb.us-east-2.rds.amazonaws.com',
    port: process.env.DB_PORT || '3306'
  },
  api_version: 'v1'
}

const nodeEnv = process.env.NODE_ENV || 'development'

const envConfig = require(`./${nodeEnv}.js`)

const config = Object.assign({nodeEnv}, defaultConfig, envConfig)

config.isProduction = () => nodeEnv === 'production'

module.exports = config
