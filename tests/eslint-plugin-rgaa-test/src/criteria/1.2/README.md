# RGAA 1.2 - Images de décoration

## Description
Chaque image de décoration est-elle correctement ignorée par les technologies d'assistance ?

## Tests implémentés

### Test 1.2.1 - Images <img> décoratives
**Fichiers de test :**
- `valid/test1-2-1-img-decorative-empty-alt.jsx` - Images avec `alt=""`
- `valid/test1-2-1-img-decorative-aria-hidden.jsx` - Images avec `aria-hidden="true"`
- `valid/test1-2-1-img-decorative-role.jsx` - Images avec `role="presentation"` ou `role="none"`
- `invalid/test1-2-1-img-decorative-missing-marking.jsx` - Images sans marquage correct
- `invalid/test1-2-1-img-decorative-has-alternative.jsx` - Images avec attributs d'alternative

**Messages d'erreur :**
- `test1-img-decorative-missing-marking` : L'image décorative <img> doit être correctement marquée
- `test1-img-decorative-has-alternative` : L'image décorative <img> ne doit pas avoir d'attributs d'alternative textuelle

### Test 1.2.2 - Zones <area> décoratives
**Fichiers de test :**
- `valid/test1-2-2-area-decorative.jsx` - Zones décoratives correctement marquées
- `invalid/test1-2-2-area-decorative-missing-marking.jsx` - Zones sans marquage correct
- `invalid/test1-2-2-area-decorative-has-alternative.jsx` - Zones avec attributs d'alternative

**Messages d'erreur :**
- `test2-area-decorative-missing-marking` : La zone décorative <area> doit être correctement marquée
- `test2-area-decorative-has-alternative` : La zone décorative <area> ne doit pas avoir d'attributs d'alternative textuelle

### Test 1.2.3 - Images objet <object> décoratives
**Fichiers de test :**
- `valid/test1-2-3-object-decorative.jsx` - Objets décoratifs correctement marqués
- `invalid/test1-2-3-object-decorative-missing-aria-hidden.jsx` - Objets sans `aria-hidden="true"`
- `invalid/test1-2-3-object-decorative-has-alternative.jsx` - Objets avec attributs d'alternative
- `invalid/test1-2-3-object-decorative-has-content.jsx` - Objets avec contenu alternatif

**Messages d'erreur :**
- `test3-object-decorative-missing-aria-hidden` : L'image objet décorative <object> doit avoir l'attribut aria-hidden="true"
- `test3-object-decorative-has-alternative` : L'image objet décorative <object> ne doit pas avoir d'attributs d'alternative textuelle
- `test3-object-decorative-has-content` : L'image objet décorative <object> ne doit pas avoir de contenu alternatif

### Test 1.2.4 - Images vectorielles <svg> décoratives
**Fichiers de test :**
- `valid/test1-2-4-svg-decorative.jsx` - SVG décoratifs correctement marqués
- `invalid/test1-2-4-svg-decorative-missing-aria-hidden.jsx` - SVG sans `aria-hidden="true"`
- `invalid/test1-2-4-svg-decorative-has-alternative.jsx` - SVG avec attributs d'alternative
- `invalid/test1-2-4-svg-decorative-has-title-desc.jsx` - SVG avec éléments title/desc
- `invalid/test1-2-4-svg-decorative-has-title-attr.jsx` - SVG avec attributs title

**Messages d'erreur :**
- `test4-svg-decorative-missing-aria-hidden` : L'image vectorielle décorative <svg> doit avoir l'attribut aria-hidden="true"
- `test4-svg-decorative-has-alternative` : L'image vectorielle décorative <svg> ne doit pas avoir d'attributs d'alternative textuelle
- `test4-svg-decorative-has-title-desc` : L'image vectorielle décorative <svg> ne doit pas contenir d'éléments <title> ou <desc> avec du contenu
- `test4-svg-decorative-has-title-attr` : L'image vectorielle décorative <svg> ne doit pas avoir d'attributs title

### Test 1.2.5 - Images bitmap <canvas> décoratives
**Fichiers de test :**
- `valid/test1-2-5-canvas-decorative.jsx` - Canvas décoratifs correctement marqués
- `invalid/test1-2-5-canvas-decorative-missing-aria-hidden.jsx` - Canvas sans `aria-hidden="true"`
- `invalid/test1-2-5-canvas-decorative-has-alternative.jsx` - Canvas avec attributs d'alternative
- `invalid/test1-2-5-canvas-decorative-has-content.jsx` - Canvas avec contenu alternatif

**Messages d'erreur :**
- `test5-canvas-decorative-missing-aria-hidden` : L'image bitmap décorative <canvas> doit avoir l'attribut aria-hidden="true"
- `test5-canvas-decorative-has-alternative` : L'image bitmap décorative <canvas> ne doit pas avoir d'attributs d'alternative textuelle
- `test5-canvas-decorative-has-content` : L'image bitmap décorative <canvas> ne doit pas avoir de contenu alternatif

### Test 1.2.6 - Images embarquées <embed> décoratives
**Fichiers de test :**
- `valid/test1-2-6-embed-decorative.jsx` - Embed décoratifs correctement marqués
- `invalid/test1-2-6-embed-decorative-missing-aria-hidden.jsx` - Embed sans `aria-hidden="true"`
- `invalid/test1-2-6-embed-decorative-has-alternative.jsx` - Embed avec attributs d'alternative

**Messages d'erreur :**
- `test6-embed-decorative-missing-aria-hidden` : L'image embarquée décorative <embed> doit avoir l'attribut aria-hidden="true"
- `test6-embed-decorative-has-alternative` : L'image embarquée décorative <embed> ne doit pas avoir d'attributs d'alternative textuelle

## Règles de validation

### Images décoratives correctement marquées
- **Images <img>** : `alt=""` OU `aria-hidden="true"` OU `role="presentation"` OU `role="none"`
- **Zones <area>** : `alt=""` OU `aria-hidden="true"` OU `role="presentation"` OU `role="none"`
- **Objets <object>** : `aria-hidden="true"` ET pas d'attributs d'alternative ET pas de contenu
- **SVG <svg>** : `aria-hidden="true"` ET pas d'attributs d'alternative ET pas d'éléments title/desc avec contenu ET pas d'attributs title
- **Canvas <canvas>** : `aria-hidden="true"` ET pas d'attributs d'alternative ET pas de contenu
- **Embed <embed>** : `aria-hidden="true"` ET pas d'attributs d'alternative

### Attributs d'alternative interdits pour les images décoratives
- `aria-labelledby`
- `aria-label`
- `title`

## Exécution des tests

```bash
# Tous les tests RGAA 1.2
pnpm run test:criterion 1.2

# Tests valides uniquement
pnpm run test:valid 1.2

# Tests invalides uniquement
pnpm run test:invalid 1.2
```
