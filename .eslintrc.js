module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["prettier/@typescript-eslint"],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["prettier"],
    env: {
        es6: true,
        node: true
    }
};
