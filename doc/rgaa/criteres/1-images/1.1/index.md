---
title: Chaque [image porteuse d’information](/rgaa/glossaire/image-porteuse-d-information) a-t-elle une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image) ?
---

# Chaque [image porteuse d’information](/rgaa/glossaire/image-porteuse-d-information) a-t-elle une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image) ?



## Tests

### Test 1

**Chaque image (balise `<img>` ou balise possédant l’attribut WAI-ARIA `role="img"`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information) a-t-elle une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image) ?**

1. Retrouver dans le document les images structurées au moyen d’un élément `<img>` ou d’un élément possédant l’attribut WAI-ARIA `role="img"` ;
2. Pour chaque image, déterminer si l’image est porteuse d’information ;
3. Dans le cas où il s’agit d’un élément `<img>`, vérifier que l’image est pourvue au moins d’une alternative textuelle parmi les suivantes :
   - Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
   - Contenu de l’attribut WAI-ARIA `aria-label` ;
   - Contenu de l’attribut `alt` ;
   - Contenu de l’attribut `title`.
4. Dans le cas où il s’agit d’un élément possédant l’attribut WAI-ARIA `role="img"`, vérifier que l’image est pourvue au moins d’une alternative textuelle parmi les suivantes :
   - Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
   - Contenu de l’attribut WAI-ARIA `aria-label`.
5. Si au moins une alternative textuelle est trouvée, **le test est validé**.

### Test 2

**Chaque [zone](/rgaa/glossaire/zone-d-une-image-reactive) d’une [image réactive](/rgaa/glossaire/image-reactive) (balise `<area>`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information) a-t-elle une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image) ?**

1. Retrouver dans le document les éléments `<area>` ;
2. Pour chaque élément `<area>`, déterminer si la zone réactive est porteuse d’information ;
3. Vérifier que la zone réactive est pourvue au moins d’une alternative textuelle parmi les suivantes :
   - Contenu de l’attribut WAI-ARIA `aria-label` ;
   - Contenu de l’attribut `alt` ;
4. Si au moins une alternative textuelle est trouvée, **le test est validé**.

### Test 3

**Chaque bouton de type `image` (balise `<input>` avec l’attribut `type="image"`) a-t-il une [alternative textuelle](/rgaa/glossaire/alternative-textuelle-image) ?**

1. Retrouver dans le document les éléments `<input>` pourvus de l’attribut `type="image"` ;
2. Pour chaque élément `<input>` pourvu de l’attribut type="image", déterminer si l’image utilisée est porteuse d’information ;
3. Vérifier que l’élément `<input>` est pourvu au moins d’une alternative textuelle parmi les suivantes :
   - Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
   - Contenu de l’attribut WAI-ARIA `aria-label` ;
   - Contenu de l’attribut `alt` ;
   - Contenu de l’attribut `title`.
4. Si au moins une alternative textuelle est trouvée, **le test est validé**.

### Test 4

**Chaque [zone cliquable](/rgaa/glossaire/zone-cliquable) d’une image réactive côté serveur est-elle doublée d’un mécanisme utilisable quel que soit le dispositif de pointage utilisé et permettant d’accéder à la même destination ?**

1. Retrouver dans le document les éléments `<img>` pourvus de l’attribut `ismap` ;
2. Pour chaque élément `<img>` pourvu de l’attribut `ismap`, vérifier la présence d’un lien ou d’un ensemble de liens (ou bien d’un autre type de composant d’interface qui jouerait un rôle similaire comme une liste de sélection, par exemple) permettant d’accéder aux mêmes ressources que lorsque l’image fait l’objet d’un clic.
3. Si c’est le cas, **le test est validé**.

### Test 5

**Chaque image vectorielle (balise `<svg>`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), vérifie-t-elle ces conditions ?**

1. Retrouver dans le document les éléments `<svg>` ;
2. Pour chaque élément `<svg>`, déterminer si l’image est porteuse d’information ;
3. S’assurer que l’élément `<svg>` est pourvu d’un attribut WAI-ARIA `role="img"` ;
4. Si ce n’est pas le cas, le test est invalidé.
5. Le cas échéant, vérifier que l’élément `<svg>` est pourvu au moins d’une alternative textuelle parmi les suivantes :
   - Contenu de l’élément `<title>` ;
   - Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
   - Contenu de l’attribut WAI-ARIA `aria-label` ;
