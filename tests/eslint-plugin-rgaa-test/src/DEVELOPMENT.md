# Guide de développement des tests

Ce guide explique comment développer et maintenir les tests du plugin ESLint RGAA.

## Structure des tests

```
tests/
├── criteria/                    # Tests organisés par critère RGAA
│   ├── 1.1/                    # Critère 1.1 - Images porteuses d'information
│   │   ├── valid/              # Cas valides (ne doivent PAS générer d'erreurs)
│   │   ├── invalid/            # Cas invalides (DOIVENT générer des erreurs)
│   │   └── README.md           # Documentation du critère
│   └── X.Y/                    # Autres critères
├── utils/                      # Utilitaires partagés
│   ├── test-runner.js          # Classe principale pour exécuter les tests
│   └── eslint-config.js        # Configuration ESLint pour les tests
├── templates/                  # Templates pour nouveaux critères
│   └── criterion-template.md   # Template README pour nouveaux critères
├── add-criterion.js            # Script pour créer un nouveau critère
└── run-tests.js               # Point d'entrée principal
```

## Ajout d'un nouveau critère

### 1. Créer la structure

```bash
node tests/add-criterion.js 1.2
```

Cela crée :
- `tests/criteria/1.2/`
- `tests/criteria/1.2/valid/`
- `tests/criteria/1.2/invalid/`
- `tests/criteria/1.2/README.md`
- Fichiers d'exemple

### 2. Développer la règle

Dans `libs/eslint-plugin-rgaa-core/src/rules/` :
- Créer `rgaa-1-2.ts`
- Exporter la règle dans `rules/index.ts`

### 3. Ajouter la règle au plugin HTML

Dans `libs/eslint-plugin-rgaa-html/src/index.ts` :
- Importer la nouvelle règle
- L'ajouter à l'objet `rules`

### 4. Mettre à jour la configuration de test

Dans `tests/utils/eslint-config.js` :
- Ajouter la règle dans `rules`

### 5. Créer les cas de test

#### Cas valides (`valid/`)
Fichiers qui ne doivent PAS générer d'erreurs ESLint.

```jsx
// valid/example.jsx
import React from 'react';

function ValidExample() {
  return (
    <div>
      {/* Code valide selon le critère */}
    </div>
  );
}
```

#### Cas invalides (`invalid/`)
Fichiers qui DOIVENT générer des erreurs ESLint.

```jsx
// invalid/example.jsx
import React from 'react';

function InvalidExample() {
  return (
    <div>
      {/* Code invalide selon le critère */}
    </div>
  );
}
```

### 6. Tester

```bash
# Test du critère spécifique
npm run test:criterion 1.2

# Tous les tests
npm run test

# Mode verbose
npm run test:verbose
```

## Conventions de nommage

### Fichiers de test
- `kebab-case.jsx` pour les noms de fichiers
- Noms descriptifs : `image-without-alt.jsx`, `button-without-label.jsx`

### Messages d'erreur
- Utiliser des `messageId` en `camelCase`
- Messages en français
- Messages clairs et actionables

### Documentation
- README.md par critère avec description complète
- Exemples de code valide/invalide
- Liste des messages d'erreur

## Bonnes pratiques

### Tests valides
- Couvrir tous les cas d'usage valides
- Inclure les cas limites (edge cases)
- Tester les attributs optionnels

### Tests invalides
- Un fichier par type d'erreur
- Cas d'erreur typiques
- Cas d'erreur complexes

### Messages d'erreur
- Expliquer le problème
- Proposer une solution
- Inclure un lien vers la documentation RGAA

## Débogage

### Mode verbose
```bash
npm run test:verbose
```

### Test d'un fichier spécifique
```bash
npx eslint path/to/file.jsx --config tests/utils/eslint-config.js
```

### Vérification de la configuration
```bash
npx eslint --print-config path/to/file.jsx --config tests/utils/eslint-config.js
```

## Intégration continue

Les tests sont automatiquement exécutés :
- À chaque commit
- Sur les pull requests
- Avant la publication

Assurez-vous que tous les tests passent avant de soumettre du code.
