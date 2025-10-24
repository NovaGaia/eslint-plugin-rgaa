# Thématique 2 : Cadres

Cette thématique couvre l'accessibilité des cadres (frames) et iframes dans le RGAA.

## 🎯 Objectif

Assurer que tous les cadres présents sur un site web sont correctement identifiés et accessibles aux utilisateurs de technologies d'assistance.

## 📋 Critères de cette thématique

### [2.1 - Cadres avec titre](2.1/)
Chaque cadre a-t-il un titre de cadre ?

### [2.2 - Cadres sans titre](2.2/)
Pour chaque cadre ayant un titre de cadre, ce titre de cadre est-il pertinent ?

## 🔧 Techniques d'implémentation

### Titre de cadre
- **Attribut `title`** : Pour les éléments `<frame>` et `<iframe>`
- **Attribut `aria-label`** : Alternative moderne
- **Attribut `aria-labelledby`** : Pour référencer un titre externe

### Exemples d'implémentation

#### Cadre avec titre
```html
<!-- Cadre avec titre descriptif -->
<iframe src="widget.html" title="Widget de météo"></iframe>

<!-- Cadre avec aria-label -->
<iframe src="chat.html" aria-label="Chat en ligne"></iframe>

<!-- Cadre avec aria-labelledby -->
<iframe src="map.html" aria-labelledby="map-title"></iframe>
<h3 id="map-title">Carte interactive</h3>
```

#### Titre pertinent
```html
<!-- ✅ Bon : titre descriptif -->
<iframe src="weather.html" title="Prévisions météo pour Paris"></iframe>

<!-- ❌ Mauvais : titre non descriptif -->
<iframe src="weather.html" title="Cadre 1"></iframe>
```

## 🎨 Types de cadres couverts

### Frames HTML
- **Balise** : `<frame>`
- **Contexte** : `<frameset>`
- **Alternative** : Attribut `title`

### Iframes
- **Balise** : `<iframe>`
- **Contexte** : Intégration de contenus externes
- **Alternative** : Attribut `title` ou `aria-label`

### Cadres avec contenu dynamique
- **Widgets** : Intégration de services tiers
- **Cartes** : Google Maps, OpenStreetMap
- **Chats** : Systèmes de messagerie
- **Médias** : Lecteurs vidéo/audio

## 🔍 Tests et validation

### Outils de test
- **Inspecteur d'éléments** : Vérifier la présence des attributs
- **Lecteurs d'écran** : Tester la restitution du titre
- **Navigation clavier** : Vérifier l'accessibilité

### Checklist de validation
- [ ] Tous les cadres ont un attribut `title`
- [ ] Les titres sont descriptifs et pertinents
- [ ] Les cadres sont navigables au clavier
- [ ] Le contenu du cadre est accessible

## 📚 Ressources complémentaires

### Documentation officielle
- [WCAG 2.1 - Frames](https://www.w3.org/WAI/WCAG21/quickref/#frames)
- [Techniques WCAG pour les frames](https://www.w3.org/WAI/WCAG21/Techniques/html/H64)

### Glossaire RGAA
- [Cadre](../../glossaire/cadre)
- [Titre de cadre](../../glossaire/titre-de-cadre)

## 🛠️ Utilisation avec eslint-plugin-rgaa

### Configuration
```javascript
// .eslintrc.js
module.exports = {
  plugins: ['rgaa'],
  rules: {
    'rgaa/frame-titles': 'error',
    'rgaa/frame-relevance': 'warn'
  }
};
```

### Règles disponibles
- `rgaa/frame-titles` : Vérification des titres de cadres
- `rgaa/frame-relevance` : Validation de la pertinence des titres

## ⚠️ Bonnes pratiques

### Titres descriptifs
- **Éviter** : "Cadre 1", "Widget", "Iframe"
- **Préférer** : "Prévisions météo", "Chat en ligne", "Carte interactive"

### Navigation
- **Focus** : Les cadres doivent être accessibles au clavier
- **Contenu** : Le contenu du cadre doit être accessible
- **Chargement** : Gérer les cas de chargement échoué

### Alternatives
- **Contenu statique** : Proposer une alternative textuelle
- **Contenu dynamique** : Fournir un lien vers le contenu complet

---

*Les cadres sont souvent utilisés pour intégrer du contenu externe. Il est essentiel qu'ils soient correctement identifiés pour les utilisateurs de technologies d'assistance.*
