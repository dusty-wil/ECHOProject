'use strict'

module.exports = {
  message: 'TEST ENVIRONMENT',
  default_base_url: 'http://127.0.0.1:3000',
  jwt_secret: 'whydidtheycanceltheexpansegrr',
  logger: {
    debug: '',
    console: {
      level: 'none'
    }
  },
  db: {
    database: process.env.MYSQL_DATABASE || 'echo',
    user: process.env.MYSQL_USER || 'dev',
    password: process.env.MYSQL_PASSWORD || 'awfulPassword',
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.DB_PORT || '3306'
  }
}
