# Organisation des utilitaires RGAA

Ce dossier contient les fonctions utilitaires organisées par thématique RGAA pour une meilleure maintenabilité et lisibilité.

## Structure des modules

### `common.ts` - Fonctions communes
Fonctions de base pour la manipulation des nœuds JSX et des attributs HTML/ARIA.

**Fonctions principales :**
- `hasAttribute(node, attributeName)` - Vérifier la présence d'un attribut
- `getAttributeValue(node, attributeName)` - Récupérer la valeur d'un attribut
- `isHtmlTag(node, tagName)` - Vérifier le type de balise HTML
- `hasTextContent(node)` - Vérifier la présence de contenu textuel
- `hasRoleImg(node)` - Vérifier role="img"
- `isInputImage(node)` - Vérifier input type="image"
- `isSvgTag(node)` - Vérifier balise SVG
- `isCanvasTag(node)` - Vérifier balise Canvas
- Et autres fonctions de base...

### `image-theme-utils.ts` - Thématique 1 - Images
Toutes les fonctions liées à la thématique 1 du RGAA (images, SVG, Canvas) pour les critères 1.1, 1.2 et 1.3.

**Fonctions SVG :**
- `hasSvgTitle(node)` - Vérifier présence d'élément `<title>`
- `hasSvgDesc(node)` - Vérifier présence d'élément `<desc>`
- `getSvgTitleContent(node)` - Récupérer le contenu du `<title>`
- `getSvgDescContent(node)` - Récupérer le contenu du `<desc>`

**Fonctions Canvas :**
- `getCanvasTextContent(node)` - Récupérer le contenu textuel
- `hasCanvasTextContent(node)` - Vérifier la présence de contenu

**Fonctions générales images :**
- `hasAlternativeAttributes(node)` - Vérifier les attributs d'alternative
- `hasAlternativeAttributesForDecorative(node)` - Version pour images décoratives
- `isCorrectlyMarkedDecorative(node)` - Vérifier le marquage décoratif
- `isAlternativeTooShort(node, minLength)` - Vérifier la longueur des alternatives
- `getShortestAlternative(node)` - Récupérer la plus courte alternative
- `hasValidAlternative(node, allowedAlternatives)` - Vérifier selon critères spécifiques

### `rgaa-comments.ts` - Gestion des commentaires RGAA
Fonctions pour parser et gérer les commentaires ESLint RGAA.

**Fonctions principales :**
- `parseRgaaComment(context, node)` - Parser les commentaires RGAA
- `isDecorativeImage(context, node, isCorrectlyMarkedDecorative)` - Déterminer si décorative
- `isInformativeImage(context, node)` - Déterminer si informative
- `isIgnoredImage(context, node)` - Déterminer si ignorée

### `index.ts` - Point d'entrée
Réexporte toutes les fonctions et contient la configuration des URLs de documentation.

## Avantages de cette organisation

### 1. **Organisation thématique**
- Respecte la structure du RGAA par thématiques
- Facilite l'ajout de nouvelles thématiques (2-cadres, 3-couleurs, etc.)
- Logique métier regroupée par domaine

### 2. **Séparation des responsabilités**
- `common.ts` : Fonctions techniques de base
- `image-theme-utils.ts` : Logique métier spécifique aux images
- `rgaa-comments.ts` : Gestion des commentaires ESLint
- `index.ts` : Configuration et réexport

### 3. **Maintenabilité**
- Code plus lisible et organisé
- Facilite les modifications par thématique
- Réduction des conflits lors du développement en équipe

### 4. **Extensibilité**
- Facile d'ajouter `table-theme-utils.ts` pour la thématique 5
- Facile d'ajouter `form-theme-utils.ts` pour la thématique 11
- Structure claire pour les futures thématiques

## Utilisation

```typescript
// Import depuis le point d'entrée (recommandé)
import { 
  hasAttribute, 
  hasAlternativeAttributes, 
  getSvgTitleContent,
  parseRgaaComment 
} from './index';

// Import direct depuis un module spécifique
import { hasAttribute } from './common';
import { getSvgTitleContent } from './image-theme-utils';
import { parseRgaaComment } from './rgaa-comments';
```

## Migration depuis l'ancien utils.ts

L'ancien fichier `utils.ts` (642 lignes) a été refactorisé en modules spécialisés :

- **Fonctions communes** → `common.ts`
- **Fonctions images/SVG/Canvas** → `image-theme-utils.ts`
- **Fonctions commentaires** → `rgaa-comments.ts`
- **Configuration** → `index.ts`

Toutes les fonctions publiques restent disponibles via `index.ts` pour maintenir la compatibilité.
