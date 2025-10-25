# Exemples IDE pour le plugin RGAA

Ce dossier contient des fichiers d'exemple JSX et TSX pour tester le plugin RGAA directement dans votre IDE (VS Code, Cursor, etc.).

## Structure

```
examples/
├── jsx/                     # Exemples JSX/React
│   ├── example-with-issues.jsx     # Composant avec des problèmes RGAA
│   ├── example-correct.jsx         # Composant avec du code accessible
│   └── example-all-image-types.jsx # Exemple complet avec tous les types d'images RGAA 1.1
├── tsx/                     # Exemples TSX (TypeScript/React)
│   ├── example-with-issues.tsx     # Composant TSX avec des problèmes RGAA
│   ├── example-correct.tsx         # Composant TSX avec du code accessible
│   └── example-all-image-types.tsx # Exemple complet avec tous les types d'images RGAA 1.1
├── eslint.config.js         # Configuration ESLint pour les exemples
└── README.md                # Ce fichier
```

## Note sur les exemples TSX

**Pourquoi des fichiers TSX pour simuler du HTML ?**

ESLint ne peut pas analyser directement les fichiers HTML avec notre plugin RGAA. Pour tester les règles RGAA sur du contenu HTML, nous avons créé des composants TSX qui simulent la structure HTML :

- **`tsx/`** : Composants TypeScript/React qui simulent des pages HTML
- **`jsx/`** : Composants JavaScript/React classiques

Les fichiers TSX contiennent la même structure HTML mais dans un format que ESLint peut analyser avec notre plugin RGAA, avec en plus les avantages de TypeScript.

## Comment utiliser

### 1. Configuration de votre IDE

Assurez-vous que votre IDE est configuré pour utiliser ESLint avec le plugin RGAA :

1. Installez le plugin RGAA :
   ```bash
   pnpm install eslint-plugin-rgaa-html
   ```

2. Configurez ESLint dans votre projet avec :
   ```javascript
   // .eslintrc.js
   module.exports = {
     plugins: ['rgaa-html'],
     rules: {
       'rgaa-html/rgaa-1-1': 'error',
     },
   };
   ```

### 2. Test des exemples

1. **Ouvrez les fichiers d'exemple** dans votre IDE
2. **Observez les alertes** qui apparaissent dans l'éditeur :
   - Les fichiers `*-with-issues.tsx` et `*-with-issues.jsx` devraient montrer des erreurs RGAA
   - Les fichiers `*-correct.tsx` et `*-correct.jsx` ne devraient montrer aucune erreur RGAA
   - Les fichiers `example-all-image-types.*` montrent tous les types d'images RGAA 1.1 (15 erreurs)

### 3. Types d'alertes RGAA 1.1

Le plugin détecte les problèmes suivants :

- **Image sans attribut `alt`** : `L'image doit avoir un attribut alt pour être accessible.`
- **Image avec `alt` vide** : `L'attribut alt ne peut pas être vide pour une image porteuse d'information.`
- **Image avec `alt` trop long** : `L'attribut alt est trop long (plus de 125 caractères).`
- **Image avec `alt` invalide** : `L'attribut alt doit contenir une description textuelle significative.`

### 4. Solutions

- **Image porteuse d'information** : Ajoutez un `alt` descriptif
- **Image décorative** : Utilisez `alt=""` avec `role="presentation"` ou `role="none"`

## Configuration VS Code

Pour VS Code, ajoutez dans vos paramètres :

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html"
  ],
  "eslint.workingDirectories": [
    "./tests/eslint-plugin-rgaa-ide/examples"
  ]
}
```

## Configuration Cursor

Cursor utilise la même configuration que VS Code. Assurez-vous que l'extension ESLint est installée et activée.

## Test en ligne de commande

Vous pouvez aussi tester les exemples en ligne de commande :

```bash
# Tester les fichiers avec problèmes
npx eslint jsx/example-with-issues.jsx
npx eslint tsx/example-with-issues.tsx

# Tester les fichiers corrects
npx eslint jsx/example-correct.jsx
npx eslint tsx/example-correct.tsx

# Tester l'exemple complet avec tous les types d'images RGAA 1.1
npx eslint jsx/example-all-image-types.jsx
npx eslint tsx/example-all-image-types.tsx
```
