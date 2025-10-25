# Documentation eslint-plugin-rgaa

Bienvenue dans la documentation du plugin ESLint RGAA. Cette documentation vous accompagne dans l'utilisation et la configuration du plugin pour valider l'accessibilité de vos applications web selon le Référentiel Général d'Amélioration de l'Accessibilité (RGAA).

## 📚 Guides et tutoriels

### [Guide d'utilisation](guide.md)
Guide complet pour installer, configurer et utiliser le plugin ESLint RGAA dans vos projets.

### [Système de commentaires RGAA](commentaires-rgaa.md)
Documentation détaillée du système de commentaires spéciaux pour contrôler le statut des images (décorative/informative).

## 🎯 Critères RGAA implémentés

### Images et médias

#### [Critère 1.1 - Images porteuses d'information](rgaa/criteres/1-images/1.1/index.md)
**Question** : Chaque image porteuse d'information a-t-elle une alternative textuelle ?

**Règle ESLint** : `rgaa-html/rgaa-1-1`

#### [Critère 1.2 - Images décoratives](rgaa/criteres/1-images/1.2/index.md)
**Question** : Chaque image décorative est-elle correctement ignorée par les technologies d'assistance ?

**Règle ESLint** : `rgaa-html/rgaa-1-2`

#### [Critère 1.3 - Pertinence des alternatives textuelles](rgaa/criteres/1-images/1.3/index.md)
**Question** : Pour chaque image porteuse d'information ayant une alternative textuelle, cette alternative est-elle pertinente ?

**Règle ESLint** : `rgaa-html/rgaa-1-3`

## 🔧 Configuration

### Configuration de base
```javascript
// .eslintrc.js
module.exports = {
  plugins: ['rgaa-html'],
  rules: {
    'rgaa-html/rgaa-1-1': 'error',
    'rgaa-html/rgaa-1-2': 'error',
    'rgaa-html/rgaa-1-3': 'warn'
  }
};
```

### Configuration avancée
```javascript
// eslint.config.js (ESLint 9+)
const rgaaHtmlPlugin = require('eslint-plugin-rgaa-html');

module.exports = [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      'rgaa-html': rgaaHtmlPlugin,
    },
    rules: {
      'rgaa-html/rgaa-1-1': 'error',
      'rgaa-html/rgaa-1-2': 'error',
      'rgaa-html/rgaa-1-3': ['warn', { minLength: 25 }]
    },
  },
];
```

## 💬 Système de commentaires

Le plugin supporte un système de commentaires spéciaux pour contrôler explicitement le statut des images :

```jsx
// Image informative par défaut
<img src="chart.png" alt="Graphique des ventes" />

// Image décorative forcée
{/* eslint-rgaa: decorative */}
<img src="decoration.png" alt="" role="presentation" />

// Image temporairement ignorée
{/* eslint-rgaa: ignore - À corriger plus tard */}
<img src="old-logo.png" alt="Logo legacy" />
```

**Types de commentaires :**
- `eslint-rgaa: decorative` - Image décorative (vérifiée par RGAA 1.2)
- `eslint-rgaa: informative` - Image informative (vérifiée par RGAA 1.1 et 1.3)
- `eslint-rgaa: ignore` - Image ignorée temporairement

## 🧪 Tests et exemples

### Exemples IDE
Des exemples JSX/TSX sont disponibles dans `tests/eslint-plugin-rgaa-ide/examples/` pour tester le plugin directement dans votre IDE.

### Tests automatisés
Le plugin inclut une suite de tests complète organisée par critère RGAA.

## 📖 Ressources externes

- [Documentation RGAA officielle](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/)
- [Guide d'accessibilité web MDN](https://developer.mozilla.org/fr/docs/Web/Accessibility)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🤝 Contribution

Pour contribuer au projet :

1. Fork le repository
2. Créer une branche feature
3. Ajouter les tests pour le nouveau critère
4. Commiter les changements
5. Créer une Pull Request

## 📄 Licence

MIT