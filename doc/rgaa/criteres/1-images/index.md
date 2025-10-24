# Thématique 1 : Images

Cette thématique couvre tous les aspects liés aux images et à leur accessibilité dans le RGAA.

## 🎯 Objectif

Assurer que toutes les images présentes sur un site web sont accessibles aux utilisateurs de technologies d'assistance, en fournissant des alternatives textuelles appropriées selon le contexte et la fonction de l'image.

## 📋 Critères de cette thématique

### [1.1 - Images porteuses d'information](1.1/)
Chaque image porteuse d'information a-t-elle une alternative textuelle ?

### [1.2 - Images de décoration](1.2/)
Chaque image de décoration est-elle correctement ignorée par les technologies d'assistance ?

### [1.3 - Images texte](1.3/)
Pour chaque image porteuse d'information ayant une alternative textuelle, cette alternative est-elle pertinente ?

### [1.4 - Images légendées](1.4/)
Pour chaque image utilisée comme CAPTCHA ou comme image-test, ayant une alternative textuelle, cette alternative permet-elle d'identifier la nature et la fonction de l'image ?

### [1.5 - Images de test](1.5/)
Pour chaque image utilisée comme CAPTCHA, une solution d'accès alternatif au contenu ou à la fonction du CAPTCHA est-elle présente ?

### [1.6 - Images vectorielles](1.6/)
Chaque image porteuse d'information a-t-elle, si nécessaire, une description détaillée ?

### [1.7 - Images bitmap](1.7/)
Pour chaque image porteuse d'information ayant une description détaillée, cette description est-elle pertinente ?

### [1.8 - Images avec légende](1.8/)
Chaque image texte porteuse d'information, en l'absence d'un mécanisme de remplacement, doit si possible être remplacée par du texte stylé. Cette règle est-elle respectée ?

### [1.9 - Images de fond](1.9/)
Chaque légende d'image est-elle, si nécessaire, correctement reliée à l'image correspondante ?

## 🔧 Techniques d'implémentation

### Alternative textuelle
- **Attribut `alt`** : Pour les images `<img>`
- **Attribut `aria-label`** : Pour les images avec rôle ARIA
- **Attribut `aria-labelledby`** : Pour référencer un texte externe
- **Attribut `title`** : En complément de `alt`

### Images décoratives
```html
<!-- Image décorative -->
<img src="decoration.png" alt="">

<!-- Image décorative avec rôle ARIA -->
<div role="img" aria-hidden="true">
  <img src="decoration.png" alt="">
</div>
```

### Images porteuses d'information
```html
<!-- Image informative -->
<img src="chart.png" alt="Graphique montrant l'évolution des ventes sur 5 ans">

<!-- Image avec description détaillée -->
<img src="diagram.png" alt="Schéma du processus" aria-describedby="diagram-desc">
<div id="diagram-desc">Description détaillée du schéma...</div>
```

## 🎨 Types d'images couverts

### Images bitmap
- **Format** : PNG, JPG, GIF, WebP
- **Balise** : `<img>`
- **Alternative** : Attribut `alt`

### Images vectorielles
- **Format** : SVG
- **Balise** : `<svg>`
- **Alternative** : Attribut `aria-label` ou élément `<title>`

### Images objets
- **Format** : PDF, Flash, etc.
- **Balise** : `<object>`
- **Alternative** : Contenu alternatif ou lien adjacent

### Images canvas
- **Format** : Canvas HTML5
- **Balise** : `<canvas>`
- **Alternative** : Contenu entre les balises ou attribut `aria-label`

## 🔍 Tests et validation

### Outils de test
- **Inspecteur d'éléments** : Vérifier la présence des attributs
- **Lecteurs d'écran** : Tester la restitution
- **Outils automatisés** : eslint-plugin-rgaa

### Checklist de validation
- [ ] Toutes les images ont un attribut `alt`
- [ ] Les images décoratives ont `alt=""`
- [ ] Les images informatives ont un `alt` descriptif
- [ ] Les images complexes ont une description détaillée
- [ ] Les images CAPTCHA ont une alternative

## 📚 Ressources complémentaires

### Documentation officielle
- [WCAG 2.1 - Images](https://www.w3.org/WAI/WCAG21/quickref/#images)
- [Techniques WCAG pour les images](https://www.w3.org/WAI/WCAG21/Techniques/html/H36)

### Glossaire RGAA
- [Alternative textuelle (image)](/rgaa/glossaire/alternative-textuelle-image)
- [Image de décoration](/rgaa/glossaire/image-de-decoration)
- [Image porteuse d'information](/rgaa/glossaire/image-porteuse-d-information)
- [Description détaillée (image)](/rgaa/glossaire/description-detaillee-image)

## 🛠️ Utilisation avec eslint-plugin-rgaa

### Installation
```bash
pnpm add --dev eslint-plugin-rgaa
```

### Configuration
```javascript
// .eslintrc.js
module.exports = {
  plugins: ['rgaa'],
  rules: {
    'rgaa/alt-text': 'error',
    'rgaa/decorative-images': 'warn',
    'rgaa/image-descriptions': 'error'
  }
};
```

### Règles disponibles
- `rgaa/alt-text` : Vérification des alternatives textuelles
- `rgaa/decorative-images` : Validation des images décoratives
- `rgaa/image-descriptions` : Contrôle des descriptions détaillées
- `rgaa/captcha-alternatives` : Alternatives aux CAPTCHA

---

*Cette thématique est essentielle pour l'accessibilité web. Une image sans alternative textuelle est inaccessible aux utilisateurs de technologies d'assistance.*
