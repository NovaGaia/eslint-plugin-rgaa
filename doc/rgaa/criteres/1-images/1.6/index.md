---
title: Chaque image [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information) a-t-elle, si nécessaire, une [description détaillée](/rgaa/glossaire/description-detaillee-image) ?
---

# Chaque image [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information) a-t-elle, si nécessaire, une [description détaillée](/rgaa/glossaire/description-detaillee-image) ?



## Tests

### Test 1

**Chaque image (balise `<img>`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), qui nécessite une [description détaillée](/rgaa/glossaire/description-detaillee-image), vérifie-t-elle une de ces conditions ?**

1. Retrouver dans le document les images structurées au moyen d’un élément `<img>` (ou d’un élément possédant l’attribut WAI-ARIA `role="img"`) porteuses d’information qui nécessitent une description détaillée ;
2. Pour chaque image, vérifier qu’il existe :
   - Soit un attribut longdesc qui donne l’adresse (url) d’une page ou d’un emplacement dans la page contenant la description détaillée ;
   - Soit une alternative textuelle contenant la référence à une description détaillée adjacente à l’image ;
   - Soit un lien ou un bouton adjacent permettant d’accéder à la description détaillée.
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 2

**Chaque [image objet](/rgaa/glossaire/image-objet) (balise `<object>` avec l’attribut `type="image/…"`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), qui nécessite une [description détaillée](/rgaa/glossaire/description-detaillee-image), vérifie-t-elle une de ces conditions ?**

1. Retrouver dans le document les éléments `<object>` pourvus de l’attribut `type="image/…"`, porteurs d’information qui nécessitent une description détaillée ;
2. Pour chaque élément `<object>` pourvu de l’attribut `type="image/…"`, vérifier qu’il existe :
   - Soit une alternative textuelle contenant la référence à une description détaillée adjacente à l’image ;
   - Soit un lien ou un bouton adjacent permettant d’accéder à la description détaillée.
3. Si c’est le cas pour chaque élément `<object>` pourvu de l’attribut `type="image/…"`, **le test est validé**.

### Test 3

**Chaque image embarquée (balise `<embed>`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), qui nécessite une [description détaillée](/rgaa/glossaire/description-detaillee-image), vérifie-t-elle une de ces conditions ?**

1. Retrouver dans le document les éléments `<embed>` pourvus de l’attribut `type="image/…"`, porteurs d’information qui nécessitent une description détaillée ;
2. Pour chaque élément `<embed>` pourvu de l’attribut `type="image/…"`, vérifier qu’il existe :
   - Soit une alternative textuelle contenant la référence à une description détaillée adjacente à l’image ;
   - Soit un lien ou un bouton adjacent permettant d’accéder à la description détaillée.
3. Si c’est le cas pour chaque élément `<embed>` pourvu de l’attribut `type="image/…"`, **le test est validé**.

### Test 4

**Chaque [bouton](/rgaa/glossaire/bouton-formulaire) de type image (balise `<input>` avec l’attribut `type="image"`) [porteur d’information](/rgaa/glossaire/image-porteuse-d-information), qui nécessite une [description détaillée](/rgaa/glossaire/description-detaillee-image), vérifie-t-il une de ces conditions ?**

1. Retrouver dans le document les éléments `<input>` pourvus de l’attribut `type="image"`, porteurs d’information qui nécessitent une description détaillée ;
2. Pour chaque élément `<input>` pourvu de l’attribut `type="image"`, vérifier qu’il existe :
   - Soit une alternative textuelle contenant la référence à une description détaillée adjacente à l’image ;
   - Soit un lien ou un bouton adjacent permettant d’accéder à la description détaillée ;
   - Soit un attribut WAI-ARIA aria-describedby associant un passage de texte faisant office de description détaillée.
3. Si c’est le cas pour chaque élément `<input>` pourvu de l’attribut `type="image"`, **le test est validé**.

### Test 5

**Chaque image vectorielle (balise `<svg>`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), qui nécessite une [description détaillée](/rgaa/glossaire/description-detaillee-image), vérifie-t-elle une de ces conditions ?**

1. Retrouver dans le document les éléments `<svg>` porteurs d’information qui nécessitent une description détaillée ;
2. Pour chaque élément `<svg>`, vérifier qu’il existe :
   - Soit un attribut WAI-ARIA `aria-label` contenant l’alternative textuelle et une référence à une description détaillée adjacente ;
   - Soit un attribut WAI-ARIA `aria-labelledby` associant un passage de texte faisant office d’alternative textuelle et un autre faisant office de description détaillée ;
   - Soit un attribut WAI-ARIA `aria-describedby` associant un passage de texte faisant office de description détaillée ;
   - Soit un lien ou un bouton adjacent permettant d’accéder à la description détaillée.
3. Si c’est le cas pour chaque élément `<svg>`, **le test est validé**.

### Test 6

