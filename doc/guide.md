# Guide d'utilisation

Bienvenue dans le guide d'utilisation du plugin ESLint RGAA ! Ce guide vous accompagne dans la configuration et l'utilisation du plugin pour valider l'accessibilité de vos projets web.

## 🚀 Démarrage rapide

### 1. Installation

```bash
npm install --save-dev eslint-plugin-rgaa-html
```

### 2. Configuration de base

Créez un fichier `eslint.config.js` à la racine de votre projet :

```javascript
const rgaaHtmlPlugin = require('eslint-plugin-rgaa-html');

module.exports = [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: { 'rgaa-html': rgaaHtmlPlugin },
    rules: { ...rgaaHtmlPlugin.configs.recommended.rules }
  }
];
```

### 3. Lancement

```bash
npx eslint src/
```

## 📚 Guides détaillés

### [Installation complète](usage/installation)
Guide d'installation détaillé avec toutes les options disponibles.

### [Configuration avancée](usage/configuration)
Configuration complète avec TypeScript, options personnalisées et surcharges locales.

### [Exemples pratiques](examples/)
Exemples de configuration prêts à l'emploi pour différents cas d'usage.

## 🎯 Critères RGAA implémentés

Le plugin implémente actuellement les critères suivants :

- **[RGAA 1.1](rgaa/criteres/1-images/1.1/)** : Présence d'alternatives textuelles
- **[RGAA 1.2](rgaa/criteres/1-images/1.2/)** : Images décoratives  
- **[RGAA 1.3](rgaa/criteres/1-images/1.3/)** : Pertinence des alternatives

## 💬 Système de commentaires RGAA

Le plugin supporte un système de commentaires spéciaux pour contrôler explicitement le statut des images :

### `eslint-rgaa: decorative`
Marque une image comme **décorative** :

```jsx
{/* eslint-rgaa: decorative */}
<img src="decoration.png" alt="" role="presentation" />
```

### `eslint-rgaa: informative`
Marque explicitement une image comme **informative** :

```jsx
{/* eslint-rgaa: informative */}
<img src="chart.png" alt="Graphique des ventes mensuelles" />
```

### `eslint-rgaa: ignore`
Ignore complètement une image :

```jsx
{/* eslint-rgaa: ignore - Image legacy à corriger plus tard */}
<img src="old-logo.png" alt="Logo legacy" />
```

**Par défaut**, toutes les images sont considérées comme **informatives** et sont soumises aux critères RGAA 1.1 et 1.3.

## 🔧 Niveaux de règle par défaut

- **RGAA 1.1** (Présence d'alternatives) : `error` - Bloquant
- **RGAA 1.2** (Images décoratives) : `error` - Bloquant  
- **RGAA 1.3** (Pertinence des alternatives) : `warn` - Suggestion

## 🛠️ Options de configuration

### Longueur minimale des alternatives

```javascript
'rgaa-html/rgaa-1-3': ['warn', { 
  minLength: 30  // Longueur minimale personnalisée (défaut: 25)
}]
```

### URL de documentation personnalisée

```javascript
'rgaa-html/rgaa-1-1': ['error', {
  documentationUrl: 'https://mon-site.com/rgaa/1.1/'
}]
```

## 📖 Ressources supplémentaires

- [Documentation RGAA officielle](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/)
- [Guide d'accessibilité web MDN](https://developer.mozilla.org/fr/docs/Web/Accessibility)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🆘 Besoin d'aide ?

- Consultez la [documentation complète](usage/configuration) pour la configuration
- Regardez les [exemples pratiques](examples/) pour des cas d'usage spécifiques
- Consultez les [critères RGAA](rgaa/criteres/) pour comprendre les règles