# Critère RGAA 1.3 - Pertinence des alternatives textuelles

## Description

Pour chaque image porteuse d'information ayant une alternative textuelle, cette alternative est-elle pertinente (hors cas particuliers) ?

Ce critère implémente les 9 tests RGAA 1.3 dans l'ordre défini par la documentation officielle.

## Règle ESLint

`rgaa-html/rgaa-1-3` (niveau `warn`)

## Tests RGAA 1.3

### Test 1.3.1 - Images `<img>` et éléments avec `role="img"`
- **Valides** : `test1-3-1-img-short-alternatives.jsx`, `test1-3-1-role-img-short-alternatives.jsx`
- **Invalides** : `test1-3-1-img-long-alternatives.jsx`, `test1-3-1-role-img-long-alternatives.jsx`

### Test 1.3.2 - Zones d'images réactives `<area>`
- **Valides** : `test1-3-2-area-short-alternatives.jsx`
- **Invalides** : `test1-3-2-area-long-alternatives.jsx`

### Test 1.3.3 - Boutons de type image `<input type="image">`
- **Valides** : `test1-3-3-input-short-alternatives.jsx`
- **Invalides** : `test1-3-3-input-long-alternatives.jsx`

### Test 1.3.4 - Images objet `<object type="image/...">`
- **Valides** : `test1-3-4-object-short-alternatives.jsx`
- **Invalides** : `test1-3-4-object-long-alternatives.jsx`

### Test 1.3.5 - Images embarquées `<embed type="image/...">`
- **Valides** : `test1-3-5-embed-short-alternatives.jsx`
- **Invalides** : `test1-3-5-embed-long-alternatives.jsx`

### Test 1.3.6 - Images vectorielles `<svg>`
- **Valides** : `test1-3-6-svg-short-alternatives.jsx`
- **Invalides** : `test1-3-6-svg-long-alternatives.jsx`

### Test 1.3.7 - Images bitmap `<canvas>`
- **Valides** : `test1-3-7-canvas-short-alternatives.jsx`
- **Invalides** : `test1-3-7-canvas-long-alternatives.jsx`

### Test 1.3.8 - Contenu alternatif `<canvas>`
- **Valides** : Inclus dans les tests 1.3.7
- **Invalides** : Inclus dans les tests 1.3.7

### Test 1.3.9 - Alternatives courtes et concises
- **Valides** : Inclus dans tous les tests valides
- **Invalides** : Inclus dans tous les tests invalides

## Messages d'avertissement

Chaque test RGAA génère des messages d'avertissement spécifiques avec le numéro de test :

- `Test 1.3.1 ATTENTION` : Messages pour les images `<img>` et `role="img"`
- `Test 1.3.2 ATTENTION` : Messages pour les zones `<area>`
- `Test 1.3.3 ATTENTION` : Messages pour les boutons `<input type="image">`
- `Test 1.3.4 ATTENTION` : Messages pour les images `<object>`
- `Test 1.3.5 ATTENTION` : Messages pour les images `<embed>`
- `Test 1.3.6 ATTENTION` : Messages pour les images `<svg>`
- `Test 1.3.7 ATTENTION` : Messages pour les images `<canvas>`
- `Test 1.3.8 ATTENTION` : Messages pour le contenu alternatif `<canvas>`
- `Test 1.3.9 ATTENTION` : Messages généraux pour les alternatives trop courtes

## Configuration

La longueur minimale des alternatives est configurable via l'option `minLength` (défaut : 25 caractères) :

```javascript
{
  rules: {
    'rgaa-html/rgaa-1-3': ['warn', { minLength: 30 }]
  }
}
```

## Documentation

URL de documentation : https://novagaia.github.io/eslint-plugin-rgaa/rgaa/criteres/1-images/1.3/
