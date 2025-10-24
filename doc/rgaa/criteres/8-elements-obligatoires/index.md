# Thématique 8 : Éléments obligatoires

Cette thématique couvre les éléments obligatoires de structure HTML dans le RGAA.

## 🎯 Objectif

Assurer que tous les éléments obligatoires de structure HTML sont présents et correctement implémentés.

## 📋 Critères de cette thématique

### [8.1 - Type de document](8.1/)
Chaque page web est-elle définie par un type de document ?

### [8.2 - Validité du code](8.2/)
Pour chaque page web, le code source généré est-il valide selon le type de document spécifié ?

### [8.3 - Langue par défaut](8.3/)
Dans chaque page web, la langue par défaut est-elle présente ?

### [8.4 - Code de langue](8.4/)
Pour chaque page web ayant une langue par défaut, le code de langue est-il pertinent ?

### [8.5 - Titre de page](8.5/)
Chaque page web a-t-elle un titre de page ?

### [8.6 - Pertinence du titre](8.6/)
Pour chaque page web ayant un titre de page, ce titre est-il pertinent ?

### [8.7 - Changement de langue](8.7/)
Dans chaque page web, chaque changement de langue est-il indiqué dans le code source ?

### [8.8 - Validité du code de langue](8.8/)
Dans chaque page web, le code de langue de chaque changement de langue est-il valide et pertinent ?

### [8.9 - Balises de présentation](8.9/)
Dans chaque page web, les balises ne doivent pas être utilisées uniquement à des fins de présentation. Cette règle est-elle respectée ?

### [8.10 - Sens de lecture](8.10/)
Dans chaque page web, les changements du sens de lecture sont-ils signalés ?

## 🔧 Techniques d'implémentation

- **Type de document**
- **Langue par défaut**
- **Titre de page**
- **Changement de langue**
- **Balises sémantiques**

## 🔍 Tests et validation

### Outils de test
- **Inspecteur d'éléments** : Vérifier la structure
- **Lecteurs d'écran** : Tester la restitution
- **Navigation clavier** : Vérifier l'accessibilité
- **Outils automatisés** : eslint-plugin-rgaa

### Checklist de validation
[ ] Le type de document est déclaré,[ ] Le code HTML est valide,[ ] La langue par défaut est définie,[ ] Le titre de page est présent,[ ] Les changements de langue sont signalés

## 📚 Ressources complémentaires

### Documentation officielle
- [WCAG 2.1 - Language](https://www.w3.org/WAI/WCAG21/quickref/#language)

### Glossaire RGAA
- [Type de document](/rgaa/glossaire/type-de-document)
- [Langue par défaut](/rgaa/glossaire/langue-par-defaut)
- [Code de langue](/rgaa/glossaire/code-de-langue)
- [Titre de page](/rgaa/glossaire/titre-de-page)
- [Changement de langue](/rgaa/glossaire/changement-de-langue)

## 🛠️ Utilisation avec eslint-plugin-rgaa

### Configuration
```javascript
// .eslintrc.js
module.exports = {
  plugins: ['rgaa'],
  rules: {
    'rgaa/doctype': 'error',
    'rgaa/lang-attribute': 'warn'
  }
};
```

### Règles disponibles
- `rgaa/doctype` : Type de document
- `rgaa/lang-attribute` : Attribut de langue

## ⚠️ Bonnes pratiques

### Structure
- **HTML valide** : Utiliser un HTML valide
- **Langue** : Déclarer la langue
- **Titre** : Fournir un titre de page

---

*Cette thématique est essentielle pour l'accessibilité web. Les éléments obligatoires sont essentiels pour l'accessibilité.*