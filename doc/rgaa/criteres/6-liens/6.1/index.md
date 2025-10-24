---
title: Chaque [lien](/rgaa/glossaire/lien) est-il explicite (hors cas particuliers) ?
---

# Chaque [lien](/rgaa/glossaire/lien) est-il explicite (hors cas particuliers) ?



## Tests

### Test 1

**Chaque [lien texte](/rgaa/glossaire/lien-texte) vérifie-t-il une de ces conditions (hors cas particuliers) ?**

1. Retrouver dans le document les liens texte ;
2. Pour chaque lien texte, vérifier que ce qui permet d’en comprendre la fonction et la destination est :
   - Soit l’intitulé du lien seul ;
   - Soit le contexte du lien.
3. Si c’est le cas pour chaque lien texte, **le test est validé**.

### Test 2

**Chaque [lien image](/rgaa/glossaire/lien-image) vérifie-t-il une de ces conditions (hors cas particuliers) ?**

1. Retrouver dans le document les liens image (lien avec pour contenu un élément `<img>` ou un élément ayant l’attribut WAI-ARIA `role="img"`, un élément `<area>` possédant un attribut `href`, un élément `<object>`, un élément `<canvas>` ou un élément `<svg>`) ;
2. Pour chaque lien image, vérifier que ce qui permet d’en comprendre la fonction et la destination est :
   - Soit l’intitulé du lien seul, fourni par l’alternative textuelle de l’image ;
   - Soit le contexte du lien.
3. Si c’est le cas pour chaque lien image, **le test est validé**.

### Test 3

**Chaque [lien composite](/rgaa/glossaire/lien-composite) vérifie-t-il une de ces conditions (hors cas particuliers) ?**

1. Retrouver dans le document les liens composites (lien composé à la fois de contenu texte et d’éléments de type image) ;
2. Pour chaque lien composite, vérifier que ce qui permet d’en comprendre la fonction et la destination est :
   - Soit l’intitulé du lien seul, fourni par la combinaison du contenu texte et de l’alternative textuelle de l’image ;
   - Soit le contexte du lien.
3. Si c’est le cas pour chaque lien composite, **le test est validé**.

### Test 4

**Chaque [lien SVG](/rgaa/glossaire/lien-svg) vérifie-t-il une de ces conditions (hors cas particuliers) ?**

1. Retrouver dans le document les liens SVG (élément `<svg>` qui possède un élément `<a>` pourvu d’un attribut `xlink-href` (SVG 1.1) ou `href` (SVG 2)) ;
2. Pour chaque lien SVG, vérifier que ce qui permet d’en comprendre la fonction et la destination est :
   - Soit l’intitulé du lien seul, fourni par le nom accessible de l’élément `<svg>` (résolu généralement à partir du contenu d’un élément `<text>`) ;
   - Soit le contexte du lien.
3. Si c’est le cas pour chaque lien SVG, **le test est validé**.

### Test 5

**Pour chaque [lien](/rgaa/glossaire/lien) ayant un [intitulé visible](/rgaa/glossaire/intitule-visible), le [nom accessible du lien](/rgaa/glossaire/intitule-ou-nom-accessible-de-lien) contient-il au moins l’[intitulé visible](/rgaa/glossaire/intitule-visible) (hors cas particuliers) ?**

1. Retrouver dans le document les liens autres que SVG dont le contenu est fourni à la fois par un intitulé visible et par le contenu soit d’un attribut title ou d’un attribut `aria-label` ou d’un attribut `aria-labelledby` ;
2. Pour chaque lien, vérifier que le contenu de l’attribut `title` ou de l’attribut `aria-label` ou de l’attribut `aria-labelledby` contient l’intitulé visible ;
3. Si c’est le cas pour chaque lien, **le test est validé** pour les liens autres que SVG.
4. Retrouver dans le document les liens SVG dont le contenu est fourni à la fois par un intitulé visible et par le contenu soit d’un attribut `aria-labelledby`, ou d’un attribut `aria-label` ou d’un élément title (enfant direct de l’élément `<svg>`) ou d’un attribut x-link:title (SVG 1.1) ou d’un ou plusieurs éléments `<text>`;
5. Pour chaque lien SVG, vérifier que le contenu de l’attribut `aria-labelledby` ou de l’attribut `aria-label` ou de l’élément `<title>` ou de l’attribut `x-link:title` ou d’un ou plusieurs éléments `<text>` contient l’intitulé visible ;
6. Si c’est le cas pour chaque lien SVG, **le test est validé** pour les liens SVG.
7. Si le test est validé à la fois pour les liens non SVG et pour les liens SVG, le test est globalement validé.

Note : considérant la détermination du nom accessible, il existe deux cas particuliers et une particularité liée aux expressions mathématiques :

- La ponctuation et les lettres majuscules présentes dans le texte de l’intitulé visible peuvent être ignorées dans le nom accessible sans porter à conséquence.
- Si le texte de l’intitulé visible sert de symbole, il ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, "B" au niveau d'un éditeur de texte aura pour nom accessible "Mettre en gras", le signe ">" en fonction du contexte signifiera "Suivant" ou "Lancer la vidéo"). Le cas des symboles mathématiques fait cependant exception (voir le point ci-dessous).
- Si l'étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d'étiquette au nom accessible (par exemple, "A>B"). Il est laissé à l'utilisateur le soin d'opérer la correspondance entre l'expression et ce qu'il doit épeler compte tenu de la connaissance qu'il a du fonctionnement de son logiciel de saisie vocale ("A plus grand que B" ou "A supérieur à B").



## Références WCAG

### Critère WCAG 1.1.1

**Non-text Content** (Niveau A)

### Critère WCAG 2.4.4

**Link Purpose (In Context)** (Niveau A)

### Critère WCAG 2.5.3

**Label in Name** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **H30** : [Technique H30](https://www.w3.org/WAI/WCAG21/Techniques/html/H30)
- **H78** : [Technique H78](https://www.w3.org/WAI/WCAG21/Techniques/html/H78)
- **H79** : [Technique H79](https://www.w3.org/WAI/WCAG21/Techniques/html/H79)
- **H80** : [Technique H80](https://www.w3.org/WAI/WCAG21/Techniques/html/H80)
- **H81** : [Technique H81](https://www.w3.org/WAI/WCAG21/Techniques/html/H81)
- **G53** : [Technique G53](https://www.w3.org/WAI/WCAG21/Techniques/html/G53)
- **G91** : [Technique G91](https://www.w3.org/WAI/WCAG21/Techniques/html/G91)
- **F63** : [Technique F63](https://www.w3.org/WAI/WCAG21/Techniques/html/F63)
- **F89** : [Technique F89](https://www.w3.org/WAI/WCAG21/Techniques/html/F89)
- **ARIA7** : [Technique ARIA7](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA7)
- **ARIA8** : [Technique ARIA8](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA8)
