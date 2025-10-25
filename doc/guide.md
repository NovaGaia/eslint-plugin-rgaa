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

## 💬 Système de commentaires RGAA

Le plugin supporte un système de commentaires spéciaux pour contrôler explicitement le statut des images (décorative ou informative). Par défaut, **toutes les images sont considérées comme informatives** et sont soumises aux critères RGAA 1.1 et 1.3.

### Syntaxe des commentaires

#### `eslint-rgaa: decorative`
Marque une image comme **décorative**. L'image sera :
- **Ignorée** par RGAA 1.1 (présence d'alternative)
- **Ignorée** par RGAA 1.3 (pertinence d'alternative)
- **Vérifiée** par RGAA 1.2 (marquage décoratif correct)

```jsx
{/* eslint-rgaa: decorative */}
<img src="decoration.png" alt="" role="presentation" />
```

#### `eslint-rgaa: informative`
Marque explicitement une image comme **informative**. L'image sera :
- **Vérifiée** par RGAA 1.1 (présence d'alternative)
- **Vérifiée** par RGAA 1.3 (pertinence d'alternative)
- **Ignorée** par RGAA 1.2 (marquage décoratif)

```jsx
{/* eslint-rgaa: informative */}
<img src="chart.png" alt="Graphique des ventes mensuelles" />
```

#### `eslint-rgaa: ignore`
Ignore complètement une image. L'image sera :
- **Ignorée** par tous les critères RGAA (1.1, 1.2, 1.3)

```jsx
{/* eslint-rgaa: ignore - Image legacy à corriger plus tard */}
<img src="old-logo.png" alt="Logo legacy" />
```

### Règles par défaut

#### Sans commentaire
```jsx
// Par défaut : image informative
<img src="photo.jpg" alt="Photo de profil" />
```
- ✅ Vérifiée par RGAA 1.1
- ❌ Ignorée par RGAA 1.2
- ✅ Vérifiée par RGAA 1.3

#### Avec commentaire décoratif
```jsx
{/* eslint-rgaa: decorative */}
<img src="decoration.png" alt="" />
```
- ❌ Ignorée par RGAA 1.1
- ✅ Vérifiée par RGAA 1.2
- ❌ Ignorée par RGAA 1.3

### Exemples pratiques

#### Image décorative correctement marquée
```jsx
{/* eslint-rgaa: decorative */}
<img src="separator.png" alt="" role="presentation" />
```

#### Image informative avec alternative longue
```jsx
{/* eslint-rgaa: informative */}
<img src="chart.png" alt="Graphique des ventes mensuelles avec évolution positive" />
```

#### Image legacy temporairement ignorée
```jsx
{/* eslint-rgaa: ignore - À corriger dans la prochaine itération */}
<img src="old-banner.jpg" alt="Bannière legacy" />
```

### Avantages du système

1. **Contrôle explicite** : Le développeur peut forcer le statut d'une image
2. **Gestion des cas ambigus** : Quand l'automatique ne suffit pas
3. **Documentation** : Les commentaires servent aussi de documentation
4. **Flexibilité** : Possibilité d'ignorer temporairement certaines images
5. **Logique simple** : Par défaut, tout est informatif sauf indication contraire

### Notes importantes

- Les commentaires doivent être placés **juste avant** l'élément image
- Le système recherche les commentaires dans les **10 lignes précédentes**
- Les commentaires sont **optionnels** - sans commentaire, l'image est considérée comme informative
- Les commentaires fonctionnent avec tous les types d'images : `<img>`, `<area>`, `<object>`, `<embed>`, `<svg>`, `<canvas>`

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
