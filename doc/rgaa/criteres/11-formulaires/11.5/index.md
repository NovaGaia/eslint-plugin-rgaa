---
title: Dans chaque [formulaire](/rgaa/glossaire/formulaire), les [champs de même nature](/rgaa/glossaire/champs-de-meme-nature) sont-ils regroupés, si nécessaire ?
---

# Dans chaque [formulaire](/rgaa/glossaire/formulaire), les [champs de même nature](/rgaa/glossaire/champs-de-meme-nature) sont-ils regroupés, si nécessaire ?



## Tests

### Test 1

**Les [champs de même nature](/rgaa/glossaire/champs-de-meme-nature) vérifient-ils l’une de ces conditions, si nécessaire ?**

1. Retrouver dans le document les champs de formulaire de même nature (par exemple un groupe de saisie d’informations d’identité, une série de cases à cocher, une saisie de date sur plusieurs champs successifs…) ;
2. Pour chaque groupe de champs de formulaire de même nature, vérifier que ces champs de même nature sont regroupés :
   - Soit dans un élément `<fieldset>` ;
   - Soit dans un élément possédant un attribut WAI-ARIA `role="group"` ;
   - Soit dans un élément possédant un attribut WAI-ARIA `role="radiogroup"` ou `"group"`, s’il s’agit d’éléments `<input>` de type `radio` ( ou d’éléments possédant un attribut WAI-ARIA `role="radio"`).
3. Si c’est le cas pour chaque groupe de champs de formulaire de même nature, **le test est validé**.



## Références WCAG

### Critère WCAG 1.3.1

**Info and Relationships** (Niveau A)

### Critère WCAG 3.3.2

**Labels or Instructions** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **H71** : [Technique H71](https://www.w3.org/WAI/WCAG21/Techniques/html/H71)
- **ARIA17** : [Technique ARIA17](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA17)
