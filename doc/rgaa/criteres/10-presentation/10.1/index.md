---
title: Dans le site web, des [feuilles de styles](/rgaa/glossaire/feuille-de-style) sont-elles utilisées pour contrôler la [présentation de l’information](/rgaa/glossaire/presentation-de-l-information) ?
---

# Dans le site web, des [feuilles de styles](/rgaa/glossaire/feuille-de-style) sont-elles utilisées pour contrôler la [présentation de l’information](/rgaa/glossaire/presentation-de-l-information) ?



## Tests

### Test 1

**Dans chaque page web, les balises servant à la [présentation de l’information](/rgaa/glossaire/presentation-de-l-information) ne doivent pas être présentes dans le code source généré des pages. Cette règle est-elle respectée ?**

1. Vérifier l’absence des éléments de présentation `<basefont>`, `<big>`, `<blink>`, `<center>`, `<font>`, `<marquee>`, `<s>`, `<strike>`, `<tt>` ;
2. Vérifier l’absence de l’élément `<u>` uniquement si le DOCTYPE du document ne correspond pas à HTML 5 ;
3. Si c’est le cas, **le test est validé**.

### Test 2

**Dans chaque page web, les attributs servant à la [présentation de l’information](/rgaa/glossaire/presentation-de-l-information) ne doivent pas être présents dans le code source généré des pages. Cette règle est-elle respectée ?**

1. Vérifier l’absence des attributs de présentation : `align`, `alink`, `background`, `bgcolor`, `border`, `cellpadding`, `cellspacing`, `char`, `charoff`, `clear`, `color`, `compact`, `frameborder`, `hspace`, `link`, `marginheight`, `marginwidth`, `text`, `valign`, `vlink`, `vspace`, `size`(exception faite de l'élément `<select>`), `width` (exception faite des éléments `<img>`, `<object>`, `<embed>`, `<canvas>` et `<svg>`), `height` (exception faite des éléments `<img>`, `<object>`, `<embed>`, `<canvas>` et `<svg>`) ;
2. Si c’est le cas, **le test est validé**.

### Test 3

**Dans chaque page web, l’utilisation des espaces vérifie-t-elle ces conditions ?**

1. Désactiver les styles (CSS) du document ;
2. Vérifier l’absence d’espaces utilisées :
   - Entre les lettres d’un mot ;
   - Pour créer des effets de marges ou d’alignement ;
   - Pour simuler des tableaux ou des colonnes.
3. Si c’est le cas, **le test est validé**.



## Références WCAG

### Critère WCAG 1.3.1

**Info and Relationships** (Niveau A)

### Critère WCAG 1.3.2

**Meaningful Sequence** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G140** : [Technique G140](https://www.w3.org/WAI/WCAG21/Techniques/html/G140)
- **F32** : [Technique F32](https://www.w3.org/WAI/WCAG21/Techniques/html/F32)
- **F33** : [Technique F33](https://www.w3.org/WAI/WCAG21/Techniques/html/F33)
- **F34** : [Technique F34](https://www.w3.org/WAI/WCAG21/Techniques/html/F34)
- **F48** : [Technique F48](https://www.w3.org/WAI/WCAG21/Techniques/html/F48)
- **C6** : [Technique C6](https://www.w3.org/WAI/WCAG21/Techniques/html/C6)
- **C8** : [Technique C8](https://www.w3.org/WAI/WCAG21/Techniques/html/C8)
- **C18** : [Technique C18](https://www.w3.org/WAI/WCAG21/Techniques/html/C18)
- **C22** : [Technique C22](https://www.w3.org/WAI/WCAG21/Techniques/html/C22)
