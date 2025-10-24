# Thématique 10 : Présentation de l'information

Cette thématique couvre la présentation et la mise en forme de l'information dans le RGAA.

## 🎯 Objectif

Assurer que la présentation de l'information est accessible et ne dépend pas uniquement de la mise en forme.

## 📋 Critères de cette thématique

### [10.1 - Feuilles de styles](10.1/)
Dans le site web, des feuilles de styles sont-elles utilisées pour contrôler la présentation de l'information ?

### [10.2 - Contenu sans styles](10.2/)
Dans chaque page web, le contenu visible porteur d'information reste-t-il présent lorsque les feuilles de styles sont désactivées ?

### [10.3 - Compréhension sans styles](10.3/)
Dans chaque page web, l'information reste-t-elle compréhensible lorsque les feuilles de styles sont désactivées ?

### [10.4 - Taille des caractères](10.4/)
Dans chaque page web, le texte reste-t-il lisible lorsque la taille des caractères est augmentée jusqu'à 200 %, au moins ?

### [10.5 - Déclarations CSS](10.5/)
Dans chaque page web, les déclarations CSS de couleurs de fond d'élément et de police sont-elles correctement utilisées ?

### [10.6 - Liens visibles](10.6/)
Dans chaque page web, chaque lien dont la nature n'est pas évidente est-il visible par rapport au texte environnant ?

### [10.7 - Prise de focus](10.7/)
Dans chaque page web, pour chaque élément recevant le focus, la prise de focus est-elle visible ?

### [10.8 - Contenu caché](10.8/)
Pour chaque page web, les contenus cachés ont-ils vocation à être ignorés par les technologies d'assistance ?

### [10.9 - Information par la forme](10.9/)
Dans chaque page web, l'information ne doit pas être donnée uniquement par la forme, taille ou position. Cette règle est-elle respectée ?

### [10.10 - Information par la forme (implémentation)](10.10/)
Dans chaque page web, l'information ne doit pas être donnée par la forme, taille ou position uniquement. Cette règle est-elle implémentée de façon pertinente ?

### [10.11 - Responsive design](10.11/)
Dans chaque page web, les contenus peuvent-ils être présentés sans perte d'information ou de fonctionnalité et sans avoir recours soit à un défilement vertical pour une fenêtre ayant une hauteur de 256 px, soit à un défilement horizontal pour une fenêtre ayant une largeur de 320 px ?

### [10.12 - Espacement du texte](10.12/)
Dans chaque page web, les propriétés d'espacement du texte peuvent-elles être redéfinies par l'utilisateur sans perte de contenu ou de fonctionnalité ?

### [10.13 - Contenus additionnels](10.13/)
Dans chaque page web, les contenus additionnels apparaissant à la prise de focus ou au survol d'un composant d'interface sont-ils contrôlables par l'utilisateur ?

### [10.14 - Contenus CSS](10.14/)
Dans chaque page web, les contenus additionnels apparaissant via les styles CSS uniquement peuvent-ils être rendus visibles au clavier et par tout dispositif de pointage ?

## 🔧 Techniques d'implémentation

- **Feuilles de styles**
- **Responsive design**
- **Focus visible**
- **Contenu caché**
- **Espacement du texte**

## 🔍 Tests et validation

### Outils de test
- **Inspecteur d'éléments** : Vérifier la structure
- **Lecteurs d'écran** : Tester la restitution
- **Navigation clavier** : Vérifier l'accessibilité
- **Outils automatisés** : eslint-plugin-rgaa

### Checklist de validation
[ ] Les styles CSS sont utilisés,[ ] Le contenu reste présent sans styles,[ ] L'information reste compréhensible,[ ] Le texte est lisible à 200%,[ ] Les déclarations CSS sont correctes

## 📚 Ressources complémentaires

### Documentation officielle
- [WCAG 2.1 - Presentation](https://www.w3.org/WAI/WCAG21/quickref/#presentation)

### Glossaire RGAA
- [Présentation de l'information](/rgaa/glossaire/presentation-de-l-information)
- [Feuille de style](/rgaa/glossaire/feuille-de-style)
- [Contenu visible](/rgaa/glossaire/contenu-visible)
- [Contenu caché](/rgaa/glossaire/contenu-cache)
- [Prise de focus](/rgaa/glossaire/prise-de-focus)

## 🛠️ Utilisation avec eslint-plugin-rgaa

### Configuration
```javascript
// .eslintrc.js
module.exports = {
  plugins: ['rgaa'],
  rules: {
    'rgaa/css-presentation': 'error',
    'rgaa/focus-visible': 'warn'
  }
};
```

### Règles disponibles
- `rgaa/css-presentation` : Présentation CSS
- `rgaa/focus-visible` : Focus visible

## ⚠️ Bonnes pratiques

### Présentation
- **CSS** : Utiliser CSS pour la présentation
- **Responsive** : Concevoir responsive
- **Focus** : Rendre le focus visible

---

*Cette thématique est essentielle pour l'accessibilité web. La présentation ne doit pas être un obstacle à l'accessibilité.*