# Thématique 13 : Consultation

Cette thématique couvre l'accessibilité de la consultation et du téléchargement dans le RGAA.

## 🎯 Objectif

Assurer que la consultation et le téléchargement de contenus sont accessibles à tous les utilisateurs.

## 📋 Critères de cette thématique

### [13.1 - Contrôle des limites de temps](13.1/)
Pour chaque page web, l'utilisateur a-t-il le contrôle de chaque limite de temps modifiant le contenu ?

### [13.2 - Ouverture de fenêtres](13.2/)
Dans chaque page web, l'ouverture d'une nouvelle fenêtre ne doit pas être déclenchée sans action de l'utilisateur. Cette règle est-elle respectée ?

### [13.3 - Documents bureautiques](13.3/)
Dans chaque page web, chaque document bureautique en téléchargement possède-t-il, si nécessaire, une version accessible ?

### [13.4 - Versions accessibles](13.4/)
Pour chaque document bureautique ayant une version accessible, cette version offre-t-elle la même information ?

### [13.5 - Contenu cryptique](13.5/)
Dans chaque page web, chaque contenu cryptique a-t-il une alternative ?

### [13.6 - Pertinence des alternatives](13.6/)
Dans chaque page web, pour chaque contenu cryptique ayant une alternative, cette alternative est-elle pertinente ?

### [13.7 - Effets de flash](13.7/)
Dans chaque page web, les changements brusques de luminosité ou les effets de flash sont-ils correctement utilisés ?

### [13.8 - Contenu en mouvement](13.8/)
Dans chaque page web, chaque contenu en mouvement ou clignotant est-il contrôlable par l'utilisateur ?

### [13.9 - Orientation de l'écran](13.9/)
Dans chaque page web, le contenu proposé est-il consultable quelle que soit l'orientation de l'écran ?

### [13.10 - Gestes complexes](13.10/)
Dans chaque page web, les fonctionnalités utilisables au moyen d'un geste complexe peuvent-elles être également disponibles au moyen d'un geste simple ?

### [13.11 - Annulation des actions](13.11/)
Dans chaque page web, les actions déclenchées au moyen d'un dispositif de pointage sur un point unique de l'écran peuvent-elles faire l'objet d'une annulation ?

### [13.12 - Mouvement de l'appareil](13.12/)
Dans chaque page web, les fonctionnalités qui impliquent un mouvement de l'appareil ou vers l'appareil peuvent-elles être satisfaites de manière alternative ?

## 🔧 Techniques d'implémentation

- **Contrôle des limites de temps**
- **Versions accessibles**
- **Alternatives au contenu cryptique**
- **Contrôle du contenu en mouvement**
- **Gestes simples**

## 🔍 Tests et validation

### Outils de test
- **Inspecteur d'éléments** : Vérifier la structure
- **Lecteurs d'écran** : Tester la restitution
- **Navigation clavier** : Vérifier l'accessibilité
- **Outils automatisés** : eslint-plugin-rgaa

### Checklist de validation
[ ] Les limites de temps sont contrôlables,[ ] Les nouvelles fenêtres sont signalées,[ ] Les documents ont des versions accessibles,[ ] Le contenu cryptique a des alternatives,[ ] Les effets de flash sont contrôlés

## 📚 Ressources complémentaires

### Documentation officielle
- [WCAG 2.1 - Timing](https://www.w3.org/WAI/WCAG21/quickref/#timing)

### Glossaire RGAA
- [Version accessible (pour un document en téléchargement)](../../glossaire/version-accessible-(pour-un-document-en-telechargement))
- [Contenu cryptique](../../glossaire/contenu-cryptique)
- [Contrôle (contenu en mouvement ou clignotant)](../../glossaire/controle-(contenu-en-mouvement-ou-clignotant))
- [Gestes complexes et gestes simples](../../glossaire/gestes-complexes-et-gestes-simples)

## 🛠️ Utilisation avec eslint-plugin-rgaa

### Configuration
```javascript
// .eslintrc.js
module.exports = {
  plugins: ['rgaa'],
  rules: {
    'rgaa/timing-controls': 'error',
    'rgaa/motion-controls': 'warn'
  }
};
```

### Règles disponibles
- `rgaa/timing-controls` : Contrôles de timing
- `rgaa/motion-controls` : Contrôles de mouvement

## ⚠️ Bonnes pratiques

### Consultation
- **Contrôles** : Rendre les contrôles accessibles
- **Alternatives** : Fournir des alternatives
- **Timing** : Contrôler les limites de temps

---

*Cette thématique est essentielle pour l'accessibilité web. La consultation doit être accessible à tous les utilisateurs.*