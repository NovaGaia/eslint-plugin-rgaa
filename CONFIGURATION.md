# Configuration ESLint RGAA

## Configuration par défaut

Le plugin RGAA fournit une configuration `recommended` avec des niveaux de règle appropriés :

```javascript
const rgaaHtmlPlugin = require('eslint-plugin-rgaa-html');

module.exports = [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      'rgaa-html': rgaaHtmlPlugin,
    },
    rules: {
      // Configuration RGAA par défaut
      ...rgaaHtmlPlugin.configs.recommended.rules,
    }
  }
];
```

### Niveaux par défaut

- **RGAA 1.1** (Présence d'alternatives) : `error` - Bloquant
- **RGAA 1.2** (Images décoratives) : `error` - Bloquant  
- **RGAA 1.3** (Pertinence des alternatives) : `warn` - Suggestion

## Surcharge locale

Vous pouvez surcharger les niveaux de règle dans votre projet :

```javascript
const rgaaHtmlPlugin = require('eslint-plugin-rgaa-html');

module.exports = [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      'rgaa-html': rgaaHtmlPlugin,
    },
    rules: {
      // Configuration RGAA par défaut
      ...rgaaHtmlPlugin.configs.recommended.rules,
      
      // Surcharges locales
      'rgaa-html/rgaa-1-1': 'error',   // Garde le niveau error
      'rgaa-html/rgaa-1-2': 'warn',    // Change de error à warn
      'rgaa-html/rgaa-1-3': 'off',     // Désactive complètement
    }
  }
];
```

## Options personnalisées

### RGAA 1.3 - Longueur minimale des alternatives

```javascript
module.exports = [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      'rgaa-html': rgaaHtmlPlugin,
    },
    rules: {
      ...rgaaHtmlPlugin.configs.recommended.rules,
      
      // Configuration avec options personnalisées
      'rgaa-html/rgaa-1-3': ['warn', { 
        minLength: 30,  // Longueur minimale personnalisée (défaut: 25)
      }],
    }
  }
];
```

## Configuration minimale

Pour une configuration minimale, vous pouvez simplement étendre la configuration recommandée :

```javascript
const rgaaHtmlPlugin = require('eslint-plugin-rgaa-html');

module.exports = [
  {
    extends: [rgaaHtmlPlugin.configs.recommended],
    // Vos autres configurations...
  }
];
```

## Désactivation sélective

Pour désactiver certaines règles dans des fichiers spécifiques :

```javascript
// Dans votre fichier JSX/TSX
/* eslint-disable rgaa-html/rgaa-1-3 */
<img src="logo.png" alt="Logo" />
/* eslint-enable rgaa-html/rgaa-1-3 */
```

Ou pour une ligne spécifique :

```javascript
<img src="logo.png" alt="Logo" /> {/* eslint-disable-line rgaa-html/rgaa-1-3 */}
```

## Commentaires RGAA

Le plugin supporte des commentaires spéciaux pour contrôler le comportement :

```javascript
{/* eslint-rgaa: decorative */}
<img src="decoration.png" alt="" />

{/* eslint-rgaa: informative */}
<img src="chart.png" alt="Graphique des ventes" />

{/* eslint-rgaa: ignore */}
<img src="legacy.png" alt="Logo" />
```

## Exemples de configuration

Voir les fichiers d'exemple dans le projet :
- `eslint.config.js` - Configuration par défaut
- `example-local-config.js` - Exemple de surcharge locale
- `example-custom-options.js` - Exemple avec options personnalisées
