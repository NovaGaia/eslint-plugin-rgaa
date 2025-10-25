# Critère RGAA 1.1 - Images porteuses d'information

## Description

Chaque image porteuse d'information a-t-elle une alternative textuelle ?

Ce critère implémente les 8 tests RGAA 1.1 dans l'ordre défini par la documentation officielle.

## Règle ESLint

`rgaa-html/rgaa-1-1`

## Tests RGAA 1.1

### Test 1.1.1 - Images `<img>` et éléments avec `role="img"`
- **Valides** : `test1-1-img-valid-alternatives.jsx`, `test1-1-role-img-valid-alternatives.jsx`
- **Invalides** : `test1-1-img-missing-alt.jsx`, `test1-1-role-img-missing-alt.jsx`

### Test 1.1.2 - Zones d'images réactives `<area>`
- **Valides** : `test1-2-area-valid-alternatives.jsx`
- **Invalides** : `test1-2-area-missing-alt.jsx`

### Test 1.1.3 - Boutons de type image `<input type="image">`
- **Valides** : `test1-3-input-image-valid-alternatives.jsx`
- **Invalides** : `test1-3-input-image-missing-alt.jsx`

### Test 1.1.4 - Images réactives côté serveur `<img ismap>`
- **Valides** : `test1-4-img-ismap-valid-links.jsx`

### Test 1.1.5 - Images vectorielles `<svg>`
- **Valides** : `test1-5-svg-valid-alternatives.jsx`
- **Invalides** : `test1-5-svg-missing-role.jsx`

### Test 1.1.6 - Images objet `<object type="image/...">`
- **Valides** : `test1-6-object-valid-alternatives.jsx`
- **Invalides** : `test1-6-object-missing-role.jsx`

### Test 1.1.7 - Images embarquées `<embed type="image/...">`
- **Valides** : `test1-7-embed-valid-alternatives.jsx`
- **Invalides** : `test1-7-embed-missing-role.jsx`

### Test 1.1.8 - Images bitmap `<canvas>`
- **Valides** : `test1-8-canvas-valid-alternatives.jsx`
- **Invalides** : `test1-8-canvas-missing-role.jsx`

## Messages d'erreur

Chaque test RGAA génère des messages d'erreur spécifiques avec le numéro de test :

- `Test 1.1.1 ÉCHEC` : Messages pour les images `<img>` et `role="img"`
- `Test 1.1.2 ÉCHEC` : Messages pour les zones `<area>`
- `Test 1.1.3 ÉCHEC` : Messages pour les boutons `<input type="image">`
- `Test 1.1.4 ÉCHEC` : Messages pour les images `<img ismap>`
- `Test 1.1.5 ÉCHEC` : Messages pour les images `<svg>`
- `Test 1.1.6 ÉCHEC` : Messages pour les images `<object>`
- `Test 1.1.7 ÉCHEC` : Messages pour les images `<embed>`
- `Test 1.1.8 ÉCHEC` : Messages pour les images `<canvas>`

## Documentation

URL de documentation : https://novagaia.github.io/eslint-plugin-rgaa/rgaa/criteres/1-images/1.1/
