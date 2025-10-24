---
title: Pour chaque image [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information) ayant une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image), cette alternative est-elle pertinente (hors cas particuliers) ?
---

# Pour chaque image [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information) ayant une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image), cette alternative est-elle pertinente (hors cas particuliers) ?



## Tests

### Test 1

**Chaque image (balise `<img>` ou balise possédant l’attribut WAI-ARIA `role="img"`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), ayant une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image), cette alternative est-elle pertinente (hors cas particuliers) ?**

1. Retrouver dans le document les images structurées au moyen d’un élément `<img>` (ou d’un élément possédant l’attribut WAI-ARIA `role="img"`) pourvues d’une alternative textuelle ;
2. Pour chaque image, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 2

**Pour chaque [zone](/rgaa/glossaire/zone-d-une-image-reactive) (balise `<area>`) d’une [image réactive](/rgaa/glossaire/image-reactive) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), ayant une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image), cette alternative est-elle pertinente (hors cas particuliers) ?**

1. Retrouver dans le document les éléments `<area>` pourvus d’une alternative textuelle ;
2. Pour chaque élément `<area>`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 3

**Pour chaque [bouton](/rgaa/glossaire/bouton-formulaire) de type `image` (balise `<input>` avec l’attribut `type="image"`), ayant une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image), cette alternative est-elle pertinente (hors cas particuliers) ?**

1. Retrouver dans le document les éléments `<input>` pourvus de l’attribut `type="image"` et d’une alternative textuelle ;
2. Pour chaque élément `<input>` pourvu de l’attribut `type="image"`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 4

**Pour chaque [image objet](/rgaa/glossaire/image-objet) (balise `<object>` avec l’attribut `type="image/…"`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), ayant une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image) ou un [contenu alternatif](/rgaa/glossaire/contenu-alternatif), cette alternative est-elle pertinente (hors cas particuliers) ?**

1. Retrouver dans le document les éléments `<object>` pourvus de l’attribut `type="image/…"` et d’une alternative textuelle ;
2. Pour chaque élément `<object>` pourvu de l’attribut `type="image/…"`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 5

**Pour chaque image embarquée (balise `<embed>` avec l’attribut `type="image/…"`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), ayant une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image) ou un [contenu alternatif](/rgaa/glossaire/contenu-alternatif), cette alternative est-elle pertinente (hors cas particuliers) ?**

1. Retrouver dans le document les éléments `<embed>` pourvus de l’attribut `type="image/…"` et d’une alternative textuelle ;
2. Pour chaque élément `<embed>` pourvu de l’attribut `type="image/…"`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 6

**Pour chaque image vectorielle (balise `<svg>`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), ayant une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image), cette alternative est-elle pertinente (hors cas particuliers) ?**

1. Retrouver dans le document les éléments `<svg>` pourvus d’une alternative textuelle ;
2. Pour chaque élément `<svg>`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 7

**Pour chaque image bitmap (balise `<canvas>`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), ayant une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image) ou un [contenu alternatif](/rgaa/glossaire/contenu-alternatif), cette alternative est-elle pertinente (hors cas particuliers) ?**

1. Retrouver dans le document les éléments `<canvas>` pourvus d’une alternative textuelle ;
2. Pour chaque élément `<canvas>`, vérifier que l’alternative textuelle est pertinente ;
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 8

**Pour chaque image bitmap (balise `<canvas>`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information) et ayant  un [contenu alternatif](/rgaa/glossaire/contenu-alternatif) entre `<canvas>` et `</canvas>`, ce [contenu alternatif](/rgaa/glossaire/contenu-alternatif) est-il [correctement restitué par les technologies d’assistance](/rgaa/glossaire/correctement-restitue-par-les-technologies-d-assistance) ?**

1. Retrouver dans le document les éléments `<canvas>` pourvus d’un contenu alternatif entre les balises `<canvas>` et `</canvas>` ;
2. Pour chaque élément `<canvas>`, vérifier que le contenu alternatif est correctement restitué par les technologies d’assistance ;
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 9

**Pour chaque image [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information) et ayant une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image), l’[alternative textuelle](/rgaa/glossaire/alternative-textuelle-image) est-elle [courte et concise](/rgaa/glossaire/alternative-courte-et-concise) (hors cas particuliers) ?**

1. Retrouver dans le document les images pourvues d’une alternative textuelle ;
2. Pour chaque image, vérifier l’alternative textuelle est courte et concise ;
3. Si c’est le cas pour chaque image, **le test est validé**.



## Références WCAG

### Critère WCAG 1.1.1

**Non-text Content** (Niveau A)

### Critère WCAG 4.1.2

**Name, Role, Value** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G94** : [Technique G94](https://www.w3.org/WAI/WCAG21/Techniques/html/G94)
- **G95** : [Technique G95](https://www.w3.org/WAI/WCAG21/Techniques/html/G95)
- **F30** : [Technique F30](https://www.w3.org/WAI/WCAG21/Techniques/html/F30)
- **F71** : [Technique F71](https://www.w3.org/WAI/WCAG21/Techniques/html/F71)
- **G196** : [Technique G196](https://www.w3.org/WAI/WCAG21/Techniques/html/G196)
- **ARIA6** : [Technique ARIA6](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA6)
- **ARIA9** : [Technique ARIA9](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA9)
- **ARIA10** : [Technique ARIA10](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA10)
