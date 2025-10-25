# Surcharges locales

Exemple de surcharge des règles pour un projet spécifique.

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
      
      // Surcharges locales du projet
      'rgaa-html/rgaa-1-1': 'error',   // Garde le niveau error
      'rgaa-html/rgaa-1-2': 'warn',    // Change de error à warn pour ce projet
      'rgaa-html/rgaa-1-3': ['warn', { minLength: 50 }], // Change la longueur minimale
    }
  }
];
```

## Surcharges appliquées

### Niveaux de règle modifiés

- **RGAA 1.1** : Reste en `error` (bloquant)
- **RGAA 1.2** : Changé de `error` à `warn` (suggestion)
- **RGAA 1.3** : Reste en `warn` mais avec `minLength: 50`

### Pourquoi ces surcharges ?

- **RGAA 1.2 en `warn`** : Pour ce projet, les images décoratives ne sont pas critiques
- **RGAA 1.3 avec `minLength: 50`** : Ce projet nécessite des descriptions plus détaillées

## Installation

```bash
npm install --save-dev eslint-plugin-rgaa-html @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## Fichier de configuration

Vous pouvez télécharger ce fichier : [local-overrides.js](./local-overrides.js)