**Pour chaque image vectorielle (balise `<svg>`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), ayant une [description détaillée](/rgaa/glossaire/description-detaillee-image), la référence éventuelle à la [description détaillée](/rgaa/glossaire/description-detaillee-image) dans l’attribut WAI-ARIA `aria-label` et la [description détaillée](/rgaa/glossaire/description-detaillee-image) associée par l’attribut WAI-ARIA `aria-labelledby` ou `aria-describedby` sont-elles correctement restituées par les technologies d’assistance ?**

1. Retrouver dans le document les éléments `<svg>` porteurs d’information dont la description détaillée est fournie au moyen d’un attribut `aria-label`, `aria-labelledby` ou `aria-describedby` ;
2. Pour chaque élément `<svg>`, vérifier que le contenu de la description détaillée est correctement restitué par les technologies d’assistance ;
3. Si c’est le cas pour chaque élément `<svg>`, **le test est validé**.

### Test 7

**Chaque image bitmap (balise `<canvas>`), [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), qui nécessite une [description détaillée](/rgaa/glossaire/description-detaillee-image), vérifie-t-elle une de ces conditions ?**

1. Retrouver dans le document les éléments `<canvas>` porteurs d’information qui nécessitent une description détaillée ;
2. Pour chaque élément `<canvas>`, vérifier qu’il existe :
   - Soit un attribut WAI-ARIA aria-label contenant l’alternative textuelle et une référence à une description détaillée adjacente ;
   - Soit un attribut WAI-ARIA aria-labelledby associant un passage de texte faisant office d’alternative textuelle et un autre faisant office de description détaillée ;
   - Soit un contenu textuel entre `<canvas>` et `</canvas>` faisant référence à une description détaillée adjacente à l’image bitmap ;
   - Soit un contenu textuel entre `<canvas>` et `</canvas>` faisant office de description détaillée ;
   - Soit un lien ou un bouton adjacent permettant d’accéder à la description détaillée.
3. Si c’est le cas pour chaque élément `<canvas>`, **le test est validé**.

### Test 8

**Pour chaque image bitmap (balise `<canvas>`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), qui implémente une référence à une [description détaillée](/rgaa/glossaire/description-detaillee-image) adjacente, cette référence est-elle correctement restituée par les technologies d’assistance ?**

1. Retrouver dans le document les éléments `<canvas>` porteurs d’information dont la description détaillée est fournie au moyen d’un attribut `aria-label`, `aria-labelledby` ou `aria-describedby` ;
2. Pour chaque élément `<canvas>`, vérifier que le contenu de la description détaillée est correctement restitué par les technologies d’assistance ;
3. Si c’est le cas pour chaque élément `<canvas>`, **le test est validé**.

### Test 9

**Pour chaque image (balise `<img>`, `<input>` avec l’attribut `type="image"`, `<area>`, `<object>`, `<embed>`, `<svg>`, `<canvas>`, ou possédant un attribut WAI-ARIA `role="img"`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), qui est accompagnée d’une [description détaillée](/rgaa/glossaire/description-detaillee-image) et qui utilise un attribut WAI-ARIA `aria-describedby`, l’attribut WAI-ARIA `aria-describedby` associe-t-il la [description détaillée](/rgaa/glossaire/description-detaillee-image) ?**

1. Retrouver dans le document les images (éléments `<img>`, `<input>` avec l’attribut `type="image"`, `<area>`, `<object>`, `<embed>`, `<svg>`, `<canvas>` ou possédant un attribut WAI-ARIA `role="img"`) porteuses d’information dont la description détaillée utilise un attribut WAI-ARIA `aria-describedby` ;
2. Pour chaque image, vérifier que le contenu de la description détaillée est correctement restitué par les technologies d’assistance ;
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 10

**Chaque balise possédant un attribut WAI-ARIA `role="img"` [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), qui nécessite une [description détaillée](/rgaa/glossaire/description-detaillee-image), vérifie-t-elle une de ces conditions ?**

1. Retrouver dans le document les éléments pourvus d’un attribut WAI-ARIA `role="img"` porteurs d’information qui nécessitent une description détaillée ;
2. Pour chaque élément `role="img"`, vérifier qu’il existe :
   - Soit un attribut WAI-ARIA `aria-label` contenant l’alternative textuelle et une référence à une description détaillée adjacente ;
   - Soit un attribut WAI-ARIA `aria-labelledby` associant un passage de texte faisant office d’alternative textuelle et un autre faisant office de description détaillée ;
   - Soit un attribut WAI-ARIA `aria-describedby` associant un passage de texte faisant office de description détaillée ;
   - Soit un lien ou un bouton adjacent permettant d’accéder à la description détaillée.
3. Si c’est le cas pour chaque élément `role="img"`, **le test est validé**.



## Références WCAG

### Critère WCAG 1.1.1

**Non-text Content** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G92** : [Technique G92](https://www.w3.org/WAI/WCAG21/Techniques/html/G92)
- **G74** : [Technique G74](https://www.w3.org/WAI/WCAG21/Techniques/html/G74)
- **G73** : [Technique G73](https://www.w3.org/WAI/WCAG21/Techniques/html/G73)
- **H45** : [Technique H45](https://www.w3.org/WAI/WCAG21/Techniques/html/H45)
- **ARIA6** : [Technique ARIA6](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA6)
