# Notes de développement - ESLint Plugin RGAA

## Architecture du projet

### Structure monorepo
- **`libs/`** : Libraries principales
  - `eslint-plugin-rgaa-core` : Code lint principal et utilitaires
  - `eslint-plugin-rgaa-html` : Plugin ESLint pour HTML/JSX
- **`tests/`** : Libraries de test
  - `eslint-plugin-rgaa-test` : Tests scriptés autonomes
  - `eslint-plugin-rgaa-ide-examples` : Exemples IDE (JSX/TSX)
- **`doc/`** : Documentation RGAA et guide utilisateur (versionnée)
- **`doc-init/`** : Fichiers sources pour les scripts de documentation (ignoré par Git)

### Organisation des utilitaires (Refactorisation 2024)
Le fichier `utils.ts` (642 lignes) a été refactorisé en modules thématiques :

- **`common.ts`** : Fonctions communes (manipulation de nœuds, attributs, types)
- **`image-theme-utils.ts`** : Toutes les fonctions liées à la thématique 1 RGAA (images, SVG, Canvas)
- **`rgaa-comments.ts`** : Gestion des commentaires ESLint RGAA
- **`index.ts`** : Point d'entrée unifié avec réexport de toutes les fonctions

**Avantages :**
- Organisation respectant la structure RGAA par thématiques
- Code plus maintenable et extensible
- Séparation claire des responsabilités
- Documentation complète en français
- Compatibilité préservée via index.ts

## Logique des critères RGAA (IMPORTANT)

### Principe fondamental
Les critères RGAA se basent sur les **attributs HTML réels**, pas sur les commentaires ESLint.

### Rôle des commentaires `eslint-rgaa:`
- **Rôle** : Aide au développeur pour clarifier l'intention
- **Pas un critère de test** : Le linter se base sur les attributs HTML réels
- **Utile pour** : Éviter les faux positifs quand l'intention n'est pas claire

### Logique des critères :
- **RGAA 1.1** : Images **informatives** (par défaut) → Vérifie présence d'alternatives
- **RGAA 1.2** : Images **décoratives** (détectées par attributs) → Vérifie marquage correct
- **RGAA 1.3** : Images **informatives** (par défaut) → Vérifie pertinence des alternatives

### Détection des images décoratives :
- `alt=""` + `role="presentation"` → Décorative
- `alt=""` + `role="none"` → Décorative  
- `aria-hidden="true"` → Décorative
- `alt=""` seul → Informative (erreur RGAA 1.1)

**NE JAMAIS** utiliser les commentaires comme critère de test, seulement comme aide contextuelle.

### Optimisation RGAA 1.3 - Éviter les faux positifs
**Principe** : RGAA 1.3 ne s'applique qu'aux alternatives avec du contenu réel.

**Logique implémentée** :
- RGAA 1.3 ne s'applique qu'aux alternatives avec **au moins 1 caractère non vide** (après trim)
- `alt=""` → RGAA 1.1 seulement (pas de warning RGAA 1.3)
- `alt="   "` → RGAA 1.1 seulement (pas de warning RGAA 1.3)
- `alt="OK"` → RGAA 1.1 + RGAA 1.3 (warning si < 25 chars)
- `alt="Description détaillée..."` → RGAA 1.1 + RGAA 1.3 (OK)

**Avantages** :
- Élimination des warnings redondants
- Séparation claire des responsabilités entre RGAA 1.1 et 1.3
- Cohérence avec la logique RGAA officielle

### Outils utilisés
- **Turbo** : Build et tests
- **pnpm@8.15.0** : Gestionnaire de packages (UNIQUEMENT pnpm)
- **TypeScript** : Développement
- **ESLint 9** : Configuration flat
- **VitePress** : Documentation et site web
- **Node.js** : >=20.0.0 requis

## Règles RGAA implémentées

