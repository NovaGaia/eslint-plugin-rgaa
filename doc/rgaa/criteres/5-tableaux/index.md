# Thématique 5 : Tableaux

Cette thématique couvre l'accessibilité des tableaux de données dans le RGAA.

## 🎯 Objectif

Assurer que tous les tableaux de données sont correctement structurés et accessibles aux utilisateurs de technologies d'assistance.

## 📋 Critères de cette thématique

### [5.1 - Résumé des tableaux complexes](5.1/)
Chaque tableau de données complexe a-t-il un résumé ?

### [5.2 - Pertinence du résumé](5.2/)
Pour chaque tableau de données complexe ayant un résumé, celui-ci est-il pertinent ?

### [5.3 - Tableaux de mise en forme](5.3/)
Pour chaque tableau de mise en forme, le contenu linéarisé reste-t-il compréhensible ?

### [5.4 - Titre des tableaux](5.4/)
Pour chaque tableau de données ayant un titre, le titre est-il correctement associé au tableau de données ?

### [5.5 - Pertinence du titre](5.5/)
Pour chaque tableau de données ayant un titre, celui-ci est-il pertinent ?

### [5.6 - En-têtes de colonnes et lignes](5.6/)
Pour chaque tableau de données, chaque en-tête de colonne et chaque en-tête de ligne sont-ils correctement déclarés ?

### [5.7 - Association cellules-en-têtes](5.7/)
Pour chaque tableau de données, la technique appropriée permettant d'associer chaque cellule avec ses en-têtes est-elle utilisée ?

### [5.8 - Tableaux de mise en forme](5.8/)
Chaque tableau de mise en forme ne doit pas utiliser d'éléments propres aux tableaux de données. Cette règle est-elle respectée ?

## 🔧 Techniques d'implémentation

- **Résumé de tableau**
- **En-têtes de colonnes et lignes**
- **Association cellules-en-têtes**
- **Tableaux de mise en forme**
- **Linéarisation**

## 🔍 Tests et validation

### Outils de test
- **Inspecteur d'éléments** : Vérifier la structure
- **Lecteurs d'écran** : Tester la restitution
- **Navigation clavier** : Vérifier l'accessibilité
- **Outils automatisés** : eslint-plugin-rgaa

### Checklist de validation
[ ] Les tableaux complexes ont un résumé,[ ] Les en-têtes sont correctement déclarés,[ ] Les cellules sont associées aux en-têtes,[ ] Les tableaux de mise en forme sont corrects,[ ] La linéarisation est compréhensible

## 📚 Ressources complémentaires

### Documentation officielle
- [WCAG 2.1 - Tables](https://www.w3.org/WAI/WCAG21/quickref/#tables)

### Glossaire RGAA
- [Tableau de données](/rgaa/glossaire/tableau-de-donnees)
- [Tableau de données complexe](/rgaa/glossaire/tableau-de-donnees-complexe)
- [Tableau de mise en forme](/rgaa/glossaire/tableau-de-mise-en-forme)
- [En-tête de colonne ou de ligne](/rgaa/glossaire/en-tete-de-colonne-ou-de-ligne)
- [Résumé (de tableau)](/rgaa/glossaire/resume-de-tableau)

## 🛠️ Utilisation avec eslint-plugin-rgaa

### Configuration
```javascript
// .eslintrc.js
module.exports = {
  plugins: ['rgaa'],
  rules: {
    'rgaa/table-headers': 'error',
    'rgaa/table-summary': 'warn'
  }
};
```

### Règles disponibles
- `rgaa/table-headers` : En-têtes de tableaux
- `rgaa/table-summary` : Résumés de tableaux

## ⚠️ Bonnes pratiques

### Tableaux
- **Structure** : Utiliser la bonne structure HTML
- **En-têtes** : Déclarer correctement les en-têtes
- **Résumés** : Fournir des résumés pour les tableaux complexes

---

*Cette thématique est essentielle pour l'accessibilité web. Les tableaux doivent être correctement structurés pour être accessibles.*