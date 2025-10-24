---
title: Dans chaque page web, les déclarations CSS de couleurs de fond d’élément et de police sont-elles correctement utilisées ?
---

# Dans chaque page web, les déclarations CSS de couleurs de fond d’élément et de police sont-elles correctement utilisées ?



## Tests

### Test 1

**Dans chaque page web, chaque déclaration CSS de couleurs de police (`color`), d’un élément susceptible de contenir du texte, est-elle accompagnée d’une déclaration de couleur de fond (`background`, `background-color`), au moins, héritée d’un parent ?**

1. Retrouver dans le document les textes mis en couleur, à l’exception des couleurs par défaut (par exemple les liens, etc.) ;
2. Déterminer l’élément qui contient le texte et vérifier la présence d’une valeur calculée pour la propriété `background-color` de l’élément ;
3. Si c’est le cas, **le test est validé**.

### Test 2

**Dans chaque page web, chaque déclaration de couleur de fond (`background`, `background-color`), d’un élément susceptible de contenir du texte, est-elle accompagnée d’une déclaration de couleur de police (`color`) au moins, héritée d’un parent ?**

1. Retrouver dans le document les textes mis en couleur, à l’exception des couleurs par défaut (par exemple les liens, etc.) ;
2. Déterminer l’élément qui contient le texte et vérifier la présence d’une valeur calculée pour la propriété `color` de l’élément ;
3. Si c’est le cas, **le test est validé**.

### Test 3

**Dans chaque page web, chaque utilisation d’une image pour créer une couleur de fond d’un élément susceptible de contenir du texte, via CSS (`background`, `background-image`), est-elle accompagnée d’une déclaration de couleur de fond (`background`, `background-color`), au moins, héritée d’un parent ?**

1. Retrouver dans le document les textes dont l’arrière-plan est constitué d’une image (propriété background-image) ;
2. Déterminer l’élément qui contient le texte et vérifier que si l’image d’arrière-plan est absente, le texte reste lisible ;
3. Si c’est le cas, **le test est validé**.



## Références WCAG

### Critère WCAG 1.4.3

**Contrast (Minimum)** (Niveau AA)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **F24** : [Technique F24](https://www.w3.org/WAI/WCAG21/Techniques/html/F24)
