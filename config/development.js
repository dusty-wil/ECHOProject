'use strict';

module.exports = {
  message: 'DEVELOPMENT ENVIRONMENT',
  default_base_url: 'http://127.0.0.1:3000',
  jwt_secret: 'whydidtheycanceltheexpansegrr',
  logger: {
    debug: 'app*',
    console: {
      level: 'debug'
    }
  }
};
