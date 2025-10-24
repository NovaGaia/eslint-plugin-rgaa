# Thématique 7 : Scripts

Cette thématique couvre l'accessibilité des scripts JavaScript dans le RGAA.

## 🎯 Objectif

Assurer que tous les scripts sont compatibles avec les technologies d'assistance et contrôlables au clavier.

## 📋 Critères de cette thématique

### [7.1 - Compatibilité des scripts](7.1/)
Chaque script est-il, si nécessaire, compatible avec les technologies d'assistance ?

### [7.2 - Alternatives aux scripts](7.2/)
Pour chaque script ayant une alternative, cette alternative est-elle pertinente ?

### [7.3 - Contrôle clavier des scripts](7.3/)
Chaque script est-il contrôlable par le clavier et par tout dispositif de pointage ?

### [7.4 - Changement de contexte](7.4/)
Pour chaque script qui initie un changement de contexte, l'utilisateur est-il averti ou en a-t-il le contrôle ?

### [7.5 - Messages de statut](7.5/)
Dans chaque page web, les messages de statut sont-ils correctement restitués par les technologies d'assistance ?

## 🔧 Techniques d'implémentation

- **Alternative à script**
- **Contrôle clavier**
- **Changement de contexte**
- **Messages de statut**
- **Compatibilité technologies d'assistance**

## 🔍 Tests et validation

### Outils de test
- **Inspecteur d'éléments** : Vérifier la structure
- **Lecteurs d'écran** : Tester la restitution
- **Navigation clavier** : Vérifier l'accessibilité
- **Outils automatisés** : eslint-plugin-rgaa

### Checklist de validation
[ ] Les scripts sont compatibles avec les TA,[ ] Les alternatives aux scripts sont pertinentes,[ ] Les scripts sont contrôlables au clavier,[ ] Les changements de contexte sont signalés,[ ] Les messages de statut sont restitués

## 📚 Ressources complémentaires

### Documentation officielle
- [WCAG 2.1 - Scripts](https://www.w3.org/WAI/WCAG21/quickref/#scripts)

### Glossaire RGAA
- [Script](/rgaa/glossaire/script)
- [Alternative (à script)](/rgaa/glossaire/alternative-(a-script))
- [Changement de contexte](/rgaa/glossaire/changement-de-contexte)
- [Message de statut](/rgaa/glossaire/message-de-statut)
- [Compatible avec les technologies d'assistance](/rgaa/glossaire/compatible-avec-les-technologies-d'assistance)

## 🛠️ Utilisation avec eslint-plugin-rgaa

### Configuration
```javascript
// .eslintrc.js
module.exports = {
  plugins: ['rgaa'],
  rules: {
    'rgaa/script-alternatives': 'error',
    'rgaa/script-controls': 'warn'
  }
};
```

### Règles disponibles
- `rgaa/script-alternatives` : Alternatives aux scripts
- `rgaa/script-controls` : Contrôles des scripts

## ⚠️ Bonnes pratiques

### Scripts
- **Alternatives** : Fournir des alternatives
- **Contrôles** : Rendre les scripts contrôlables
- **Compatibilité** : Vérifier la compatibilité avec les TA

---

*Cette thématique est essentielle pour l'accessibilité web. Les scripts doivent être compatibles avec les technologies d'assistance.*