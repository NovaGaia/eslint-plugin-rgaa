# Thématique 11 : Formulaires

Cette thématique couvre l'accessibilité des formulaires dans le RGAA.

## 🎯 Objectif

Assurer que tous les formulaires sont accessibles et utilisables par tous les utilisateurs.

## 📋 Critères de cette thématique

### [11.1 - Étiquettes des champs](11.1/)
Chaque champ de formulaire a-t-il une étiquette ?

### [11.2 - Pertinence des étiquettes](11.2/)
Chaque étiquette associée à un champ de formulaire est-elle pertinente ?

### [11.3 - Cohérence des étiquettes](11.3/)
Dans chaque formulaire, chaque étiquette associée à un champ de formulaire ayant la même fonction et répétée plusieurs fois dans une même page ou dans un ensemble de pages est-elle cohérente ?

### [11.4 - Étiquettes accolées](11.4/)
Dans chaque formulaire, chaque étiquette de champ et son champ associé sont-ils accolés ?

### [11.5 - Regroupement des champs](11.5/)
Dans chaque formulaire, les champs de même nature sont-ils regroupés, si nécessaire ?

### [11.6 - Légendes des regroupements](11.6/)
Dans chaque formulaire, chaque regroupement de champs de même nature a-t-il une légende ?

### [11.7 - Pertinence des légendes](11.7/)
Dans chaque formulaire, chaque légende associée à un regroupement de champs de même nature est-elle pertinente ?

### [11.8 - Regroupement des listes](11.8/)
Dans chaque formulaire, les items de même nature d'une liste de choix sont-ils regroupés de manière pertinente ?

### [11.9 - Intitulés des boutons](11.9/)
Dans chaque formulaire, l'intitulé de chaque bouton est-il pertinent ?

### [11.10 - Contrôle de saisie](11.10/)
Dans chaque formulaire, le contrôle de saisie est-il utilisé de manière pertinente ?

### [11.11 - Suggestions de correction](11.11/)
Dans chaque formulaire, le contrôle de saisie est-il accompagné, si nécessaire, de suggestions facilitant la correction des erreurs de saisie ?

### [11.12 - Modification des données](11.12/)
Pour chaque formulaire qui modifie ou supprime des données, ou qui transmet des réponses à un test ou à un examen, ou dont la validation a des conséquences financières ou juridiques, les données saisies peuvent-elles être modifiées, mises à jour ou récupérées par l'utilisateur ?

### [11.13 - Finalité des champs](11.13/)
La finalité d'un champ de saisie peut-elle être déduite pour faciliter le remplissage automatique des champs avec les données de l'utilisateur ?

## 🔧 Techniques d'implémentation

- **Étiquettes de champs**
- **Regroupement de champs**
- **Contrôle de saisie**
- **Suggestions d'erreur**
- **Modification des données**

## 🔍 Tests et validation

### Outils de test
- **Inspecteur d'éléments** : Vérifier la structure
- **Lecteurs d'écran** : Tester la restitution
- **Navigation clavier** : Vérifier l'accessibilité
- **Outils automatisés** : eslint-plugin-rgaa

### Checklist de validation
[ ] Tous les champs ont des étiquettes,[ ] Les étiquettes sont pertinentes,[ ] Les étiquettes sont cohérentes,[ ] Les champs sont regroupés si nécessaire,[ ] Les légendes sont présentes

## 📚 Ressources complémentaires

### Documentation officielle
- [WCAG 2.1 - Forms](https://www.w3.org/WAI/WCAG21/quickref/#forms)

### Glossaire RGAA
- [Formulaire](../../glossaire/formulaire)
- [Champ de saisie de formulaire](../../glossaire/champ-de-saisie-de-formulaire)
- [Étiquette de champ de formulaire](../../glossaire/etiquette-de-champ-de-formulaire)
- [Bouton (formulaire)](../../glossaire/bouton-(formulaire))
- [Contrôle de saisie (formulaire)](../../glossaire/controle-de-saisie-(formulaire))

## 🛠️ Utilisation avec eslint-plugin-rgaa

### Configuration
```javascript
// .eslintrc.js
module.exports = {
  plugins: ['rgaa'],
  rules: {
    'rgaa/form-labels': 'error',
    'rgaa/form-grouping': 'warn'
  }
};
```

### Règles disponibles
- `rgaa/form-labels` : Étiquettes de formulaires
- `rgaa/form-grouping` : Regroupement de champs

## ⚠️ Bonnes pratiques

### Formulaires
- **Étiquettes** : Associer les étiquettes aux champs
- **Regroupement** : Regrouper les champs similaires
- **Validation** : Fournir un feedback de validation

---

*Cette thématique est essentielle pour l'accessibilité web. Les formulaires doivent être accessibles et utilisables par tous.*