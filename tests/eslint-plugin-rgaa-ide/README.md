# Exemples IDE pour le plugin RGAA

Ce dossier contient des exemples HTML et JSX pour tester le plugin RGAA directement dans votre IDE (VS Code, Cursor, etc.).

## Structure

```
eslint-plugin-rgaa-ide/
├── examples/                # Exemples pour l'IDE
│   ├── html/               # Fichiers HTML d'exemple
│   │   ├── example-with-issues.html    # Fichier avec des problèmes RGAA
│   │   └── example-correct.html        # Fichier avec du code accessible
│   ├── jsx/                # Composants React d'exemple
│   │   ├── example-with-issues.jsx     # Composant avec des problèmes RGAA
│   │   └── example-correct.jsx         # Composant avec du code accessible
│   ├── eslint.config.js    # Configuration ESLint pour les exemples
│   └── README.md           # Guide d'utilisation détaillé
└── package.json            # Configuration du package
```

## Comment utiliser

### 1. Configuration de votre IDE

Assurez-vous que votre IDE est configuré pour utiliser ESLint avec le plugin RGAA :

1. Installez le plugin RGAA :
   ```bash
   pnpm install eslint-plugin-rgaa-html
   ```

2. Configurez ESLint dans votre projet avec :
   ```javascript
   // eslint.config.js
   module.exports = [
     {
       plugins: {
         'rgaa-html': require('eslint-plugin-rgaa-html'),
       },
       rules: {
         'rgaa-html/rgaa-1-1': 'error',
       },
     },
   ];
   ```

### 2. Test des exemples

1. **Ouvrez les fichiers d'exemple** dans votre IDE
2. **Observez les alertes** qui apparaissent dans l'éditeur :
   - Les fichiers `*-with-issues.*` devraient montrer des erreurs RGAA
   - Les fichiers `*-correct.*` ne devraient montrer aucune erreur RGAA

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
# Tester le fichier avec problèmes
npx eslint examples/jsx/example-with-issues.jsx

# Tester le fichier correct
npx eslint examples/jsx/example-correct.jsx
```

## Développement

```bash
# Installer les dépendances
pnpm install

# Tester les exemples
npx eslint examples/jsx/*.jsx
npx eslint examples/html/*.html
```