---
title: Chaque [légende d’image](/rgaa/glossaire/legende-d-image) est-elle, si nécessaire, correctement reliée à l’image correspondante ?
---

# Chaque [légende d’image](/rgaa/glossaire/legende-d-image) est-elle, si nécessaire, correctement reliée à l’image correspondante ?



## Tests

### Test 1

**Chaque image pourvue d’une [légende](/rgaa/glossaire/legende-d-image) (balise `<img>`, `<input>` avec l’attribut `type="image"` ou possédant un attribut WAI-ARIA `role="img"` associée à une [légende](/rgaa/glossaire/legende-d-image) adjacente), vérifie-t-elle, si nécessaire, ces conditions ?**

1. Retrouver dans le document les images pourvues d’une légende structurées au moyen d’élément `<img>`, d’un élément `<input>` avec l’attribut `type="image"` ou d’un élément possédant l’attribut WAI-ARIA `role="img"` ;
2. Pour chaque image, vérifier que :
   - L’image et sa légende sont contenues dans une balise `<figure>` ;
   - La balise `<figure>` possède une propriété WAI-ARIA `role="figure"` ou `role="group"` ;
   - La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la légende ;
   - La légende est contenue dans une balise `<figcaption>`.
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 2

**Chaque [image objet](/rgaa/glossaire/image-objet) pourvue d’une [légende](/rgaa/glossaire/legende-d-image) (balise `<object>` avec l’attribut `type="image/…"` associée à une [légende](/rgaa/glossaire/legende-d-image) adjacente), vérifie-t-elle, si nécessaire, ces conditions ?**

1. Retrouver dans le document les images objet pourvues d’une légende (élément `<object>` avec l’attribut `type="image/…"`) ;
2. Pour chaque image, vérifier que :
   - L’image et sa légende sont contenues dans une balise `<figure>` ;
   - La balise `<figure>` possède une propriété WAI-ARIA `role="figure`" ou `role="group"` ;
   - La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la légende ;
   - La légende est contenue dans une balise `<figcaption>`.
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 3

**Chaque image embarquée pourvue d’une [légende](/rgaa/glossaire/legende-d-image) (balise `<embed>` associée à une [légende](/rgaa/glossaire/legende-d-image) adjacente), vérifie-t-elle, si nécessaire, ces conditions ?**

1. Retrouver dans le document les images embarquées pourvues d’une légende (élément `<embed>` avec l’attribut `type="image/…"`) ;
2. Pour chaque image, vérifier que :
   - L’image et sa légende sont contenues dans une balise `<figure>` ;
   - La balise `<figure>` possède une propriété WAI-ARIA `role="figure"` ou `role="group"` ;
   - La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la légende ;
   - La légende est contenue dans une balise `<figcaption>`.
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 4

**Chaque image vectorielle pourvue d’une [légende](/rgaa/glossaire/legende-d-image) (balise `<svg>` associée à une [légende](/rgaa/glossaire/legende-d-image) adjacente), vérifie-t-elle, si nécessaire, ces conditions ?**

1. Retrouver dans le document les images vectorielles pourvues d’une légende (élément `<svg>`) ;
2. Pour chaque image, vérifier que :
   - L’image et sa légende sont contenues dans une balise `<figure>` ;
   - La balise `<figure>` possède une propriété WAI-ARIA `role="figure"` ou `role="group"` ;
   - La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la légende ;
   - La légende est contenue dans une balise `<figcaption>`.
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 5

**Chaque image bitmap pourvue d’une [légende](/rgaa/glossaire/legende-d-image) (balise `<canvas>` associée à une [légende](/rgaa/glossaire/legende-d-image) adjacente), vérifie-t-elle, si nécessaire, ces conditions ?**

1. Retrouver dans le document les images bitmap (élément `<canvas>`) ;
2. Pour chaque image, vérifier que :
   - L’image et sa légende sont contenues dans une balise `<figure>` ;
   - La balise `<figure>` possède une propriété WAI-ARIA `role="figure"` ou `role="group"` ;
   - La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la légende ;
   - La légende est contenue dans une balise `<figcaption>`.
3. Si c’est le cas pour chaque image, **le test est validé**.



## Références WCAG

### Critère WCAG 1.1.1

**Non-text Content** (Niveau A)

### Critère WCAG 4.1.2

**Name, Role, Value** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G140** : [Technique G140](https://www.w3.org/WAI/WCAG21/Techniques/html/G140)
- **ARIA4** : [Technique ARIA4](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA4)
- **ARIA6** : [Technique ARIA6](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA6)
