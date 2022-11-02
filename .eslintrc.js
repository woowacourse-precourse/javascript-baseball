module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        mocha: true
    },
    extends: ['eslint:recommended','airbnb-base','prettier'],
    plugins: ['prettier'],
    rules: {
        'import/prefer-default-export': 'off',
        'import/extensions': ['off'],
        "class-methods-use-this": "off",
        "no-alert": "off",
        "array-callback-return": "off",
        'max-len': ["error",{"code":100}],
    }
}