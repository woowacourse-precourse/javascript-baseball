module.exports = {
  env: {},
  extends: [
    'plugin:prettier/recommended',
    'airbnb-base',
    'eslint-config-prettier',
    'prettier',
  ],
  plugins: ['prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'class-methods-use-this': 'off',
  },
};
