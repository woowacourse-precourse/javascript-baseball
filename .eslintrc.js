module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 14,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
  },
};
