# Système de commentaires ESLint RGAA

## Vue d'ensemble

Le plugin ESLint RGAA supporte un système de commentaires spéciaux pour contrôler explicitement le statut des images (décorative ou informative). Cette fonctionnalité permet aux développeurs de gérer les cas ambigus et d'avoir un contrôle précis sur l'application des règles RGAA.

## Principe de base

**Par défaut, toutes les images sont considérées comme informatives** et sont soumises aux critères RGAA 1.1 (présence d'alternative) et 1.3 (pertinence d'alternative). Seules les images explicitement marquées comme décoratives sont traitées par RGAA 1.2.

## Syntaxe des commentaires

### `eslint-rgaa: decorative`

Marque une image comme **décorative**. L'image sera :
- **Ignorée** par RGAA 1.1 (présence d'alternative)
- **Ignorée** par RGAA 1.3 (pertinence d'alternative)
- **Vérifiée** par RGAA 1.2 (marquage décoratif correct)

```jsx
{/* eslint-rgaa: decorative */}
<img src="decoration.png" alt="" role="presentation" />
```

### `eslint-rgaa: informative`

Marque explicitement une image comme **informative**. L'image sera :
- **Vérifiée** par RGAA 1.1 (présence d'alternative)
- **Vérifiée** par RGAA 1.3 (pertinence d'alternative)
- **Ignorée** par RGAA 1.2 (marquage décoratif)

```jsx
{/* eslint-rgaa: informative */}
<img src="chart.png" alt="Graphique des ventes mensuelles" />
```

### `eslint-rgaa: ignore`

Ignore complètement une image. L'image sera :
- **Ignorée** par tous les critères RGAA (1.1, 1.2, 1.3)

```jsx
{/* eslint-rgaa: ignore - Image legacy à corriger plus tard */}
<img src="old-logo.png" alt="Logo legacy" />
```

## Règles par défaut

### Sans commentaire
```jsx
// Par défaut : image informative
<img src="photo.jpg" alt="Photo de profil" />
```
- ✅ Vérifiée par RGAA 1.1
- ❌ Ignorée par RGAA 1.2
- ✅ Vérifiée par RGAA 1.3

### Avec commentaire décoratif
```jsx
{/* eslint-rgaa: decorative */}
<img src="decoration.png" alt="" />
```
- ❌ Ignorée par RGAA 1.1
- ✅ Vérifiée par RGAA 1.2
- ❌ Ignorée par RGAA 1.3

## Exemples pratiques

### Image décorative correctement marquée
```jsx
{/* eslint-rgaa: decorative */}
<img src="separator.png" alt="" role="presentation" />
```

### Image informative avec alternative longue
```jsx
{/* eslint-rgaa: informative */}
<img src="chart.png" alt="Graphique des ventes mensuelles avec évolution positive" />
```

### Image legacy temporairement ignorée
```jsx
{/* eslint-rgaa: ignore - À corriger dans la prochaine itération */}
<img src="old-banner.jpg" alt="Bannière legacy" />
```

### Gestion des cas ambigus

Parfois, il peut être difficile de déterminer automatiquement si une image est décorative ou informative :

```jsx
// Cas ambigu : logo en en-tête
{/* eslint-rgaa: decorative - Logo purement décoratif */}
<img src="logo.png" alt="" role="presentation" />

// Ou si le logo est informatif
{/* eslint-rgaa: informative - Logo avec valeur informative */}
<img src="logo.png" alt="Logo de l'entreprise Acme" />
```

## Types d'images supportés

Le système de commentaires fonctionne avec tous les types d'images :

### Images HTML
```jsx
{/* eslint-rgaa: decorative */}
<img src="photo.jpg" alt="" />
```

### Zones d'image réactive
```jsx
<map name="navigation">
  {/* eslint-rgaa: decorative */}
  <area shape="rect" coords="0,0,100,50" alt="" />
</map>
```

### Images vectorielles SVG
```jsx
{/* eslint-rgaa: decorative */}
<svg aria-hidden="true">
  <circle cx="50" cy="50" r="40" fill="red" />
</svg>
```

### Images objet
```jsx
{/* eslint-rgaa: decorative */}
<object type="image/png" data="decoration.png" aria-hidden="true" />
```

### Images embarquées
```jsx
{/* eslint-rgaa: decorative */}
<embed type="image/svg" src="icon.svg" aria-hidden="true" />
```

### Images bitmap Canvas
```jsx
{/* eslint-rgaa: decorative */}
<canvas aria-hidden="true"></canvas>
```

## Avantages du système

1. **Contrôle explicite** : Le développeur peut forcer le statut d'une image
2. **Gestion des cas ambigus** : Quand l'automatique ne suffit pas
3. **Documentation** : Les commentaires servent aussi de documentation
4. **Flexibilité** : Possibilité d'ignorer temporairement certaines images
5. **Logique simple** : Par défaut, tout est informatif sauf indication contraire

## Notes importantes

- Les commentaires doivent être placés **juste avant** l'élément image
- Le système recherche les commentaires dans les **10 lignes précédentes**
- Les commentaires sont **optionnels** - sans commentaire, l'image est considérée comme informative
- Les commentaires fonctionnent avec tous les types d'images : `<img>`, `<area>`, `<object>`, `<embed>`, `<svg>`, `<canvas>`

## Migration depuis l'ancien système

Si vous migrez depuis un système où les images étaient automatiquement détectées comme décoratives, vous devrez :

1. **Identifier les images décoratives** dans votre code
2. **Ajouter les commentaires** `eslint-rgaa: decorative` appropriés
3. **Vérifier que les images sont correctement marquées** (alt="", aria-hidden="true", role="presentation", etc.)

## Bonnes pratiques

### Utilisez des commentaires descriptifs
```jsx
{/* eslint-rgaa: decorative - Séparateur visuel entre sections */}
<img src="divider.png" alt="" role="presentation" />
```

### Documentez les cas temporaires
```jsx
{/* eslint-rgaa: ignore - TODO: Remplacer par une image accessible */}
<img src="placeholder.jpg" alt="Image temporaire" />
```

### Vérifiez la cohérence
Assurez-vous que vos commentaires correspondent au marquage HTML de vos images :

```jsx
// ✅ Cohérent
{/* eslint-rgaa: decorative */}
<img src="decoration.png" alt="" role="presentation" />

// ❌ Incohérent - marqué comme décoratif mais a un alt descriptif
{/* eslint-rgaa: decorative */}
<img src="chart.png" alt="Graphique des ventes" />
```

## Dépannage

### Les commentaires ne sont pas détectés
- Vérifiez que le commentaire est placé juste avant l'élément image
- Vérifiez la syntaxe : `{/* eslint-rgaa: decorative */}`
- Vérifiez que le commentaire n'est pas trop éloigné (max 10 lignes)

### Images marquées comme décoratives mais toujours vérifiées par RGAA 1.1
- Vérifiez que le commentaire est correctement formaté
- Vérifiez que l'image est bien marquée comme décorative (alt="", aria-hidden="true", etc.)

### Images informatives ignorées par RGAA 1.1
- Vérifiez qu'il n'y a pas de commentaire `eslint-rgaa: decorative` ou `eslint-rgaa: ignore`
- Vérifiez que l'image a bien une alternative textuelle
