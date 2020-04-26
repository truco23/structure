module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'arrow-body-style': ['error', 'always'],
    'react/jsx-one-expression-per-line': [true, { allow: 'none' }],
    'comma-dangle': ['error', 'never'],
    'function-name': false,
    'variable-name': false,
    'import-name': false,
    'no-increment-decrement': false,
    'ter-arrow-parens': [true, 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'react/jsx-first-prop-new-line': 'multiline-multiprop',
    'react/jsx-one-expression-per-line': 'off',
    // 'trailing-comma': [
    //   true,
    //   {
    //     singleline: 'never',
    //     multiline: {
    //       objects: 'never',
    //       arrays: 'never',
    //       functions: 'never',
    //       typeLiterals: 'ignore',
    //     },
    //   },
    // ],
  },
};
