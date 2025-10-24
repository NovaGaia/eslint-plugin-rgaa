---
title: Chaque [image de décoration](/rgaa/glossaire/image-de-decoration) est-elle correctement ignorée par les technologies d’assistance ?
---

# Chaque [image de décoration](/rgaa/glossaire/image-de-decoration) est-elle correctement ignorée par les technologies d’assistance ?



## Tests

### Test 1

**Chaque image (balise `<img>`) [de décoration](/rgaa/glossaire/image-de-decoration), sans [légende](/rgaa/glossaire/legende-d-image), vérifie-t-elle une de ces conditions ?**

1. Retrouver dans le document les images décoratives dépourvues de légende structurées au moyen d’un élément `<img>` ;
2. Pour chaque image, vérifier que l’image ne possède pas d’attributs `aria-labelledby`, `aria-label` ou `title` et qu’elle possède :
   - Soit un attribut `alt` vide (`alt=""`) ;
   - Soit un attribut WAI-ARIA `aria-hidden="true"` ou `role="presentation"`.
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 2

**Chaque [zone non cliquable](/rgaa/glossaire/zone-non-cliquable) (balise `<area>` sans attribut `href`) [de décoration](/rgaa/glossaire/image-de-decoration), vérifie-t-elle une de ces conditions ?**

1. Retrouver dans le document les images décoratives structurées au moyen d’un élément `<area>` (sans attribut `href`) ;
2. Pour chaque image, vérifier que l’élément `<area>` ne possède pas d’attributs `aria-labelledby`, `aria-label` ou `title` et qu’il possède :
   - Soit un attribut `alt` vide (`alt=""`) ;
   - Soit un attribut WAI-ARIA `aria-hidden="true"` ou `role="presentation"`.
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 3

**Chaque [image objet](/rgaa/glossaire/image-objet) (balise `<object>` avec l’attribut `type="image/…"`) [de décoration](/rgaa/glossaire/image-de-decoration), sans [légende](/rgaa/glossaire/legende-d-image), vérifie-t-elle ces conditions ?**

1. Retrouver dans le document les images décoratives structurées dépourvues de légende au moyen d’un élément `<object>` (avec un attribut `type="image/…"`) ;
2. Pour chaque image, vérifier que la balise ouvrante `<object>` ne possède pas d’attributs `aria-labelledby`, `aria-label` ou `title` et qu’elle :
   - Possède un attribut WAI-ARIA `aria-hidden="true"` ;
   - Et est dépourvue d’alternative textuelle ;
   - Et est dépourvue d’un contenu alternatif présent entre les balises `<object>` et `</object>`.
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 4

**Chaque image vectorielle (balise `<svg>`) [de décoration](/rgaa/glossaire/image-de-decoration), sans [légende](/rgaa/glossaire/legende-d-image), vérifie-t-elle ces conditions ?**

1. Retrouver dans le document les images décoratives dépourvues de légende structurées au moyen d’un élément `<svg>` ;
2. Pour chaque image, vérifier que l’élément `<svg>` ne possède pas d’attributs `aria-labelledby` ou `aria-label` et qu’il :
   - Possède un attribut WAI-ARIA `aria-hidden="true"` ;
   - Et est dépourvu d’alternative textuelle (ainsi que ses éléments enfants) ;
   - Et ne contient pas d’éléments `<title>` et `<desc>` à moins que vides de contenu ;
   - Et est dépourvu d’attribut `title` (ainsi que ses éléments enfants).
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 5

**Chaque image bitmap (balise `<canvas>`) [de décoration](/rgaa/glossaire/image-de-decoration), sans [légende](/rgaa/glossaire/legende-d-image), vérifie-t-elle ces conditions ?**

1. Retrouver dans le document les images décoratives dépourvues de légende structurées au moyen d’un élément `<canvas>` ;
2. Pour chaque image, vérifier que l’élément `<canvas>` ne possède pas d’attributs `aria-labelledby`, `aria-label` ou `title` et qu’il :
   - Possède un attribut WAI-ARIA `aria-hidden="true"` ;
   - Et est dépourvu d’alternative textuelle ;
   - Et est dépourvu d’un contenu alternatif présent entre les balises `<canvas>` et `</canvas>`.
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 6

**Chaque image embarquée (balise `<embed>` avec l’attribut `type="image/…"`) [de décoration](/rgaa/glossaire/image-de-decoration), sans [légende](/rgaa/glossaire/legende-d-image), vérifie-t-elle ces conditions ?**

1. Retrouver dans le document les images décoratives dépourvues de légende structurées au moyen d’un élément `<embed>` (avec un attribut `type="image/…"`) ;
2. Pour chaque image, vérifier que l’élément `<embed>` ne possède pas d’attributs `aria-labelledby`, `aria-label` ou `title` et qu’il :
   - Possède un attribut WAI-ARIA `aria-hidden="true"` ;
   - Et est dépourvu d’alternative textuelle ;
3. Si c’est le cas pour chaque image, **le test est validé**.



## Références WCAG

### Critère WCAG 1.1.1

**Non-text Content** (Niveau A)

### Critère WCAG 4.1.2

**Name, Role, Value** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **H67** : [Technique H67](https://www.w3.org/WAI/WCAG21/Techniques/html/H67)
- **G196** : [Technique G196](https://www.w3.org/WAI/WCAG21/Techniques/html/G196)
- **C9** : [Technique C9](https://www.w3.org/WAI/WCAG21/Techniques/html/C9)
- **F39** : [Technique F39](https://www.w3.org/WAI/WCAG21/Techniques/html/F39)
- **F38** : [Technique F38](https://www.w3.org/WAI/WCAG21/Techniques/html/F38)
- **ARIA4** : [Technique ARIA4](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA4)
- **ARIA10** : [Technique ARIA10](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA10)
