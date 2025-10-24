---
title: Chaque [étiquette](/rgaa/glossaire/etiquette-de-champ-de-formulaire) associée à un [champ de formulaire](/rgaa/glossaire/champ-de-saisie-de-formulaire) est-elle pertinente (hors cas particuliers) ?
---

# Chaque [étiquette](/rgaa/glossaire/etiquette-de-champ-de-formulaire) associée à un [champ de formulaire](/rgaa/glossaire/champ-de-saisie-de-formulaire) est-elle pertinente (hors cas particuliers) ?



## Tests

### Test 1

**Chaque balise `<label>` permet-elle de connaître la fonction exacte du [champ de formulaire](/rgaa/glossaire/champ-de-saisie-de-formulaire) auquel elle est associée ?**

1. Retrouver dans le document les champs de formulaire dont l’étiquette est fournie par un élément `<label>` ;
2. Pour chaque champ de formulaire, vérifier que le contenu de l’élément est pertinent ;
3. Si c’est le cas pour chaque champ de formulaire, **le test est validé**.

### Test 2

**Chaque attribut `title` permet-il de connaître la fonction exacte du [champ de formulaire](/rgaa/glossaire/champ-de-saisie-de-formulaire) auquel il est associé ?**

1. Retrouver dans le document les champs de formulaire dont l’étiquette est fournie par un attribut `title` ;
2. Pour chaque champ de formulaire, vérifier que le contenu de l’attribut est pertinent ;
3. Si c’est le cas pour chaque champ de formulaire, **le test est validé**.

### Test 3

**Chaque étiquette implémentée via l’attribut WAI-ARIA `aria-label` permet-elle de connaître la fonction exacte du [champ de formulaire](/rgaa/glossaire/champ-de-saisie-de-formulaire) auquel elle est associée ?**

1. Retrouver dans le document les champs de formulaire dont l’étiquette est fournie par un attribut WAI-ARIA `aria-label` ;
2. Pour chaque champ de formulaire, vérifier que le contenu de l’attribut est pertinent ;
3. Si c’est le cas pour chaque champ de formulaire, **le test est validé**.

### Test 4

**Chaque [passage de texte](/rgaa/glossaire/passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` permet-il de connaître la fonction exacte du [champ de formulaire](/rgaa/glossaire/champ-de-saisie-de-formulaire) auquel il est associé ?**

1. Retrouver dans le document les champs de formulaire dont l’étiquette est fournie par un attribut WAI-ARIA `aria-labelledby` ;
2. Pour chaque champ de formulaire, vérifier que le contenu du passage de texte référencé est pertinent ;
3. Si c’est le cas pour chaque champ de formulaire, **le test est validé**.

### Test 5

**Chaque [champ de formulaire](/rgaa/glossaire/champ-de-saisie-de-formulaire) ayant un [intitulé visible](/rgaa/glossaire/intitule-visible) vérifie-t-il ces conditions (hors cas particuliers) ?**

1. Retrouver dans le document les champs de formulaire dont l’étiquette est fournie à la fois par un intitulé visible et par le contenu soit d’un élément `<label>`, soit d’un attribut `title` ou d’un attribut `aria-label` ou d’un attribut `aria-labelledby` ;
2. Pour chaque champ de formulaire, vérifier que le contenu de l’élément `<label>` ou de l’attribut `title` ou de l’attribut `aria-label` ou de l’attribut `aria-labelledby` contient l’intitulé visible ;
3. Si c’est le cas pour chaque champ de formulaire, **le test est validé**.

### Test 6

**Chaque bouton adjacent au [champ de formulaire](/rgaa/glossaire/champ-de-saisie-de-formulaire) qui fournit une étiquette visible permet-il de connaître la fonction exacte du [champ de formulaire](/rgaa/glossaire/champ-de-saisie-de-formulaire) auquel il est associé ?**

1. Retrouver dans le document les champs de formulaire dont l’étiquette visible est fournie par un bouton adjacent ;
2. Pour chaque champ de formulaire, vérifier que le contenu visible du bouton est pertinent ;
3. Si c’est le cas pour chaque champ de formulaire, **le test est validé**.



## Références WCAG

### Critère WCAG 2.4.6

**Headings and Labels** (Niveau AA)

### Critère WCAG 2.5.3

**Label in Name** (Niveau A)

### Critère WCAG 3.3.2

**Labels or Instructions** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G82** : [Technique G82](https://www.w3.org/WAI/WCAG21/Techniques/html/G82)
- **G131** : [Technique G131](https://www.w3.org/WAI/WCAG21/Techniques/html/G131)
- **H44** : [Technique H44](https://www.w3.org/WAI/WCAG21/Techniques/html/H44)
- **H65** : [Technique H65](https://www.w3.org/WAI/WCAG21/Techniques/html/H65)
- **ARIA6** : [Technique ARIA6](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA6)
- **ARIA9** : [Technique ARIA9](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA9)
- **ARIA14** : [Technique ARIA14](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA14)
- **ARIA16** : [Technique ARIA16](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA16)
