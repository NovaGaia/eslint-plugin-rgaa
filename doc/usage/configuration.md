# Configuration

## Configuration de base

```javascript
const rgaaHtmlPlugin = require('eslint-plugin-rgaa-html');

module.exports = [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: { 'rgaa-html': rgaaHtmlPlugin },
    rules: { ...rgaaHtmlPlugin.configs.recommended.rules }
  }
];
```

## Configuration avec TypeScript

```javascript
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const rgaaHtmlPlugin = require('eslint-plugin-rgaa-html');

module.exports = [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'rgaa-html': rgaaHtmlPlugin,
    },
    rules: {
      ...rgaaHtmlPlugin.configs.recommended.rules,
      // Vos règles TypeScript...
    }
  }
];
```

## Options de configuration

### RGAA 1.3 - Longueur minimale des alternatives

```javascript
rules: {
  'rgaa-html/rgaa-1-3': ['warn', { 
    minLength: 30  // Longueur minimale personnalisée (défaut: 25)
  }]
}
```

### URL de documentation personnalisée

```javascript
rules: {
  'rgaa-html/rgaa-1-1': ['error', {
    documentationUrl: 'https://mon-site.com/rgaa/1.1/'
  }]
}
```

## Surcharges locales

```javascript
rules: {
  // Configuration par défaut
  ...rgaaHtmlPlugin.configs.recommended.rules,
  
  // Surcharges pour ce projet
  'rgaa-html/rgaa-1-1': 'error',   // Garde le niveau error
  'rgaa-html/rgaa-1-2': 'warn',    // Change de error à warn
  'rgaa-html/rgaa-1-3': ['warn', { minLength: 50 }], // Change la longueur
}
```
