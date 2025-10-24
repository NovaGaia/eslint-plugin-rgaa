---
title: Dans chaque [formulaire](/rgaa/glossaire/formulaire), chaque regroupement de [champs de même nature](/rgaa/glossaire/champs-de-meme-nature) a-t-il une [légende](/rgaa/glossaire/legende) ?
---

# Dans chaque [formulaire](/rgaa/glossaire/formulaire), chaque regroupement de [champs de même nature](/rgaa/glossaire/champs-de-meme-nature) a-t-il une [légende](/rgaa/glossaire/legende) ?



## Tests

### Test 1

**Chaque regroupement de [champs de même nature](/rgaa/glossaire/champs-de-meme-nature) possède-t-il une [légende](/rgaa/glossaire/legende) ?**

1. Retrouver dans le document les groupes de champs de formulaire de même nature ;
2. Pour chaque groupe de champs de formulaire de même nature, vérifier que :
   - Si le regroupement utilise un élément `<fieldset>`, l’élément `<fieldset>` possède un élément `<legend>` ;
   - Si l’élément de regroupement utilise un attribut WAI-ARIA `role="group"` ou `"radiogroup"`, il possède un attribut WAI-ARIA `aria-label` ou `aria-labelledby`.
3. Sinon, pour chacun des champs de même nature, vérifier la présence :
   - Soit d’un attribut title permettant de déterminer l’appartenance du champ au groupement de champ ;
   - Soit d’un attribut `aria-label` permettant de déterminer l’appartenance du champ au groupement de champ ;
   - Soit d’un attribut `aria-labelledby` qui référence un passage de texte permettant de déterminer l’appartenance du champ au groupement de champ ;
   - Soit d’un attribut `aria-describedby` qui référence un passage de texte permettant de déterminer l’appartenance du champ au groupement de champ.
4. Si c’est le cas pour chaque groupe de champs de formulaire ou pour chacun des champs de même nature, **le test est validé**.



## Références WCAG

### Critère WCAG 1.3.1

**Info and Relationships** (Niveau A)

### Critère WCAG 3.3.2

**Labels or Instructions** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **H71** : [Technique H71](https://www.w3.org/WAI/WCAG21/Techniques/html/H71)
- **ARIA17** : [Technique ARIA17](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA17)
