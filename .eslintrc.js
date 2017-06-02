module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      modules: true
    }
  },
  plugins: [
     "react"
  ],
  extends: [
    'eslint:recommended'
  ],
  env: {
    'node': true,
    'es6': true,
  },
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "15.0"
    }
  },
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    'no-undef': 'warn',
    'newline-before-return': 'error',
    'indent': ['error', 2, {'SwitchCase': 1}]
  }
};
