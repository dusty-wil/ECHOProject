// Linting Rules:
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {           // These set relevant global variables to the eslint ignore
    browser: true, // e.g. for browser, 'window' and 'document' aren't considered
    mocha: true,   // undefined variables.
    node: true,
    jquery: true,
    es6: true
  },
  plugins: [
    'html'
  ],
  extends: 'standard',
  rules: {
    // this is silly. sometimes i want to do interp / eqeq.
    'eqeqeq': 0, 
    // setting to 1 means 'warn'
    'no-unused-vars': 1,
    'no-trailing-spaces': 1,
    'quotes': 1,
    'comma-dangle': 1,
    'comma-spacing': 1,
    'space-before-function-paren': 1,
    'indent': 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  overrides: [
    {
      files: '*.spec.js',
      rules: {
        'no-unused-expressions': 'off' // This is for Chai's should and expect. Unfortunately there isn't an env for Chai
      }
    },
    {
      files: 'main.js',
      rules: {
        'no-new': 'off' // new Vue isn't a side effect but eslint doesn't know that
      }
    }
  ]
}
