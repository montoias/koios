module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      'experimentalObjectRestSpread': true,
      'jsx': true
    }
  },
  extends: [
    'eslint:recommended'
  ],
  env: {
    'node': true,
    'es6': true,
  },
  rules: {
    'no-undef': 'warn',
    'newline-before-return': 'error',
    'indent': ['error', 2, {'SwitchCase': 1}]
  }
};
