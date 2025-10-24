# Contribuer au projet

Merci de votre intérêt pour contribuer à eslint-plugin-rgaa ! Ce guide vous aidera à comprendre comment contribuer efficacement au projet.

## 🎯 Comment contribuer

### Signaler un bug

1. Vérifiez que le bug n'a pas déjà été signalé dans les [issues](https://github.com/NovaGaia/eslint-plugin-rgaa/issues)
2. Créez une nouvelle issue avec le template "Bug Report"
3. Incluez :
   - Description détaillée du problème
   - Étapes pour reproduire
   - Code d'exemple
   - Version d'ESLint et du plugin
   - Environnement (OS, Node.js, etc.)

### Proposer une amélioration

1. Vérifiez que l'amélioration n'a pas déjà été proposée
2. Créez une nouvelle issue avec le template "Feature Request"
3. Décrivez clairement :
   - Le problème que cela résout
   - La solution proposée
   - Les cas d'usage
   - L'impact sur l'existant

### Contribuer au code

1. **Fork** le repository
2. **Clone** votre fork localement
3. **Créez** une branche pour votre fonctionnalité
4. **Développez** votre contribution
5. **Testez** vos modifications
6. **Soumettez** une Pull Request

## 🛠️ Configuration de l'environnement

### Prérequis

- Node.js 20+
- pnpm (recommandé) ou npm/yarn
- Git

### Installation

```bash
# Cloner le repository
git clone https://github.com/NovaGaia/eslint-plugin-rgaa.git
cd eslint-plugin-rgaa

# Installer pnpm (si pas déjà installé)
npm install -g pnpm

# Installer les dépendances
pnpm install

# Lancer les tests
pnpm test
```

### Structure du projet

```
eslint-plugin-rgaa/
├── libs/
│   ├── core/           # Logique principale RGAA
│   ├── html/           # Linter HTML de base
│   └── astro/          # Extensions Astro
├── tests/              # Tests unitaires
├── /rgaa/                # Documentation
└── examples/           # Exemples d'utilisation
```

## 📝 Standards de développement

### Code Style

- Utilisez Prettier pour le formatage
- Suivez les conventions ESLint du projet
- Documentez vos fonctions avec JSDoc
- Écrivez des tests pour toute nouvelle fonctionnalité

### Commits

