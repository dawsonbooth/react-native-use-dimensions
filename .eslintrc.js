module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["plugin:prettier/recommended", "prettier/@typescript-eslint"],
    plugins: ["prettier"],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    rules: {
        "prettier/prettier": "warn"
    },
    env: {
        es6: true,
        node: true
    }
};
