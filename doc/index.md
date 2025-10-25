# eslint-plugin-rgaa

Bienvenue dans la documentation du plugin ESLint pour la validation des critères du **Référentiel Général d'Amélioration de l'Accessibilité (RGAA)**.

## 🎯 Objectif

Ce plugin ESLint vous permet de valider automatiquement l'accessibilité de vos projets web selon les standards français du RGAA, garantissant ainsi la conformité légale de vos sites web.

## 🚀 Installation

```bash
npm install --save-dev eslint-plugin-rgaa-html
```

## ⚡ Utilisation rapide

```javascript
// eslint.config.js
const rgaaHtmlPlugin = require('eslint-plugin-rgaa-html');

module.exports = [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: { 'rgaa-html': rgaaHtmlPlugin },
    rules: { ...rgaaHtmlPlugin.configs.recommended.rules }
  }
];
```

## 📚 Documentation

- **[Guide d'utilisation](guide.md)** - Configuration détaillée et exemples
- **[Critères RGAA](rgaa/)** - Documentation complète de tous les critères
- **[API Reference](api/)** - Documentation technique des règles

## 🔗 Liens utiles

- [Repository GitHub](https://github.com/NovaGaia/eslint-plugin-rgaa)
- [Package NPM](https://www.npmjs.com/package/eslint-plugin-rgaa-html)
- [RGAA Officiel](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/)

## 🤝 Contribuer

Nous accueillons toutes les contributions ! Consultez notre [guide de contribution](contributing.md) pour plus d'informations.

---

*Développé avec ❤️ pour améliorer l'accessibilité web en France*
