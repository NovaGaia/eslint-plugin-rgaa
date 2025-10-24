# Thématique 12 : Navigation

Cette thématique couvre l'accessibilité de la navigation dans le RGAA.

## 🎯 Objectif

Assurer que la navigation est accessible et cohérente sur tout le site.

## 📋 Critères de cette thématique

### [12.1 - Systèmes de navigation](12.1/)
Chaque ensemble de pages dispose-t-il de deux systèmes de navigation différents, au moins ?

### [12.2 - Cohérence de la navigation](12.2/)
Dans chaque ensemble de pages, le menu et les barres de navigation sont-ils toujours à la même place ?

### [12.3 - Plan du site](12.3/)
La page « plan du site » est-elle pertinente ?

### [12.4 - Accessibilité du plan](12.4/)
Dans chaque ensemble de pages, la page « plan du site » est-elle accessible à partir d'une fonctionnalité identique ?

### [12.5 - Moteur de recherche](12.5/)
Dans chaque ensemble de pages, le moteur de recherche est-il atteignable de manière identique ?

### [12.6 - Zones de regroupement](12.6/)
Les zones de regroupement de contenus présentes dans plusieurs pages web peuvent-elles être atteintes ou évitées ?

### [12.7 - Liens d'évitement](12.7/)
Dans chaque page web, un lien d'évitement ou d'accès rapide à la zone de contenu principal est-il présent ?

### [12.8 - Ordre de tabulation](12.8/)
Dans chaque page web, l'ordre de tabulation est-il cohérent ?

### [12.9 - Piège au clavier](12.9/)
Dans chaque page web, la navigation ne doit pas contenir de piège au clavier. Cette règle est-elle respectée ?

### [12.10 - Raccourcis clavier](12.10/)
Dans chaque page web, les raccourcis clavier n'utilisant qu'une seule touche sont-ils contrôlables par l'utilisateur ?

### [12.11 - Contenus additionnels](12.11/)
Dans chaque page web, les contenus additionnels apparaissant au survol, à la prise de focus ou à l'activation d'un composant d'interface sont-ils si nécessaire atteignables au clavier ?

## 🔧 Techniques d'implémentation

- **Systèmes de navigation**
- **Plan du site**
- **Moteur de recherche**
- **Liens d'évitement**
- **Ordre de tabulation**

## 🔍 Tests et validation

### Outils de test
- **Inspecteur d'éléments** : Vérifier la structure
- **Lecteurs d'écran** : Tester la restitution
- **Navigation clavier** : Vérifier l'accessibilité
- **Outils automatisés** : eslint-plugin-rgaa

### Checklist de validation
[ ] Plusieurs systèmes de navigation,[ ] La navigation est cohérente,[ ] Le plan du site est accessible,[ ] Le moteur de recherche est accessible,[ ] Les liens d'évitement sont présents

## 📚 Ressources complémentaires

### Documentation officielle
- [WCAG 2.1 - Navigation](https://www.w3.org/WAI/WCAG21/quickref/#navigation)

### Glossaire RGAA
- [Système de navigation](/rgaa/glossaire/systeme-de-navigation)
- [Menu et barre de navigation](/rgaa/glossaire/menu-et-barre-de-navigation)
- [Page « plan du site »](/rgaa/glossaire/page-«-plan-du-site-»)
- [Moteur de recherche (interne à un site web)](/rgaa/glossaire/moteur-de-recherche-(interne-a-un-site-web))
- [Liens d'évitement ou d'accès rapide](/rgaa/glossaire/liens-d'evitement-ou-d'acces-rapide)

## 🛠️ Utilisation avec eslint-plugin-rgaa

### Configuration
```javascript
// .eslintrc.js
module.exports = {
  plugins: ['rgaa'],
  rules: {
    'rgaa/navigation-systems': 'error',
    'rgaa/skip-links': 'warn'
  }
};
```

### Règles disponibles
- `rgaa/navigation-systems` : Systèmes de navigation
- `rgaa/skip-links` : Liens d'évitement

## ⚠️ Bonnes pratiques

### Navigation
- **Systèmes** : Fournir plusieurs systèmes de navigation
- **Cohérence** : Maintenir la cohérence
- **Évitement** : Fournir des liens d'évitement

---

*Cette thématique est essentielle pour l'accessibilité web. La navigation doit être accessible et cohérente.*