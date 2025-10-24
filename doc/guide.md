# Guide d'utilisation

Ce guide vous accompagne dans la configuration et l'utilisation du plugin eslint-plugin-rgaa.

## 📋 Prérequis

- Node.js 20+ 
- ESLint 9+
- Un projet web (HTML, React, Vue, etc.)

## 🔧 Installation

### Installation via pnpm (recommandé)

```bash
pnpm add --dev eslint-plugin-rgaa
```

### Installation via npm

```bash
npm install --save-dev eslint-plugin-rgaa
```

### Installation via yarn

```bash
yarn add --dev eslint-plugin-rgaa
```

## ⚙️ Configuration

### Configuration de base

Créez un fichier `.eslintrc.js` à la racine de votre projet :

```javascript
module.exports = {
  plugins: ['rgaa'],
  rules: {
    // Règles de base pour l'accessibilité
    'rgaa/alt-text': 'error',
    'rgaa/heading-hierarchy': 'warn',
    'rgaa/color-contrast': 'error',
    'rgaa/keyboard-navigation': 'error',
    'rgaa/focus-management': 'warn'
  }
};
```

### Configuration avancée

```javascript
module.exports = {
  plugins: ['rgaa'],
  rules: {
    'rgaa/alt-text': ['error', {
      'require-description': true,
      'skip-decorative': true
    }],
    'rgaa/color-contrast': ['error', {
      'level': 'AA',
      'include-background': true
    }],
    'rgaa/heading-hierarchy': ['warn', {
      'allow-skip': false,
      'require-h1': true
    }]
  }
};
```

## 🎯 Règles disponibles

### Images et médias
- `rgaa/alt-text` - Vérification des textes alternatifs
- `rgaa/captions` - Validation des sous-titres
- `rgaa/transcripts` - Vérification des transcriptions

### Navigation et structure
- `rgaa/heading-hierarchy` - Hiérarchie des titres
- `rgaa/landmarks` - Points de repère ARIA
- `rgaa/skip-links` - Liens d'évitement

### Couleurs et contrastes
- `rgaa/color-contrast` - Contraste des couleurs
- `rgaa/color-alone` - Information par la couleur uniquement

### Interaction et clavier
- `rgaa/keyboard-navigation` - Navigation au clavier
- `rgaa/focus-management` - Gestion du focus
- `rgaa/clickable-area` - Zone cliquable

## 🔍 Exemples d'utilisation

### Validation d'images

```html
<!-- ❌ Erreur : image sans alt -->
<img src="logo.png">

<!-- ✅ Correct : image avec alt -->
<img src="logo.png" alt="Logo de l'entreprise">

<!-- ✅ Correct : image décorative -->
<img src="decoration.png" alt="">
```

### Validation des titres

```html
<!-- ❌ Erreur : saut de niveau -->
<h1>Titre principal</h1>
<h3>Sous-titre</h3> <!-- Saut du h2 -->

<!-- ✅ Correct : hiérarchie respectée -->
<h1>Titre principal</h1>
<h2>Sous-titre</h2>
<h3>Sous-sous-titre</h3>
```

## 🚨 Messages d'erreur

Le plugin fournit des messages d'erreur détaillés avec des liens vers la documentation :

```
error: Image sans texte alternatif (RGAA 1.1)
  → Documentation: https://docs.example.com/rgaa/1.1
  → Ligne 42: <img src="photo.jpg">
```

## 🔧 Intégration avec les frameworks

### React

```javascript
// .eslintrc.js
module.exports = {
  plugins: ['rgaa'],
  rules: {
    'rgaa/alt-text': 'error',
    'rgaa/aria-labels': 'error'
  }
};
```

### Vue.js

```javascript
// .eslintrc.js
module.exports = {
  plugins: ['rgaa'],
  rules: {
    'rgaa/vue-aria': 'error',
    'rgaa/vue-alt': 'error'
  }
};
```

## 📊 Rapports et métriques

Le plugin peut générer des rapports d'accessibilité :

```bash
# Génération d'un rapport HTML
npx eslint . --format html --output-file accessibility-report.html

# Rapport JSON pour intégration CI/CD
npx eslint . --format json --output-file accessibility-report.json
```

## 🛠️ Dépannage

### Problèmes courants

1. **Règles non appliquées**
   - Vérifiez que le plugin est bien installé
   - Vérifiez la configuration ESLint

2. **Faux positifs**
   - Utilisez les options de configuration
   - Ajoutez des commentaires ESLint pour ignorer des cas spécifiques

3. **Performance**
   - Désactivez les règles non nécessaires
   - Utilisez `.eslintignore` pour exclure certains fichiers

## 📚 Ressources supplémentaires

- [Documentation RGAA officielle](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/)
- [Guide d'accessibilité web MDN](https://developer.mozilla.org/fr/docs/Web/Accessibility)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