6. Si au moins une alternative textuelle est trouvée, **le test est validé**.

### Test 6

**Chaque [image objet](/rgaa/glossaire/image-objet) (balise `<object>` avec l’attribut `type="image/…"`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), vérifie-t-elle une de ces conditions ?**

1. Retrouver dans le document les balises ouvrantes `<object>` pourvues de l'attribut `type="image/…"` ;
2. Pour chaque balise ouvrante `<object>` pourvue de l'attribut `type="image/…"`, déterminer si l’image utilisée est porteuse d'information ;
3. Vérifier que l’élément `<object>` est pourvu d’un attribut WAI-ARIA `role="img"` ;
4. Vérifier que l’élément `<object>` est pourvu au moins d’une alternative textuelle parmi les suivantes :
   - Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
   - Contenu de l’attribut WAI-ARIA `aria-label` ;
   - Contenu de l’attribut `title`.
5. Si au moins une alternative textuelle est trouvée, **le test est validé** ;
6. Sinon, vérifier que l'élément `<object>` est :
   - Soit immédiatement suivi d'un lien ou bouton adjacent permettant d'accéder à un contenu alternatif ;
   - Soit un mécanisme permet à l'utilisateur de remplacer l'élément `<object>` par un contenu alternatif.
7. Si c'est le cas, **le test est validé**.

### Test 7

**Chaque image embarquée (balise `<embed>` avec l’attribut `type="image/…"`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), vérifie-t-elle une de ces conditions ?**

1. Pour chaque élément `<embed>` pourvu de l’attribut `type="image/…"`, déterminer si l’image utilisée est porteuse d’information ;
2. Vérifier que l’élément `<embed>` est pourvu d’un attribut WAI-ARIA `role="img"` ;
3. Vérifier que l’élément `<embed>` est pourvu au moins d’une alternative textuelle parmi les suivantes :
   - Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
   - Contenu de l’attribut WAI-ARIA `aria-label` ;
   - Contenu de l’attribut `title`.
4. Si au moins une alternative textuelle est trouvée, **le test est validé** ;
5. Sinon, vérifier que l’élément `<embed>` est :
   - Soit immédiatement suivi d’un lien ou bouton adjacent permettant d’accéder à un contenu alternatif ;
   - Soit un mécanisme permet à l’utilisateur de remplacer l’élément `<embed>` par un contenu alternatif.
6. Si c’est le cas, **le test est validé**.

### Test 8

**Chaque image bitmap (balise `<canvas>`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), vérifie-t-elle une de ces conditions ?**

1. Retrouver dans le document les éléments `<canvas>` ;
2. Pour chaque élément `<canvas>`, déterminer si l’image utilisée est porteuse d’information ;
3. Vérifier que l’élément `<canvas>` est pourvu d’un attribut WAI-ARIA `role="img"` ;
4. Vérifier que la balise ouvrante `<canvas>` est pourvue au moins d’une alternative textuelle parmi les suivantes :
   - Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
   - Contenu de l’attribut WAI-ARIA `aria-label`.
5. Si au moins une alternative textuelle est trouvée, **le test est validé**.
6. Si les étapes 3 et 4 ne sont pas satisfaites, vérifier que l’élément `<canvas>` est :
   - Soit pourvu d’un contenu alternatif présent entre les balises `<canvas>` et `</canvas>` ;
   - Soit immédiatement suivi d’un lien ou bouton adjacent permettant d’accéder à un contenu alternatif ;
   - Soit un mécanisme permet à l’utilisateur de remplacer l’élément `<canvas>` par un contenu alternatif.
7. Si c’est le cas, **le test est validé**.

Note : si l'élément `<canvas>` dispose d'un rôle `img`, son alternative ne peut  être fournie que par les techniques listées à l'étape 4.



## Références WCAG

### Critère WCAG 1.1.1

**Non-text Content** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **H36** : [Technique H36](https://www.w3.org/WAI/WCAG21/Techniques/html/H36)
- **H37** : [Technique H37](https://www.w3.org/WAI/WCAG21/Techniques/html/H37)
- **H53** : [Technique H53](https://www.w3.org/WAI/WCAG21/Techniques/html/H53)
- **F65** : [Technique F65](https://www.w3.org/WAI/WCAG21/Techniques/html/F65)
- **H24** : [Technique H24](https://www.w3.org/WAI/WCAG21/Techniques/html/H24)
