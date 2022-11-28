module.exports = {
  env: {
    node: true,
    commonjs: trus,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  extends: ['airbnb', 'plugin:jsdoc/recommended'],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'max-depth': ['error', 2],
    'max-lines-per-function': ['error', 10],

    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',
  },
  overrides: [
    {
      files: ['__test__/**/*.js'],
      rules: { 'max-lines-per-function': 'off', 'no-new': 'off' },
    },
  ],
};
