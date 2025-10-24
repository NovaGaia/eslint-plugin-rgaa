# Thématique 4 : Multimédia

Cette thématique couvre l'accessibilité des contenus multimédia (vidéos, audios) dans le RGAA.

## 🎯 Objectif

Assurer que tous les contenus multimédia sont accessibles aux utilisateurs de technologies d'assistance, avec des alternatives appropriées.

## 📋 Critères de cette thématique

### [4.1 - Médias temporels pré-enregistrés](4.1/)
Chaque média temporel pré-enregistré a-t-il, si nécessaire, une transcription textuelle ou une audiodescription ?

### [4.2 - Transcriptions et audiodescriptions](4.2/)
Pour chaque média temporel pré-enregistré ayant une transcription textuelle ou une audiodescription synchronisée, celles-ci sont-elles pertinentes ?

### [4.3 - Sous-titres synchronisés](4.3/)
Chaque média temporel synchronisé pré-enregistré a-t-il, si nécessaire, des sous-titres synchronisés ?

### [4.4 - Pertinence des sous-titres](4.4/)
Pour chaque média temporel synchronisé pré-enregistré ayant des sous-titres synchronisés, ces sous-titres sont-ils pertinents ?

### [4.5 - Audiodescription synchronisée](4.5/)
Chaque média temporel pré-enregistré a-t-il, si nécessaire, une audiodescription synchronisée ?

### [4.6 - Pertinence de l'audiodescription](4.6/)
Pour chaque média temporel pré-enregistré ayant une audiodescription synchronisée, celle-ci est-elle pertinente ?

### [4.7 - Identification des médias](4.7/)
Chaque média temporel est-il clairement identifiable ?

### [4.8 - Alternatives aux médias non temporels](4.8/)
Chaque média non temporel a-t-il, si nécessaire, une alternative ?

### [4.9 - Pertinence des alternatives](4.9/)
Pour chaque média non temporel ayant une alternative, cette alternative est-elle pertinente ?

### [4.10 - Contrôle des sons automatiques](4.10/)
Chaque son déclenché automatiquement est-il contrôlable par l'utilisateur ?

### [4.11 - Contrôle clavier des médias](4.11/)
La consultation de chaque média temporel est-elle, si nécessaire, contrôlable par le clavier et tout dispositif de pointage ?

### [4.12 - Contrôle clavier des médias non temporels](4.12/)
La consultation de chaque média non temporel est-elle contrôlable par le clavier et tout dispositif de pointage ?

### [4.13 - Compatibilité avec les technologies d'assistance](4.13/)
Chaque média temporel et non temporel est-il compatible avec les technologies d'assistance ?

## 🔧 Techniques d'implémentation

- **Transcription textuelle**
- **Audiodescription synchronisée**
- **Sous-titres synchronisés**
- **Contrôle clavier**
- **Alternatives textuelles**

## 🔍 Tests et validation

### Outils de test
- **Inspecteur d'éléments** : Vérifier la structure
- **Lecteurs d'écran** : Tester la restitution
- **Navigation clavier** : Vérifier l'accessibilité
- **Outils automatisés** : eslint-plugin-rgaa

### Checklist de validation
[ ] Tous les médias ont des alternatives,[ ] Les transcriptions sont pertinentes,[ ] Les sous-titres sont synchronisés,[ ] Les audiodescriptions sont pertinentes,[ ] Les médias sont contrôlables au clavier

## 📚 Ressources complémentaires

### Documentation officielle
- [WCAG 2.1 - Media](https://www.w3.org/WAI/WCAG21/quickref/#media)

### Glossaire RGAA
- [Média temporel (type son, vidéo et synchronisé)](/rgaa/glossaire/media-temporel-type-son-video-et-synchronise)
- [Média non temporel](/rgaa/glossaire/media-non-temporel)
- [Transcription textuelle (média temporel)](/rgaa/glossaire/transcription-textuelle-media-temporel)
- [Audiodescription synchronisée (média temporel)](/rgaa/glossaire/audiodescription-synchronisee-media-temporel)
- [Sous-titres synchronisés (objet multimédia)](/rgaa/glossaire/sous-titres-synchronises-objet-multimedia)

## 🛠️ Utilisation avec eslint-plugin-rgaa

### Configuration
```javascript
// .eslintrc.js
module.exports = {
  plugins: ['rgaa'],
  rules: {
    'rgaa/media-alternatives': 'error',
    'rgaa/media-controls': 'warn'
  }
};
```

### Règles disponibles
- `rgaa/media-alternatives` : Alternatives aux médias
- `rgaa/media-controls` : Contrôles des médias

## ⚠️ Bonnes pratiques

### Médias
- **Alternatives** : Toujours fournir des alternatives
- **Synchronisation** : Vérifier la synchronisation
- **Contrôles** : Rendre les médias contrôlables

---

*Cette thématique est essentielle pour l'accessibilité web. Les contenus multimédia doivent être accessibles à tous les utilisateurs.*