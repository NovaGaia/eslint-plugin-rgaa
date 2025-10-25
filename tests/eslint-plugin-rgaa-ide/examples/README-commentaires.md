# Système de commentaires ESLint RGAA

## Vue d'ensemble

Le plugin ESLint RGAA supporte un système de commentaires spéciaux pour contrôler explicitement le statut des images (décorative ou informative). Par défaut, **toutes les images sont considérées comme informatives** et sont soumises aux critères RGAA 1.1 et 1.3.

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

## Avantages

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
