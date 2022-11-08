module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'max-depth': ['error', 2],
    'max-lines-per-function': ['error', 15],
    'spaced-comment': ['error', 'always'],
    'no-new': 'off',
    'no-alert': 'off',
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'lines-between-class-members': 'off',
    'no-throw-literal': 'off',
    'no-await-in-loop': 'off',
  },
};
