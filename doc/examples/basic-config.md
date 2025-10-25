# Configuration de base

Configuration minimale pour commencer rapidement avec le plugin ESLint RGAA.

## Code de configuration

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

## Installation

```bash
npm install --save-dev eslint-plugin-rgaa-html
```

## Utilisation

1. Créez un fichier `eslint.config.js` à la racine de votre projet
2. Copiez le code de configuration ci-dessus
3. Lancez ESLint sur vos fichiers

```bash
npx eslint src/
```

## Règles activées

Cette configuration active toutes les règles RGAA avec leurs niveaux par défaut :

- **RGAA 1.1** : Présence d'alternatives textuelles (`error`)
- **RGAA 1.2** : Images décoratives (`error`)
- **RGAA 1.3** : Pertinence des alternatives (`warn`)

## Fichier de configuration

Vous pouvez télécharger ce fichier : [basic-config.js](./basic-config.js)
