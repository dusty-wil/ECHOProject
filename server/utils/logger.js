const winston = require('winston')

const config = require('../../config/main')

/**
 * Configures the winston logger. There are also file and remote transports available
 */
const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: config.logger.console.level,
      timestamp: config.isProduction(),
      handleExceptions: config.isProduction(),
      json: config.isProduction(),
      colorize: !config.isProduction()
    })
  ],
  exitOnError: false
})

const stream = (streamFunction) => ({
  'stream': streamFunction
})

const write = (writeFunction) => ({
  write: (message) => writeFunction(message)
})

/**
 * Winston logger stream for the morgan plugin
 */
const winstonStream = stream(write(logger.info))

// Configure the debug module
process.env.DEBUG = config.logger.debug
// imports debug moduel
const Debug = require('debug')
const debug = Debug('app:response')

/**
 * Debug stream for the morgan plugin
 */
const debugStream = stream(write(debug))

/**
 * Exports a wrapper for all the loggers we use in this configuration
 */
const format = (scope, message) => `[${scope}] ${message}`

const parse = (args) => (args.length > 0) ? args : ''

const Logger = (scope) => {
  const scopeDebug = Debug(scope)
  return {
    debug: (message, ...args) => {
      if (config.isProduction()) {
        logger.debug(format(scope, message), parse(args))
      }
      scopeDebug(message, parse(args))
    },
    verbose: (message, ...args) => logger.verbose(format(scope, message), parse(args)),
    silly: (message, ...args) => logger.silly(format(scope, message), parse(args)),
    info: (message, ...args) => logger.info(format(scope, message), parse(args)),
    warn: (message, ...args) => logger.warn(format(scope, message), parse(args)),
    error: (message, ...args) => logger.error(format(scope, message), parse(args))
  }
}

module.exports = {
  winstonStream,
  debugStream,
  Logger
}
