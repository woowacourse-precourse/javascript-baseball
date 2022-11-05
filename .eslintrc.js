module.exports = {
  env: {
    node: true,
    commonjs: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "2019",
  },
  rules: {
    indent: ["error", 2],
    "max-depth": ["error", 2],
    "no-await-in-loop": "allow",
  },
  overrides: [
    {
      files: "__tests__/*",
      env: {
        jest: true,
      },
    },
  ],
};
