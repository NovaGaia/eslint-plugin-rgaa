# Thématique 9 : Structure de l'information

Cette thématique couvre la structure et l'organisation de l'information dans le RGAA.

## 🎯 Objectif

Assurer que l'information est correctement structurée et organisée pour tous les utilisateurs.

## 📋 Critères de cette thématique

### [9.1 - Hiérarchie des titres](9.1/)
Dans chaque page web, l'information est-elle structurée par l'utilisation appropriée de titres ?

### [9.2 - Cohérence de la structure](9.2/)
Dans chaque page web, la structure du document est-elle cohérente ?

### [9.3 - Structure des listes](9.3/)
Dans chaque page web, chaque liste est-elle correctement structurée ?

### [9.4 - Citations](9.4/)
Dans chaque page web, chaque citation est-elle correctement indiquée ?

## 🔧 Techniques d'implémentation

- **Hiérarchie des titres**
- **Structure des listes**
- **Citations**
- **Landmarks**
- **Structure cohérente**

## 🔍 Tests et validation

### Outils de test
- **Inspecteur d'éléments** : Vérifier la structure
- **Lecteurs d'écran** : Tester la restitution
- **Navigation clavier** : Vérifier l'accessibilité
- **Outils automatisés** : eslint-plugin-rgaa

### Checklist de validation
[ ] La hiérarchie des titres est correcte,[ ] La structure est cohérente,[ ] Les listes sont correctement structurées,[ ] Les citations sont indiquées,[ ] Les landmarks sont utilisés

## 📚 Ressources complémentaires

### Documentation officielle
- [WCAG 2.1 - Headings](https://www.w3.org/WAI/WCAG21/quickref/#headings)

### Glossaire RGAA
- [Titre](/rgaa/glossaire/titre)
- [Structure du document](/rgaa/glossaire/structure-du-document)
- [Listes](/rgaa/glossaire/listes)
- [Landmarks](/rgaa/glossaire/landmarks)

## 🛠️ Utilisation avec eslint-plugin-rgaa

### Configuration
```javascript
// .eslintrc.js
module.exports = {
  plugins: ['rgaa'],
  rules: {
    'rgaa/heading-hierarchy': 'error',
    'rgaa/list-structure': 'warn'
  }
};
```

### Règles disponibles
- `rgaa/heading-hierarchy` : Hiérarchie des titres
- `rgaa/list-structure` : Structure des listes

## ⚠️ Bonnes pratiques

### Structure
- **Hiérarchie** : Respecter la hiérarchie des titres
- **Cohérence** : Maintenir la cohérence
- **Landmarks** : Utiliser les landmarks ARIA

---

*Cette thématique est essentielle pour l'accessibilité web. Une bonne structure facilite la navigation et la compréhension.*