---
title: Dans chaque [formulaire](/rgaa/glossaire/formulaire), chaque [étiquette de champ](/rgaa/glossaire/etiquette-de-champ-de-formulaire) et son champ associé sont-ils [accolés](/rgaa/glossaire/accoles-etiquette-et-champ-accoles) (hors cas particuliers) ?
---

# Dans chaque [formulaire](/rgaa/glossaire/formulaire), chaque [étiquette de champ](/rgaa/glossaire/etiquette-de-champ-de-formulaire) et son champ associé sont-ils [accolés](/rgaa/glossaire/accoles-etiquette-et-champ-accoles) (hors cas particuliers) ?



## Tests

### Test 1

**Chaque [étiquette de champ](/rgaa/glossaire/etiquette-de-champ-de-formulaire) et son [champ](/rgaa/glossaire/champ-de-saisie-de-formulaire) associé sont-ils [accolés](/rgaa/glossaire/accoles-etiquette-et-champ-accoles) ?**

1. Retrouver dans le document les champs de formulaire ;
2. Pour chaque champ de formulaire, vérifier qu’il est accolé à son étiquette ;
3. Si c’est le cas pour chaque champ de formulaire, **le test est validé**.

### Test 2

**Chaque [étiquette](/rgaa/glossaire/etiquette-de-champ-de-formulaire) [accolée](/rgaa/glossaire/accoles-etiquette-et-champ-accoles) à un [champ](/rgaa/glossaire/champ-de-saisie-de-formulaire) (à l’exception des cases à cocher, bouton radio ou balises ayant un attribut WAI-ARIA `role="checkbox"`, `role="radio"` ou `role="switch"`), vérifie-t-elle ces conditions (hors cas particuliers) ?**

1. Retrouver dans le document les champs de formulaire qui ne sont pas des éléments `<input>` de type `checkbox` ou de type `radio` ou des éléments ayant un attribut WAI-ARIA `role="checkbox"`, `role="radio"` ou `role="switch`";
2. Pour chaque champ de formulaire, vérifier que l’étiquette est visuellement accolée :
   - Immédiatement au-dessus ou à gauche du champ de formulaire lorsque le sens de lecture de la langue de l’étiquette est de gauche à droite ;
   - Immédiatement au-dessus ou à droite du champ de formulaire lorsque le sens de lecture de la langue de l’étiquette est de droite à gauche.
3. Si c’est le cas pour chaque champ de formulaire, **le test est validé**.

### Test 3

**Chaque [étiquette](/rgaa/glossaire/etiquette-de-champ-de-formulaire) [accolée](/rgaa/glossaire/accoles-etiquette-et-champ-accoles) à un [champ](/rgaa/glossaire/champ-de-saisie-de-formulaire) de type `checkbox` ou `radio` ou à une balise ayant un attribut WAI-ARIA `role="checkbox"`, `role="radio"` ou `role="switch"`, vérifie-t-elle ces conditions (hors cas particuliers) ?**

1. Retrouver dans le document les champs de formulaire qui sont `<input>` de type `checkbox` ou de type `radio` ou des éléments ayant un attribut WAI-ARIA `role="checkbox"`, `role="radio"` ou `role="switch`";
2. Pour chaque champ de formulaire, vérifier que l’étiquette est visuellement accolée :
   - Immédiatement au-dessous ou à droite du champ de formulaire lorsque le sens de lecture de la langue de l’étiquette est de gauche à droite ;
   - Immédiatement au-dessous ou à gauche du champ de formulaire lorsque le sens de lecture de la langue de l’étiquette est de droite à gauche.
3. Si c’est le cas pour chaque champ de formulaire, **le test est validé**.



## Références WCAG

### Critère WCAG 3.3.2

**Labels or Instructions** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G162** : [Technique G162](https://www.w3.org/WAI/WCAG21/Techniques/html/G162)
