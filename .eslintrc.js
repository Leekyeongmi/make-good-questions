module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb',
        'prettier',
        'plugin:prettier/recommended',
        'react-app',
    ],
    rules: {
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx'] },
        ],
        'prettier/prettier': [
            'error',
            { singleQuote: false, endOfLine: 'auto' },
        ],
    },
};
