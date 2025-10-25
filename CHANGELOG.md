# Changelog - ESLint Plugin RGAA

## [0.1.0] - 2024-12-19

### Ajouté
- **RGAA 1.1** : Règle de présence d'alternatives textuelles (8 tests)
- **RGAA 1.2** : Règle d'images décoratives (6 tests)
- **RGAA 1.3** : Règle de pertinence des alternatives (9 tests)
- **Système de commentaires ESLint** : `eslint-rgaa: decorative/informative/ignore`
- **Configuration par défaut** : Niveaux de règle appropriés
- **Tests scriptés** : Validation automatique des règles
- **Exemples IDE** : Démonstration dans l'éditeur
- **Documentation complète** : Guide utilisateur et technique

### Fonctionnalités
- Support complet des éléments : `<img>`, `<area>`, `<input type="image">`, `<svg>`, `<object>`, `<embed>`, `<canvas>`
- Validation des alternatives : `alt`, `aria-label`, `aria-labelledby`, `title`
- Gestion spéciale SVG : Éléments `<title>` enfants
- Gestion spéciale Canvas : Contenu textuel des enfants
- Configuration flexible : Niveaux et options personnalisables
- Messages d'erreur détaillés avec liens vers la documentation

### Corrections majeures
- **SVG alternatives** : Correction de la reconnaissance des éléments `<title>` enfants
- **Canvas alternatives** : Correction de la validation du contenu textuel
- **Images décoratives** : Séparation claire entre informatives et décoratives
- **Longueur des alternatives** : Validation correcte avec minLength configurable
- **Niveaux de règle** : RGAA 1.3 en `warn`, 1.1/1.2 en `error`

### Architecture
- **Monorepo** avec Turbo et pnpm
- **ESLint 9** configuration flat
- **TypeScript** pour le développement
- **Séparation des responsabilités** : Core, HTML, Tests, IDE

### Documentation
- `README.md` : Guide d'installation et configuration
- `CONFIGURATION.md` : Guide détaillé de configuration
- `DEVELOPMENT_NOTES.md` : Notes techniques pour le développement
- `doc/commentaires-rgaa.md` : Documentation des commentaires ESLint
- Exemples de configuration : `eslint.config.js`, `example-*.js`
- **Scripts de documentation** : Migration et intégration automatisées
- **Structure thématique** : Organisation par thèmes (1-images, 2-cadres, etc.)

### Tests
- **50 tests** : Tous passent (100% de réussite)
- **Exemples IDE** : Démonstration visuelle des erreurs
- **Validation croisée** : Tests scriptés + exemples IDE cohérents

## Notes de développement

### Commandes importantes
```bash
# Build complet
pnpm build

# Tests complets
pnpm test

# Test d'un critère spécifique
node tests/eslint-plugin-rgaa-test/dist/index.js test:criterion 1.1

# Test IDE
cd tests/eslint-plugin-rgaa-ide/examples
npx eslint jsx/1.1/example-with-issues.jsx

# Documentation
pnpm docs:migrate              # Migrer l'ancienne structure vers la nouvelle
pnpm docs:integrate-content    # Intégrer le contenu complet
pnpm docs:validate-integration # Valider l'intégration
```

### Configuration minimale
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

### Prochaines étapes
- Implémentation d'autres critères RGAA (2.1, 2.2, etc.)
- Amélioration de la documentation
- Tests de performance
- Intégration CI/CD
- Plugin VSCode
