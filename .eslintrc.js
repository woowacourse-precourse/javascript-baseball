module.exports = {
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true,
  },
  plugins: ["prettier"],
  extends: ["airbnb-base", "plugin:prettier/recommended", "prettier"],
  rules: {
    endOfLine: "auto",
  },
};
