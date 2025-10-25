module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
    '../../../../libs/eslint-plugin-rgaa-html/dist/index.js',
  ],
  rules: {
    'rgaa-html/rgaa-1-1': 'error',
  },
  settings: {
    'rgaa-html': {
      // Configuration spécifique au plugin RGAA HTML
    }
  }
};
