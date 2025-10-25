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

Ce projet contient aussi une documentation sur le RGAA et sur ce linter. Elle permet notamment d'indiquer dans les erreurs ou alerte lint un lien vers cette documentation. Cette documentation sera générée par Retype et publier dans GitHub pages du repository.

## Installation

```bash
pnpm install
```

## Développement

### Build des libraries

```bash
pnpm run build:all
```

### Développement en mode watch

```bash
pnpm run dev
```

### Nettoyage

```bash
pnpm run clean
```

## Structure du projet

```
├── libs/
│   ├── eslint-plugin-rgaa-core/     # Library core avec les règles RGAA
│   └── eslint-plugin-rgaa-html/     # Plugin ESLint pour HTML
├── doc/                             # Documentation RGAA
├── scripts/                         # Scripts utilitaires
└── tests/                          # Tests du linter
```

## Critères RGAA implémentés

### Critère 1.1 - Images porteuses d'information

**Description** : Chaque image porteuse d'information a-t-elle une alternative textuelle ?

**Règle ESLint** : `rgaa-html/rgaa-1-1`

**Exemple d'utilisation** :

```javascript
// .eslintrc.js
module.exports = {
  plugins: ['rgaa-html'],
  rules: {
    'rgaa-html/rgaa-1-1': 'error'
  }
};
```

**Exemples de violations** :

```html
<!-- ❌ Image sans attribut alt -->
<img src="logo.png">

<!-- ❌ Image avec alt vide -->
<img src="photo.jpg" alt="">

<!-- ❌ Image avec alt contenant seulement des espaces -->
<img src="banner.jpg" alt="   ">

<!-- ✅ Image correcte -->
<img src="logo.png" alt="Logo de l'entreprise">

<!-- ✅ Image décorative -->
<img src="separator.png" alt="" role="presentation">
```

## Configuration

### Configuration Flat (ESLint 9+)

Le plugin utilise la configuration flat d'ESLint 9. Utilisez le fichier `eslint.config.js` :

```javascript
const rgaaHtmlPlugin = require('./libs/eslint-plugin-rgaa-html/dist/index.js');

module.exports = [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'rgaa-html': rgaaHtmlPlugin,
    },
    rules: {
      'rgaa-html/rgaa-1-1': 'error',
    },
  },
];
```

### Utilisation

```bash
# Linter un fichier
npx eslint mon-fichier.jsx --config eslint.config.js

# Linter tout le projet
npx eslint . --config eslint.config.js
```

## Documentation

La documentation complète du RGAA est disponible dans le dossier `doc/` et sera publiée sur GitHub Pages.

## Tests

Le projet utilise un système de tests organisé par critère RGAA avec deux approches :

### 1. Library de test autonome (`eslint-plugin-rgaa-test`)

Library TypeScript/JavaScript autonome pour exécuter les tests RGAA.

```bash
# Installation
npm install eslint-plugin-rgaa-test

# Utilisation
const { TestRunner } = require('eslint-plugin-rgaa-test');
const runner = new TestRunner({ verbose: true });
runner.runAllTests();
```

### 2. Workspace de test (`tests/`)

Workspace indépendant utilisant la library de test.

```bash
# Tests via le workspace (recommandé)
npm run test:workspace

# Tests via la library directement (recommandé)
npm run test

# Tests d'un critère spécifique
npm run test:1.1

# Mode verbose
npm run test:verbose

# Ajouter un nouveau critère
cd tests && npm run add-criterion 1.2
```

**Note :** Le workspace de test peut avoir des problèmes de configuration ESLint. Il est recommandé d'utiliser les scripts principaux (`npm run test`) qui utilisent directement la library de test.

### Structure des tests

```
tests/
├── eslint-plugin-rgaa-test/    # Library de test autonome
│   ├── src/
│   │   ├── criteria/           # Tests par critère RGAA
│   │   │   ├── 1.1/           # Critère 1.1 - Images porteuses d'information
│   │   │   │   ├── valid/     # Cas valides (ne doivent pas générer d'erreurs)
│   │   │   │   ├── invalid/   # Cas invalides (doivent générer des erreurs)
│   │   │   │   └── README.md  # Documentation du critère
│   │   │   └── ...            # Autres critères
│   │   └── utils/             # Utilitaires de test et configurations ESLint
│   │       ├── eslint-config.js        # Configuration principale
│   │       ├── .eslintrc.*.js          # Configurations d'exemple
│   │       └── test-runner.js          # Test runner
│   └── dist/                  # Fichiers compilés
├── eslint-plugin-rgaa-ide/    # Library de validation IDE
└── package.json               # Workspace de test
```

## Exemples IDE

### Exemples pour l'IDE (`eslint-plugin-rgaa-ide`)

Dossier contenant des exemples HTML et JSX pour tester le plugin RGAA directement dans l'IDE.

```bash
# Naviguer vers les exemples
cd tests/eslint-plugin-rgaa-ide/examples

# Tester les exemples
npx eslint jsx/example-with-issues.jsx  # Devrait montrer 4 erreurs RGAA
npx eslint jsx/example-correct.jsx      # Aucune erreur
```

### Utilisation dans l'IDE

1. **Ouvrir les fichiers** dans VS Code, Cursor, etc.
2. **Voir les alertes** en temps réel dans l'éditeur
3. **Apprendre** les bonnes pratiques d'accessibilité

### Types d'alertes démontrées

- Image sans attribut `alt`
- Image avec `alt` vide (devrait être décorative)
- Image avec `alt` trop long
- Image avec `alt` invalide

Voir `tests/eslint-plugin-rgaa-ide/examples/` pour des exemples complets.

## Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/nouveau-critere`)
3. Ajouter les tests pour le nouveau critère
4. Commiter les changements (`git commit -am 'Ajouter le critère X.Y'`)
5. Pousser la branche (`git push origin feature/nouveau-critere`)
6. Créer une Pull Request

## Licence

MIT