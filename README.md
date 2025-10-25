# eslint-plugin-rgaa

Le projet à pour but de créer un linter pour valider les critères du Référentiel Générale d'Amélioration de l'Accessibilité ou RGAA.

Ce répository est un monorepo qui utilise :
- Turbo pour le build et lancer les tests
- Changeset pour la génération et publication (depuis GitHub avec changeset-bot) des librairies dans NPM.

Le module principal est découpé en plusieurs librairies interdépendantes :

### Libraries principales (dans `libs/`)
- **`eslint-plugin-rgaa-core`** : Library core contenant le code lint principal pour résoudre les critères du RGAA et les classes utilitaires (matcher des attributs, des balises, etc.)
- **`eslint-plugin-rgaa-html`** : Plugin ESLint pour appliquer les critères RGAA au langage HTML/JSX

### Libraries de test (dans `tests/`)
- **`eslint-plugin-rgaa-test`** : Library de test autonome pour valider les règles RGAA
- **`eslint-plugin-rgaa-ide`** : Exemples IDE pour tester le plugin RGAA directement dans l'éditeur

### Workspaces
- **`tests/`** : Workspace de test indépendant utilisant les libraries de test

Ce projet contient aussi une documentation sur le RGAA et sur ce linter. Elle permet notamment d'indiquer dans les erreurs ou alerte lint un lien vers cette documentation. Cette documentation sera publiée sur GitHub Pages du repository.

## 📚 Documentation

- **[Guide d'installation](doc/usage/installation.md)** - Installation du plugin
- **[Guide de configuration](doc/usage/configuration.md)** - Configuration détaillée
- **[Exemples de configuration](doc/examples/)** - Exemples pratiques
- **[Critères RGAA implémentés](doc/rgaa/criteres/)** - Documentation des critères

## 🚀 Démarrage rapide

```bash
npm install --save-dev eslint-plugin-rgaa-html
```

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

## 🛠️ Développement

Pour la documentation technique et le développement, voir [DEVELOPMENT_NOTES.md](DEVELOPMENT_NOTES.md).

## 📋 Critères RGAA implémentés

- **RGAA 1.1** : Présence d'alternatives textuelles (8 tests)
- **RGAA 1.2** : Images décoratives (6 tests)  
- **RGAA 1.3** : Pertinence des alternatives (9 tests)

## 🧪 Tests

Le projet inclut une suite de tests complète :

```bash
# Tests complets
pnpm test

# Test d'un critère spécifique
pnpm test:1.1

# Test des exemples IDE
cd tests/eslint-plugin-rgaa-ide/examples
npx eslint jsx/1.1/example-with-issues.jsx
```

## 📦 Installation pour le développement

```bash
# Installation des dépendances
pnpm install

# Build du projet
pnpm build

# Tests
pnpm test
```

## 🔧 Configuration

### Niveaux par défaut

- **RGAA 1.1** (Présence d'alternatives) : `error` - Bloquant
- **RGAA 1.2** (Images décoratives) : `error` - Bloquant  
- **RGAA 1.3** (Pertinence des alternatives) : `warn` - Suggestion

### Options disponibles

- `minLength` : Longueur minimale des alternatives (défaut: 25)
- `documentationUrl` : URL de documentation personnalisée

Voir [doc/usage/configuration.md](doc/usage/configuration.md) pour plus de détails.

## 📄 Licence

MIT