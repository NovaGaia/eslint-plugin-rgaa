module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'rgaa-html',
  ],
  rules: {
    'rgaa-html/rgaa-1-1': 'error',
  },
  overrides: [
    {
      files: ['**/*.html'],
      parser: '@html-eslint/parser',
      plugins: ['@html-eslint'],
      rules: {
        // Règles HTML de base
        '@html-eslint/require-doctype': 'error',
        '@html-eslint/require-title': 'error',
        '@html-eslint/require-lang': 'error',
        // Notre règle RGAA
        'rgaa-html/rgaa-1-1': 'error',
      },
    },
  ],
};
