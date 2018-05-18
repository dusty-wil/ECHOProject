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
