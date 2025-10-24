# Thématique 3 : Couleurs

Cette thématique couvre l'accessibilité des couleurs et du contraste dans le RGAA.

## 🎯 Objectif

Assurer que l'information n'est pas transmise uniquement par la couleur et que les contrastes sont suffisants pour tous les utilisateurs.

## 📋 Critères de cette thématique

### [3.1 - Information par la couleur](3.1/)
Dans chaque page web, l'information ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?

### [3.2 - Contraste des couleurs](3.2/)
Dans chaque page web, le contraste entre la couleur du texte et la couleur de son arrière-plan est-il suffisamment élevé ?

### [3.3 - Contraste des composants](3.3/)
Dans chaque page web, les couleurs utilisées dans les composants d'interface ou les éléments graphiques porteurs d'informations sont-elles suffisamment contrastées ?

## 🔧 Techniques d'implémentation

### Contraste des couleurs
- **Ratio minimum** : 4.5:1 pour le texte normal
- **Ratio minimum** : 3:1 pour le texte large (18pt+)
- **Outils** : Color Contrast Analyzer, WebAIM Contrast Checker

### Information par la couleur
- **Éviter** : Rouge = erreur, Vert = succès
- **Ajouter** : Icônes, formes, texte
- **Exemple** : ❌ Erreur, ✅ Succès

### Exemples d'implémentation

#### Contraste suffisant
```css
/* ✅ Bon contraste (ratio > 4.5:1) */
.text-dark {
  color: #000000;
  background-color: #ffffff;
}

/* ❌ Mauvais contraste (ratio < 4.5:1) */
.text-light {
  color: #cccccc;
  background-color: #ffffff;
}
```

#### Information non colorielle
```html
<!-- ✅ Bon : information par icône + couleur -->
<span class="error">❌ Erreur de validation</span>
<span class="success">✅ Validation réussie</span>

<!-- ❌ Mauvais : information uniquement par couleur -->
<span style="color: red;">Erreur</span>
<span style="color: green;">Succès</span>
```

## 🎨 Types de contraste couverts

### Texte sur fond
- **Texte normal** : Ratio minimum 4.5:1
- **Texte large** : Ratio minimum 3:1 (18pt+ ou 14pt+ gras)
- **Liens** : Ratio minimum 4.5:1

### Composants d'interface
- **Boutons** : Texte et fond contrastés
- **Formulaires** : Champs et labels contrastés
- **Navigation** : Liens et arrière-plans contrastés

### Éléments graphiques
- **Graphiques** : Couleurs contrastées
- **Cartes** : Légendes contrastées
- **Diagrammes** : Éléments contrastés

## 🔍 Tests et validation

### Outils de test
- **Color Contrast Analyzer** : Extension navigateur
- **WebAIM Contrast Checker** : Outil en ligne
- **axe-core** : Tests automatisés
- **eslint-plugin-rgaa** : Validation en développement

### Checklist de validation
- [ ] Tous les textes ont un contraste ≥ 4.5:1
- [ ] Les textes larges ont un contraste ≥ 3:1
- [ ] L'information n'est pas transmise uniquement par la couleur
- [ ] Les composants d'interface sont contrastés
- [ ] Les éléments graphiques sont contrastés

## 📚 Ressources complémentaires

### Documentation officielle
- [WCAG 2.1 - Couleurs](https://www.w3.org/WAI/WCAG21/quickref/#colors)
- [Techniques WCAG pour les couleurs](https://www.w3.org/WAI/WCAG21/Techniques/general/G14)

### Glossaire RGAA
- [Contraste](../../glossaire/contraste)
- [Information (donnée par la couleur)](../../glossaire/information-donnee-par-la-couleur)
- [Image véhiculant une information (donnée par la couleur)](../../glossaire/image-vehiculant-une-information-donnee-par-la-couleur)

## 🛠️ Utilisation avec eslint-plugin-rgaa

### Configuration
```javascript
// .eslintrc.js
module.exports = {
  plugins: ['rgaa'],
  rules: {
    'rgaa/color-contrast': 'error',
    'rgaa/color-alone': 'warn',
    'rgaa/color-contrast-components': 'error'
  }
};
```

### Règles disponibles
- `rgaa/color-contrast` : Vérification du contraste des couleurs
- `rgaa/color-alone` : Validation de l'information non colorielle
- `rgaa/color-contrast-components` : Contraste des composants

## ⚠️ Bonnes pratiques

### Contraste
- **Tester** : Toujours vérifier le contraste
- **Outils** : Utiliser des outils de validation
- **Thèmes** : Prévoir des thèmes sombres/clair

### Information
- **Diversifier** : Utiliser plusieurs moyens de transmission
- **Cohérence** : Maintenir la cohérence visuelle
- **Accessibilité** : Penser aux utilisateurs daltoniens

### Couleurs
- **Palette** : Définir une palette accessible
- **États** : Différencier les états par d'autres moyens
- **Feedback** : Fournir un feedback non coloriel

---

*La couleur est un élément important de l'interface utilisateur, mais elle ne doit pas être le seul moyen de transmettre l'information.*
