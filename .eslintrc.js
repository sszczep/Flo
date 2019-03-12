module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'import/no-unresolved': 'off',
    'comma-dangle': ['error', 'never'],
    'keyword-spacing': 'off',
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'no-await-in-loop': 'off',
    'consistent-return': 'off'
  }
};
