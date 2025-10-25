# Options personnalisées

Configuration avec options personnalisées (longueur minimale, URL de documentation).

## Code de configuration

```javascript
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const rgaaHtmlPlugin = require('eslint-plugin-rgaa-html');

module.exports = [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        React: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'rgaa-html': rgaaHtmlPlugin,
    },
    rules: {
      // Règles TypeScript
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      
      // Configuration RGAA par défaut
      ...rgaaHtmlPlugin.configs.recommended.rules,
      
      // Configuration avec options personnalisées
      'rgaa-html/rgaa-1-3': ['warn', { 
        minLength: 30,  // Longueur minimale personnalisée (défaut: 25)
      }],
    }
  }
];
```

## Options disponibles

### `minLength` - Longueur minimale des alternatives

```javascript
'rgaa-html/rgaa-1-3': ['warn', { 
  minLength: 30  // Longueur minimale personnalisée
}]
```

### `documentationUrl` - URL de documentation personnalisée

```javascript
'rgaa-html/rgaa-1-1': ['error', {
  documentationUrl: 'https://mon-site.com/rgaa/1.1/'
}]
```

## Installation

```bash
npm install --save-dev eslint-plugin-rgaa-html @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## Fichier de configuration

Vous pouvez télécharger ce fichier : [custom-options.js](./custom-options.js)
