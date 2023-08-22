module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
        warnOnUnsupportedTypeScriptVersion: false,
    },
    plugins: ['@typescript-eslint', 'jsdoc'],
    rules: {
    },
    settings: {
        jsdoc: {
        },
    },
};
