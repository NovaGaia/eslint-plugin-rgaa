# Critère RGAA X.Y - [Nom du critère]

## Description

[Description du critère RGAA]

## Règle ESLint

`rgaa-html/rgaa-X-Y`

## Cas de test

### Cas valides (valid/)

- `[nom-du-fichier].jsx` - [Description du cas valide]

### Cas invalides (invalid/)

- `[nom-du-fichier].jsx` - [Description du cas invalide]

## Messages d'erreur

- `[messageId]`: "[Message d'erreur en français]"

## Instructions pour ajouter ce critère

1. Créer le dossier `tests/criteria/X.Y/`
2. Copier ce template vers `tests/criteria/X.Y/README.md`
3. Remplacer les placeholders par les vraies valeurs
4. Créer les fichiers de test dans `valid/` et `invalid/`
5. Ajouter la règle dans `tests/utils/eslint-config.js`
6. Mettre à jour `tests/run-tests.js` si nécessaire