Utilisez le format [Conventional Commits](https://www.conventionalcommits.org/) :

```
feat: add new RGAA rule for color contrast
fix: resolve false positive in alt-text rule
docs: update installation guide
test: add unit tests for heading hierarchy
```

### Tests

- **Tests unitaires** : Pour chaque règle
- **Tests d'intégration** : Pour les scénarios complexes
- **Tests de régression** : Pour éviter les régressions

```bash
# Lancer tous les tests
pnpm test

# Tests avec couverture
pnpm run test:coverage

# Tests en mode watch
pnpm run test:watch
```

## 🎨 Développement de nouvelles règles

### Structure d'une règle

```javascript
// libs/core/rules/alt-text.js
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Vérifie la présence de texte alternatif sur les images',
      category: 'RGAA',
      recommended: true,
      url: 'https://docs.example.com/rgaa/1.1'
    },
    schema: [
      {
        type: 'object',
        properties: {
          'require-description': { type: 'boolean' },
          'skip-decorative': { type: 'boolean' }
        },
        additionalProperties: false
      }
    ]
  },
  create(context) {
    return {
      // Implémentation de la règle
    };
  }
};
```

### Tests d'une règle

```javascript
// tests/rules/alt-text.test.js
const rule = require('../../libs/core/rules/alt-text');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' }
});

ruleTester.run('alt-text', rule, {
  valid: [
    '<img src="photo.jpg" alt="Description">',
    '<img src="decoration.png" alt="">'
  ],
  invalid: [
    {
      code: '<img src="photo.jpg">',
      errors: [{ messageId: 'missingAlt' }]
    }
  ]
});
```

## 📚 Documentation

### Mise à jour de la documentation

1. **Critères RGAA** : Mettez à jour `/rgaa/` si nécessaire
2. **Guide d'utilisation** : Modifiez `/rgaa/guide.md`
3. **API Reference** : Générez automatiquement avec JSDoc

### Génération de la documentation

```bash
# Générer la documentation
pnpm run docs:build

# Servir en local
pnpm run docs:serve

# Publier sur GitHub Pages
pnpm run docs:publish
```

## 🔄 Mise à jour de la documentation RGAA

### Processus complet de mise à jour

Lorsque vous recevez de nouveaux fichiers de documentation RGAA (critères, tests, annexes, glossaire), voici le processus complet pour les intégrer dans la documentation :

#### 1. Structure des fichiers fournis

Les fichiers RGAA sont généralement organisés comme suit :
```
/rgaa/rgaa/
├── criteres/
│   ├── 1.1/
│   │   ├── index.md          # Critère principal
│   │   ├── annexe.md         # Références WCAG et techniques
│   │   └── tests/
│   │       ├── 1.md         # Test 1
│   │       ├── 2.md         # Test 2
│   │       └── ...
│   ├── 1.2/
│   └── ...
├── faq/                     # Questions fréquentes
└── glossaire/              # Définitions des termes
    ├── terme-1.md
    ├── terme-2.md
    └── ...
```

#### 2. Scripts de traitement automatique

Une fois les fichiers placés dans la structure, utilisez les scripts automatisés :

```bash
# Script complet (recommandé)
pnpm run docs:setup
```

Ce script exécute automatiquement toutes les étapes suivantes :

##### Étape 1 : Ajout des titres
```bash
pnpm run docs:add-titles
```
- **Fonction** : Extrait les titres du frontmatter YAML et les ajoute comme H1 dans le corps des fichiers
- **Fichiers traités** : Tous les `index.md` des critères
- **Résultat** : Titres visibles dans VitePress

##### Étape 2 : Inclusion des tests
```bash
pnpm run docs:include-tests
```
- **Fonction** : Intègre tous les tests d'un critère dans sa page principale
- **Fichiers traités** : Dossiers `tests/` de chaque critère
- **Résultat** : Section "Tests" avec procédures détaillées

##### Étape 3 : Inclusion des annexes
```bash
pnpm run docs:include-annexes
```
- **Fonction** : Intègre les références WCAG et techniques dans les pages des critères
- **Fichiers traités** : Fichiers `annexe.md` de chaque critère
- **Résultat** : Sections "Références WCAG" et "Techniques"

##### Étape 4 : Correction des liens WCAG
```bash
pnpm run docs:fix-links
```
- **Fonction** : Corrige les liens vers les techniques WCAG
- **Problème résolu** : Liens cassés vers `https://www.w3.org/WAI/WCAG21/Techniques/`
- **Résultat** : Liens fonctionnels vers `https://www.w3.org/WAI/WCAG21/Techniques/html/`

##### Étape 5 : Correction des liens internes
```bash
pnpm run docs:fix-internal-links
```
- **Fonction** : Corrige les liens internes pour qu'ils pointent vers le glossaire
- **Problème résolu** : Liens `[terme](#terme)` non fonctionnels
- **Résultat** : Liens vers `/rgaa/glossaire/terme`

#### 3. Vérification et test

Après l'exécution des scripts :

```bash
# Tester la documentation en local
pnpm run docs:serve

# Vérifier que tous les liens fonctionnent
# - Liens internes vers le glossaire
# - Liens vers les techniques WCAG
# - Navigation entre les critères
```

#### 4. Publication

Une fois la documentation mise à jour et testée :

```bash
# Build de production
pnpm run docs:build

# Publication sur GitHub Pages
pnpm run docs:publish
```

### Scripts individuels disponibles

Si vous devez traiter seulement certains aspects :

```bash
# Traitement sélectif
pnpm run docs:add-titles         # Titres seulement
pnpm run docs:include-tests      # Tests seulement
pnpm run docs:include-annexes    # Annexes seulement
pnpm run docs:fix-links          # Liens WCAG seulement
pnpm run docs:fix-internal-links # Liens internes seulement
```

### Structure finale d'un critère

Après traitement, chaque critère contient :

```markdown
---
title: Titre du critère
---

# Titre du critère

## Tests

### Test 1
**Titre du test 1**
[Procédure détaillée...]

### Test 2
**Titre du test 2**
[Procédure détaillée...]

## Références WCAG

### Critère WCAG 1.1.1
**Non-text Content** (Niveau A)

## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **H36** : [Technique H36](https://www.w3.org/WAI/WCAG21/Techniques/html/H36)
- **H37** : [Technique H37](https://www.w3.org/WAI/WCAG21/Techniques/html/H37)
```

### Dépannage

#### Problèmes courants

1. **Scripts échouent** : Vérifiez que tous les fichiers sont dans la bonne structure
2. **Liens cassés** : Relancez `pnpm run docs:fix-links` et `pnpm run docs:fix-internal-links`
3. **Tests manquants** : Vérifiez que les dossiers `tests/` existent
4. **Annexes manquantes** : Vérifiez que les fichiers `annexe.md` existent

#### Logs et débogage

Les scripts fournissent des logs détaillés :
- ✅ **Succès** : Fichiers traités avec succès
- ℹ️ **Info** : Fichiers ignorés (déjà traités ou sans contenu)
- ❌ **Erreur** : Problèmes rencontrés avec détails

### Maintenance

Pour maintenir la documentation à jour :

1. **Ajout de nouveaux critères** : Placez les fichiers et relancez `pnpm run docs:setup`
2. **Mise à jour du glossaire** : Ajoutez les fichiers et relancez `pnpm run docs:fix-internal-links`
3. **Correction de liens** : Relancez les scripts de correction des liens
4. **Tests** : Vérifiez toujours avec `pnpm run docs:serve` avant publication

## 🚀 Processus de release

### Versioning

Le projet utilise [Semantic Versioning](https://semver.org/) :
- **MAJOR** : Changements incompatibles
- **MINOR** : Nouvelles fonctionnalités compatibles
- **PATCH** : Corrections de bugs

### Release

1. Mettez à jour le `CHANGELOG.md`
2. Créez un tag de version
3. La publication sur NPM est automatique via GitHub Actions

## 🤝 Code de conduite

### Nos valeurs

- **Respect** : Traitez tous les contributeurs avec respect
- **Inclusion** : Accueillez les contributions de tous
- **Collaboration** : Travaillez ensemble pour améliorer le projet
- **Qualité** : Maintenez des standards élevés

### Comportement attendu

✅ **À faire** :
- Être respectueux et constructif
- Proposer des solutions, pas seulement des problèmes
- Documenter vos contributions
- Tester vos modifications

❌ **À éviter** :
- Langage offensant ou discriminatoire
- Spam ou contenu hors-sujet
- Contributions non testées
- Violation de la propriété intellectuelle

## 📞 Support

- **Issues** : [GitHub Issues](https://github.com/NovaGaia/eslint-plugin-rgaa/issues)
- **Discussions** : [GitHub Discussions](https://github.com/NovaGaia/eslint-plugin-rgaa/discussions)
- **Email** : [contact@example.com](mailto:contact@example.com)

## 🙏 Remerciements

Merci à tous les contributeurs qui rendent ce projet possible !

---

*Ensemble, améliorons l'accessibilité web en France* 🇫🇷