### RGAA 1.1 - Présence d'alternatives textuelles
- **Niveau** : `error` (bloquant)
- **Tests** : 8 tests (1.1.1 à 1.1.8)
- **Éléments** : `<img>`, `role="img"`, `<area>`, `<input type="image">`, `<img ismap>`, `<svg>`, `<object>`, `<embed>`, `<canvas>`
- **Logique** : Vérifie la présence d'alternatives (alt, aria-label, aria-labelledby, title, contenu SVG/Canvas)

### RGAA 1.2 - Images décoratives
- **Niveau** : `error` (bloquant)
- **Tests** : 6 tests (1.2.1 à 1.2.6)
- **Éléments** : `<img>`, `<area>`, `<object>`, `<svg>`, `<canvas>`, `<embed>`
- **Logique** : Vérifie le marquage décoratif correct (alt="", aria-hidden="true", role="presentation"/"none")

### RGAA 1.3 - Pertinence des alternatives
- **Niveau** : `warn` (suggestion)
- **Tests** : 9 tests (1.3.1 à 1.3.9)
- **Éléments** : Tous les éléments d'image
- **Logique** : Vérifie la longueur des alternatives (minLength: 25 par défaut, configurable)
- **Note** : Test 1.3.8 commenté (évaluation manuelle requise)

## Système de commentaires ESLint

### Commentaires supportés
```javascript
{/* eslint-rgaa: decorative */}
<img src="decoration.png" alt="" />

{/* eslint-rgaa: informative */}
<img src="chart.png" alt="Graphique des ventes" />

{/* eslint-rgaa: ignore */}
<img src="legacy.png" alt="Logo" />
```

### Logique par défaut
- **Par défaut** : Toutes les images sont considérées comme **informatives**
- **Surcharge** : Les commentaires permettent de marquer explicitement comme décoratives ou à ignorer

## Fonctions utilitaires importantes

### `utils.ts` - Fonctions clés
- `isDecorativeImage()` : Détermine si une image est décorative
- `hasAlternativeAttributes()` : Vérifie la présence d'alternatives
- `hasAlternativeAttributesForDecorative()` : Version pour images décoratives (exclut alt="")
- `isAlternativeTooShort()` : Vérifie la longueur des alternatives
- `getShortestAlternative()` : Récupère la plus courte alternative
- `getSvgTitleContent()` : Extrait le contenu des `<title>` SVG
- `getCanvasTextContent()` : Extrait le contenu textuel des Canvas
- `hasSvgTitleOrDesc()` : Vérifie la présence de `<title>` ou `<desc>` SVG
- `hasTextContent()` : Vérifie la présence de contenu textuel

