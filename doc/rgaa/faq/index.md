# FAQ RGAA

Bienvenue dans la **Foire Aux Questions (FAQ)** du **Référentiel Général d'Amélioration de l'Accessibilité (RGAA)**. Cette section répond aux questions les plus fréquentes sur l'accessibilité web en France.

## 🎯 Objectif de cette FAQ

Cette FAQ vise à clarifier les aspects pratiques de l'accessibilité web selon les standards français :

- **Obligations légales** et réglementaires
- **Mise en œuvre** des critères RGAA
- **Stratégies** pour différents types de contenus
- **Outils** et ressources disponibles

## 📋 Questions par catégorie

### 🏛️ Cadre légal et obligations

#### [Qu'est-ce que le RGAA ?](rgaa)
Le Référentiel Général d'Amélioration de l'Accessibilité est le standard français pour l'accessibilité numérique des services publics.

#### [Quelle loi ?](loi)
La loi du 11 février 2005 pour l'égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées.

#### [Quelles obligations ?](quelles-obligations)
Les obligations d'accessibilité pour les organismes publics et les entreprises privées.

#### [Quels sites ?](quels-supports)
Les sites web, applications mobiles et documents bureautiques concernés par l'obligation d'accessibilité.

#### [Qui est concerné ?](pour-qui)
Les organismes publics, les entreprises privées et les associations selon leur taille et leur secteur d'activité.

### 📝 Déclaration et conformité

#### [Quelle mention doit-on afficher ?](quelle-mention)
La mention obligatoire sur les sites web concernant l'accessibilité.

#### [Que doit contenir la déclaration d'accessibilité ?](declaration)
Les éléments obligatoires de la déclaration d'accessibilité.

#### [Qu'est-ce que le schéma pluriannuel ?](schema-pluriannuel)
Le plan de mise en conformité sur plusieurs années.

### ⚖️ Sanctions et contrôle

#### [Quelles sanctions ?](sanctions)
Les sanctions en cas de non-conformité à l'obligation d'accessibilité.

### 🛠️ Mise en œuvre technique

#### [Quelles normes ?](normes)
Les normes et standards techniques à respecter.

#### [Quelles stratégies pour les applications mobiles ?](mobile)
Les spécificités de l'accessibilité sur mobile.

## 🔧 Utilisation avec eslint-plugin-rgaa

Cette FAQ est complémentaire au plugin ESLint `eslint-plugin-rgaa` qui vous aide à implémenter automatiquement les critères d'accessibilité.

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
    'rgaa/heading-hierarchy': 'warn',
    'rgaa/color-contrast': 'error'
  }
};
```

## 📚 Ressources complémentaires

### Documentation officielle
- [RGAA 4.1 - Site officiel](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/)
- [WCAG 2.1 - Guidelines W3C](https://www.w3.org/WAI/WCAG21/quickref/)
- [Loi du 11 février 2005](https://www.legifrance.gouv.fr/loda/id/LEGIARTI000006049546/)

### Outils et ressources
- [Glossaire RGAA](../glossaire/) - Définitions des termes techniques
- [Critères RGAA](../criteres/) - Documentation complète des critères
- [eslint-plugin-rgaa](https://github.com/renaudheluin/eslint-plugin-rgaa) - Plugin ESLint

## 🤝 Contribuer

Cette FAQ évolue avec les questions de la communauté. Pour contribuer :

1. **Signaler une question manquante** via les [issues GitHub](https://github.com/renaudheluin/eslint-plugin-rgaa/issues)
2. **Proposer une amélioration** via une Pull Request
3. **Partager votre expérience** dans les discussions

## 📞 Support

- **Issues** : [GitHub Issues](https://github.com/renaudheluin/eslint-plugin-rgaa/issues)
- **Discussions** : [GitHub Discussions](https://github.com/renaudheluin/eslint-plugin-rgaa/discussions)
- **Email** : [contact@example.com](mailto:contact@example.com)

---

*Cette FAQ est maintenue par la communauté eslint-plugin-rgaa pour faciliter l'implémentation de l'accessibilité web en France.*
