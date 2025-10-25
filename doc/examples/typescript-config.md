# Configuration avec TypeScript

Configuration complète avec support TypeScript et JSX.

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
    }
  }
];
```

## Installation

```bash
npm install --save-dev eslint-plugin-rgaa-html @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## Fonctionnalités

- ✅ Support TypeScript complet
- ✅ Support JSX/TSX
- ✅ Règles TypeScript recommandées
- ✅ Règles RGAA activées
- ✅ Configuration des globals Node.js et React

## Fichier de configuration

Vous pouvez télécharger ce fichier : [typescript-config.js](./typescript-config.js)
