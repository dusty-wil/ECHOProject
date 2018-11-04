const config = require('../config/main');
const knexfile = require('./schema/knexfile.js');

let existingConnection = null;

module.exports = () => {
  if (existingConnection) {
    return existingConnection;
  }
  existingConnection = require('knex')(knexfile[config.nodeEnv]);
  return existingConnection;
};