### Gestion spéciale des éléments
- **SVG** : Vérifie les éléments `<title>` enfants (pas d'attribut `title`)
- **Canvas** : Vérifie le contenu textuel des enfants
- **Images décoratives** : `alt=""` est correct, pas d'autres attributs d'alternative

## Configuration

### Configuration par défaut
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

### Niveaux par défaut
- **RGAA 1.1** : `error` (bloquant)
- **RGAA 1.2** : `error` (bloquant)
- **RGAA 1.3** : `warn` (suggestion)

### Options configurables
- **RGAA 1.3** : `minLength` (défaut: 25 caractères)
- **Documentation** : URLs configurables par critère

## Tests

### Structure des tests
- **Valid** : Tests qui ne doivent PAS générer d'erreurs
- **Invalid** : Tests qui DOIVENT générer des erreurs
- **Naming** : `test1-X-Y-description.jsx` (X = critère, Y = test)

### Exemples IDE
- **`-correct`** : Fichiers sans erreurs (alternatives longues ≥25 chars)
- **`-with-issues`** : Fichiers avec erreurs spécifiques au critère
- **Séparation** : Un dossier par critère (1.1, 1.2, 1.3)

## Points d'attention importants

### Corrections majeures effectuées
1. **Reconnaissance des alternatives SVG** : Correction de `getSvgTitleContent()` et `hasSvgTitleOrDesc()`
2. **Reconnaissance des alternatives Canvas** : Correction de `getCanvasTextContent()` et `isAlternativeTooShort()`
3. **Images décoratives** : Création de `hasAlternativeAttributesForDecorative()` pour exclure `alt=""`
4. **Longueur des alternatives** : Mise à jour de tous les exemples pour respecter minLength=25
5. **Niveaux de règle** : RGAA 1.3 en `warn`, 1.1/1.2 en `error`

### Problèmes résolus
- **Conflits RGAA 1.1/1.2** : Séparation claire entre images informatives et décoratives
- **Tests Canvas** : Correction de la logique de validation du contenu textuel
- **Tests SVG** : Correction de la validation des éléments `<title>` enfants
- **Configuration IDE** : Niveaux de règle corrects pour l'affichage

### Commandes importantes
```bash
# Build et tests
pnpm build                     # Build complet
pnpm test                      # Tests complets
pnpm test:verbose              # Tests avec détails
pnpm test:1.1                  # Test spécifique RGAA 1.1
pnpm test:ide                  # Test des exemples IDE
pnpm test:workspace            # Test du workspace

# Test d'un critère spécifique
pnpm test:criterion 1.1        # Test d'un critère spécifique
node tests/eslint-plugin-rgaa-test/dist/index.js test:criterion 1.1

# Test IDE manuel
cd tests/eslint-plugin-rgaa-ide/examples
npx eslint jsx/1.1/example-with-issues.jsx

# Documentation (depuis doc-utils/)
cd doc-utils
pnpm install                   # Installer les dépendances de documentation

# Migration de structure
pnpm migrate                   # Migrer l'ancienne structure vers la nouvelle
pnpm restore                   # Restaurer l'ancienne structure (si nécessaire)
pnpm test-migration            # Tester que la migration fonctionne

# Traitement de contenu
pnpm add-titles                # Ajouter des titres aux pages
pnpm include-tests             # Intégrer les tests dans les pages
pnpm include-annexes           # Intégrer les annexes dans les pages
pnpm fix-links                 # Corriger les liens WCAG
pnpm fix-internal-links        # Corriger les liens internes
pnpm add-titles-faq-glossaire  # Ajouter des titres FAQ/glossaire
pnpm setup                     # Appliquer tous les traitements de documentation

# Intégration complète
pnpm integrate-content         # Intégrer le contenu complet des tests et annexes
pnpm validate-integration      # Valider que l'intégration est identique au backup

# VitePress (depuis la racine)
pnpm docs:build                # Build de la documentation
pnpm docs:serve                # Serveur de développement
pnpm docs:watch                # Mode watch
pnpm docs:publish              # Publication sur GitHub Pages

# Changeset (gestion des versions)
pnpm changeset                 # Créer un nouveau changeset
pnpm changeset status          # Voir le statut des changesets
pnpm version-packages          # Mettre à jour les versions (génère CHANGELOG)
pnpm release                   # Publier sur npm
```

## Prochaines étapes possibles

### En cours
1. **Optimisation des libs NPM** - Rendre les packages publiés les plus légers possibles
2. **Amélioration du workflow Changeset** - Ajouter lint, build et test au workflow GitHub Actions

### À venir
3. **Implémentation d'autres critères RGAA** (2.1, 2.2, etc.)
4. **Amélioration de la documentation** (exemples plus complets)
5. **Tests de performance** (optimisation des règles)
6. **Plugin VSCode** (interface graphique)

### Détails des tâches en cours

#### Optimisation des libs NPM
- Analyser les `package.json` des libs pour optimiser les `files`
- Vérifier et minimiser les dépendances
- Optimiser la taille des bundles
- S'assurer que seuls les fichiers nécessaires sont publiés

#### Workflow Changeset amélioré
- **Lint** : Intégrer `pnpm lint` avec exclusion des libs examples
- **Build** : Intégrer `pnpm build` pour vérifier la compilation
- **Test** : Intégrer `pnpm test` pour valider les tests
- **Configuration ESLint** : Désactiver le linting sur les dossiers examples

## Informations du projet

### Métadonnées
- **Nom** : eslint-plugin-rgaa
- **Version** : 0.1.0
- **Auteur** : Renaud Heluin
- **Licence** : MIT
- **Repository** : https://github.com/NovaGaia/eslint-plugin-rgaa.git
- **Homepage** : https://novagaia.github.io/eslint-plugin-rgaa/
- **Mots-clés** : eslint, eslintplugin, accessibility, rgaa, a11y, linter, france

### Configuration technique
- **Node.js** : >=20.0.0
- **Package Manager** : pnpm@8.15.0
- **Workspaces** : libs/*
- **Peer Dependencies** : eslint >=9.0.0

## Fichiers de configuration importants

- `eslint.config.js` : Configuration par défaut
- `doc/` : Documentation utilisateur complète
- `DEVELOPMENT_NOTES.md` : Documentation développeur (ce fichier)

## Scripts de documentation

**Note** : Tous les scripts de documentation ont été déplacés dans le dossier `doc-utils/` pour une meilleure organisation.

### Structure
- **`doc-utils/`** : Dossier dédié aux scripts de documentation
- **`doc-utils/package.json`** : Scripts et dépendances de documentation (js-yaml uniquement)
- **`doc-utils/scripts/`** : Tous les scripts de transformation

### Scripts disponibles (depuis `doc-utils/`)
- `migrate` : Migre de l'ancienne structure plate vers la nouvelle thématique
- `restore` : Restaure l'ancienne structure plate
- `test-migration` : Teste le script de migration
- `integrate-content` : Intègre le contenu complet des tests et annexes
- `validate-integration` : Valide que l'intégration est identique au backup
- `add-titles` : Ajoute des titres aux pages de critères
- `include-tests` : Intègre les tests dans les pages de critères
- `include-annexes` : Intègre les annexes dans les pages de critères
- `fix-links` : Corrige les liens WCAG
- `fix-internal-links` : Corrige les liens internes
- `add-titles-faq-glossaire` : Ajoute des titres aux pages FAQ et glossaire
- `setup` : Applique tous les traitements de documentation

### Dépendances séparées
- **Package principal** : VitePress, gh-pages, ESLint, TypeScript, Turbo
- **Doc-utils** : js-yaml (uniquement pour parser le frontmatter YAML)

### Scripts de test spécialisés
- `test:verbose` : Tests avec détails complets
- `test:criterion` : Test d'un critère spécifique
- `test:1.1`, `test:1.2`, `test:1.3` : Raccourcis pour les critères
- `test:ide` : Test des exemples IDE
- `test:workspace` : Test du workspace complet

### Workflow de documentation
1. **Modifier** les fichiers dans `doc-init/` (structure plate)
2. **Migrer** : `cd doc-utils && pnpm migrate` (vers structure thématique)
3. **Intégrer** : `cd doc-utils && pnpm integrate-content` (contenu complet)
4. **Valider** : `cd doc-utils && pnpm validate-integration` (vérification)
5. **Build** : `pnpm docs:build` (génération VitePress depuis la racine)

## Notes de développement

- **Toujours utiliser pnpm** (pas npm ou yarn)
- **Tester après chaque modification** (pnpm build && pnpm test)
- **Vérifier les exemples IDE** (erreurs visibles dans l'éditeur)
- **Respecter la séparation des critères** (1.1 ≠ 1.2 ≠ 1.3)
- **Documenter les changements** dans ce fichier
- **Scripts de documentation** : Utiliser `cd doc-utils && pnpm <script>`
- **VitePress** : Utiliser `pnpm docs:build` depuis la racine
- **Dépendances** : js-yaml uniquement dans doc-utils, VitePress dans le package principal
- **Changeset** : Gestion des versions et publication automatique sur npm
- **Synchronisation** : Versions synchronisées entre eslint-plugin-rgaa-core et eslint-plugin-rgaa-html
- **Packages privés** : Tests et exemples IDE marqués comme privés (non publiés sur npm)
- **CHANGELOG** : Généré automatiquement par changeset dans chaque package
- **HISTORY.md** : Historique manuel des versions précédentes
