module.exports = {
  extends: ['eslint:recommended', 'plugin:vue/recommended'],
  rules: {
    // override/add rules settings here
    'no-console': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  }
}