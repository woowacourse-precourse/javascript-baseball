module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "max-depth": ["error", 2],
    "max-lines-per-function": ["error", 15],
    "spaced-comment": ["error", "always"],
    "no-new": "off",
    "no-alert": "off",
    "no-console": "off",
    "no-plusplus": "off",
  },
};
