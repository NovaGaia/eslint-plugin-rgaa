---
title: Pour chaque image utilisée comme [CAPTCHA](/rgaa/glossaire/captcha) ou comme [image-test](/rgaa/glossaire/image-test), ayant une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image), cette alternative permet-elle d’identifier la nature et la fonction de l’image ?
---

# Pour chaque image utilisée comme [CAPTCHA](/rgaa/glossaire/captcha) ou comme [image-test](/rgaa/glossaire/image-test), ayant une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image), cette alternative permet-elle d’identifier la nature et la fonction de l’image ?



## Tests

### Test 1

**Pour chaque image (balise `<img>`) utilisée comme [CAPTCHA](/rgaa/glossaire/captcha) ou comme [image-test](/rgaa/glossaire/image-test), ayant une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image), cette alternative est-elle pertinente ?**

1. Retrouver dans le document les images structurées au moyen d’un élément `<img>` pourvues d’une alternative textuelle et utilisées comme CAPTCHA ou comme image-test ;
2. Pour chaque image, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 2

**Pour chaque zone (balise `<area>`) d’une image réactive utilisée comme [CAPTCHA](/rgaa/glossaire/captcha) ou comme [image-test](/rgaa/glossaire/image-test), ayant une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image), cette alternative est-elle pertinente ?**

1. Retrouver dans le document les éléments `<area>` pourvus d’une alternative textuelle et utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque élément `<area>`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 3

**Pour chaque [bouton](/rgaa/glossaire/bouton-formulaire) de type image (balise `<input>` avec l’attribut `type="image"`) utilisé comme [CAPTCHA](/rgaa/glossaire/captcha) ou comme [image-test](/rgaa/glossaire/image-test), ayant une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image), cette alternative est-elle pertinente ?**

1. Retrouver dans le document les éléments `<input>` pourvus de l’attribut `type="image"` et d’une alternative textuelle, et utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque élément `<input>` pourvu de l’attribut `type="image"`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 4

**Pour chaque [image objet](/rgaa/glossaire/image-objet) (balise `<object>` avec l’attribut `type="image/…"`) utilisée comme [CAPTCHA](/rgaa/glossaire/captcha) ou comme [image-test](/rgaa/glossaire/image-test), ayant une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image) ou un [contenu alternatif](/rgaa/glossaire/contenu-alternatif), cette alternative est-elle pertinente ?**

1. Retrouver dans le document les éléments `<object>` pourvus de l’attribut `type="image/…"` et d’une alternative textuelle, et utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque élément `<object>` pourvu de l’attribut `type="image/…"`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 5

**Pour chaque image embarquée (balise `<embed>` avec l’attribut `type="image/…"`) utilisée comme [CAPTCHA](/rgaa/glossaire/captcha) ou comme [image-test](/rgaa/glossaire/image-test), ayant une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image) ou un [contenu alternatif](/rgaa/glossaire/contenu-alternatif), cette alternative est-elle pertinente ?**

1. Retrouver dans le document les éléments `<embed>` pourvus de l’attribut `type="image/…"` et d’une alternative textuelle, et utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque élément `<embed>` pourvu de l’attribut `type="image/…"`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 6

**Pour chaque image vectorielle (balise `<svg>`) utilisée comme [CAPTCHA](/rgaa/glossaire/captcha) ou comme [image-test](/rgaa/glossaire/image-test), ayant une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image), cette alternative est-elle pertinente ?**

1. Retrouver dans le document les éléments `<svg>` pourvus d’une alternative textuelle et utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque élément `<svg>`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 7

**Pour chaque image bitmap (balise `<canvas>`) utilisée comme [CAPTCHA](/rgaa/glossaire/captcha) ou comme [image-test](/rgaa/glossaire/image-test), ayant une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image) ou un [contenu alternatif](/rgaa/glossaire/contenu-alternatif), cette alternative est-elle pertinente ?**

1. Retrouver dans le document les éléments `<canvas>` pourvus d’une alternative textuelle et utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque élément `<canvas>`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.



## Références WCAG

### Critère WCAG 1.1.1

**Non-text Content** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G100** : [Technique G100](https://www.w3.org/WAI/WCAG21/Techniques/html/G100)
- **G143** : [Technique G143](https://www.w3.org/WAI/WCAG21/Techniques/html/G143)
