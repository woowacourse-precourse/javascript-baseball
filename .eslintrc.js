module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "class-methods-use-this": "off",
    "no-await-in-loop": "off",
    "no-restricted-globals": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        bracketSpacing: true,
        printWidth: 80,
        semi: true,
        trailingComma: "all",
        tabWidth: 2,
      },
    ],
  },
};
