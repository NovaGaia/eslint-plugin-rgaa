# Configurations ESLint

Ce dossier contient toutes les configurations ESLint utilisées par la library de test.

## Fichiers de configuration

### Configuration principale
- **`eslint-config.js`** - Configuration principale utilisée par le test runner
- **`eslint-config-main.js`** - Configuration alternative (ancienne configuration principale)

### Configurations d'exemple
- **`.eslintrc.example.js`** - Exemple de configuration pour les utilisateurs
- **`.eslintrc.simple.js`** - Configuration simple avec plugin RGAA
- **`.eslintrc.rgaa.flat.js`** - Configuration flat avec plugin RGAA

### Configurations de test
- **`.eslintrc.test.js`** - Configuration pour les tests
- **`.eslintrc.test-plugin.js`** - Configuration pour tester un plugin personnalisé
- **`.eslintrc.flat.js`** - Configuration flat pour les tests

## Utilisation

La configuration principale (`eslint-config.js`) est utilisée automatiquement par le test runner. Les autres configurations sont disponibles comme exemples ou pour des cas d'usage spécifiques.

## Chemins

Toutes les configurations pointent vers les libraries dans `libs/` via des chemins relatifs :
- `../../../../libs/eslint-plugin-rgaa-html/dist/index.js`

