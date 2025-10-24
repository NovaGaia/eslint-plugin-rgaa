---
title: Chaque [image texte](/rgaa/glossaire/image-texte) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), en l’absence d’un [mécanisme de remplacement](/rgaa/glossaire/mecanisme-de-remplacement), doit si possible être remplacée par du [texte stylé](/rgaa/glossaire/texte-style). Cette règle est-elle respectée (hors cas particuliers) ?
---

# Chaque [image texte](/rgaa/glossaire/image-texte) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), en l’absence d’un [mécanisme de remplacement](/rgaa/glossaire/mecanisme-de-remplacement), doit si possible être remplacée par du [texte stylé](/rgaa/glossaire/texte-style). Cette règle est-elle respectée (hors cas particuliers) ?



## Tests

### Test 1

**Chaque [image texte](/rgaa/glossaire/image-texte) (balise `<img>` ou possédant un attribut WAI-ARIA `role="img"`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), en l’absence d’un [mécanisme de remplacement](/rgaa/glossaire/mecanisme-de-remplacement), doit si possible être remplacée par du [texte stylé](/rgaa/glossaire/texte-style). Cette règle est-elle respectée (hors cas particuliers) ?**

1. Retrouver dans le document les images texte structurées au moyen d’un élément `<img>` (ou d’un élément possédant l’attribut WAI-ARIA `role="img"`) ;
2. Pour chaque image, vérifier que :
   - Soit il existe un mécanisme de remplacement ;
   - Soit l’image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 2

**Chaque bouton « [image texte](/rgaa/glossaire/image-texte) » (balise `<input>` avec l’attribut `type="image"`) [porteur d’information](/rgaa/glossaire/image-porteuse-d-information), en l’absence d’un [mécanisme de remplacement](/rgaa/glossaire/mecanisme-de-remplacement), doit si possible être remplacé par du [texte stylé](/rgaa/glossaire/texte-style). Cette règle est-elle respectée (hors cas particuliers) ?**

1. Retrouver dans le document les boutons “images texte” (élément `<input>` avec l’attribut `type="image"`) ;
2. Pour chaque image, vérifier que :
   - Soit il existe un mécanisme de remplacement ;
   - Soit l’image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 3

**Chaque [image texte](/rgaa/glossaire/image-texte) objet (balise `<object>` avec l’attribut `type="image/…"`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), en l’absence d’un [mécanisme de remplacement](/rgaa/glossaire/mecanisme-de-remplacement), doit si possible être remplacée par du [texte stylé](/rgaa/glossaire/texte-style). Cette règle est-elle respectée (hors cas particuliers) ?**

1. Retrouver dans le document les images texte objet (élément `<object>` avec l’attribut `type="image/…"`) ;
2. Pour chaque image, vérifier que :
   - Soit il existe un mécanisme de remplacement ;
   - Soit l’image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 4

**Chaque [image texte](/rgaa/glossaire/image-texte) embarquée (balise `<embed>` avec l’attribut `type="image/…"`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), en l’absence d’un [mécanisme de remplacement](/rgaa/glossaire/mecanisme-de-remplacement), doit si possible être remplacée par du [texte stylé](/rgaa/glossaire/texte-style). Cette règle est-elle respectée (hors cas particuliers) ?**

1. Retrouver dans le document les images texte embarquées (élément `<embed>` avec l’attribut `type="image/…"`) ;
2. Pour chaque image, vérifier que :
   - Soit il existe un mécanisme de remplacement ;
   - Soit l’image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 5

**Chaque [image texte](/rgaa/glossaire/image-texte) bitmap (balise `<canvas>`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information), en l’absence d’un [mécanisme de remplacement](/rgaa/glossaire/mecanisme-de-remplacement), doit si possible être remplacée par du [texte stylé](/rgaa/glossaire/texte-style). Cette règle est-elle respectée (hors cas particuliers) ?**

1. Retrouver dans le document les images texte bitmap (élément `<canvas>`) ;
2. Pour chaque image, vérifier que :
   - Soit il existe un mécanisme de remplacement ;
   - Soit l’image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 6

**Chaque [image texte](/rgaa/glossaire/image-texte) SVG (balise `<svg>`) [porteuse d’information](/rgaa/glossaire/image-porteuse-d-information) et dont le texte n’est pas complètement structuré au moyen d’éléments `<text>`, en l’absence d’un [mécanisme de remplacement](/rgaa/glossaire/mecanisme-de-remplacement), doit si possible être remplacée par du [texte stylé](/rgaa/glossaire/texte-style). Cette règle est-elle respectée (hors cas particuliers) ?**

1. Retrouver dans le document les images texte vectorielle (élément `<svg>`) porteuse d’information et dont le texte n’est pas complètement structuré au moyen d’éléments `<text>` ;
2. Pour chaque image, vérifier que :
   - Soit il existe un mécanisme de remplacement ;
   - Soit l’image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3. Si c’est le cas pour chaque image, **le test est validé**.



## Références WCAG

### Critère WCAG 1.4.5

**Images of Text** (Niveau AA)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G136** : [Technique G136](https://www.w3.org/WAI/WCAG21/Techniques/html/G136)
- **G140** : [Technique G140](https://www.w3.org/WAI/WCAG21/Techniques/html/G140)
- **C22** : [Technique C22](https://www.w3.org/WAI/WCAG21/Techniques/html/C22)
- **C30** : [Technique C30](https://www.w3.org/WAI/WCAG21/Techniques/html/C30)
