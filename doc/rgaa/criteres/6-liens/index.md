# Thématique 6 : Liens

Cette thématique couvre l'accessibilité des liens et de la navigation dans le RGAA.

## 🎯 Objectif

Assurer que tous les liens sont explicites et accessibles aux utilisateurs de technologies d'assistance.

## 📋 Critères de cette thématique

### [6.1 - Liens explicites](6.1/)
Chaque lien est-il explicite ?

### [6.2 - Intitulé des liens](6.2/)
Dans chaque page web, chaque lien a-t-il un intitulé ?

## 🔧 Techniques d'implémentation

- **Intitulé de lien**
- **Contexte du lien**
- **Liens explicites**
- **Navigation clavier**

## 🔍 Tests et validation

### Outils de test
- **Inspecteur d'éléments** : Vérifier la structure
- **Lecteurs d'écran** : Tester la restitution
- **Navigation clavier** : Vérifier l'accessibilité
- **Outils automatisés** : eslint-plugin-rgaa

### Checklist de validation
[ ] Tous les liens sont explicites,[ ] Les liens ont des intitulés pertinents,[ ] Les liens sont accessibles au clavier,[ ] Le contexte des liens est clair,[ ] Les liens composites sont corrects

## 📚 Ressources complémentaires

### Documentation officielle
- [WCAG 2.1 - Links](https://www.w3.org/WAI/WCAG21/quickref/#links)

### Glossaire RGAA
- [Lien](/rgaa/glossaire/lien)
- [Intitulé (ou nom accessible) de lien](/rgaa/glossaire/intitule-ou-nom-accessible-de-lien)
- [Intitulé visible](/rgaa/glossaire/intitule-visible)
- [Lien dont la nature n'est pas évidente](/rgaa/glossaire/lien-dont-la-nature-n-est-pas-evidente)
- [Contexte du lien](/rgaa/glossaire/contexte-du-lien)

## 🛠️ Utilisation avec eslint-plugin-rgaa

### Configuration
```javascript
// .eslintrc.js
module.exports = {
  plugins: ['rgaa'],
  rules: {
    'rgaa/link-text': 'error',
    'rgaa/link-context': 'warn'
  }
};
```

### Règles disponibles
- `rgaa/link-text` : Texte des liens
- `rgaa/link-context` : Contexte des liens

## ⚠️ Bonnes pratiques

### Liens
- **Explicites** : Rendre les liens explicites
- **Contexte** : Fournir le contexte nécessaire
- **Navigation** : Faciliter la navigation

---

*Cette thématique est essentielle pour l'accessibilité web. Les liens doivent être explicites et accessibles.*