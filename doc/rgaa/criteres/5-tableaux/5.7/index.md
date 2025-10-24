---
title: Pour chaque [tableau de données](/rgaa/glossaire/tableau-de-donnees), la technique appropriée permettant d’associer chaque cellule avec ses [en-têtes](/rgaa/glossaire/en-tete-de-colonne-ou-de-ligne) est-elle utilisée (hors cas particuliers) ?
---

# Pour chaque [tableau de données](/rgaa/glossaire/tableau-de-donnees), la technique appropriée permettant d’associer chaque cellule avec ses [en-têtes](/rgaa/glossaire/en-tete-de-colonne-ou-de-ligne) est-elle utilisée (hors cas particuliers) ?



## Tests

### Test 1

**Pour chaque contenu de balise `<th>` s’appliquant à la totalité de la ligne ou de la colonne, la balise `<th>` respecte-t-elle une de ces conditions (hors cas particuliers) ?**

1. Retrouver dans le document les tableaux de données ;
2. Pour chaque en-tête (élément `<th>`) s’appliquant à la totalité de la ligne ou de la colonne, vérifier que l’élément `<th>` possède :
   - Soit un attribut `id` unique ;
   - Soit un attribut scope ;
   - Soit un attribut WAI-ARIA `role="rowheader"` ou `"columnheader"`.
3. Si c’est le cas pour chaque en-tête s’appliquant à la totalité de la ligne ou de la colonne, **le test est validé**.

### Test 2

**Pour chaque contenu de balise `<th>` s’appliquant à la totalité de la ligne ou de la colonne et possédant un attribut `scope`, la balise `<th>` vérifie-t-elle une de ces conditions ?**

1. Retrouver dans le document les tableaux de données ;
2. Pour chaque en-tête (élément `<th>`) s’appliquant à la totalité de la ligne ou de la colonne et pourvu d’un attribut `scope`, vérifier que l’attribut `scope` possède :
   - Soit une valeur `"row"` pour les en-têtes de ligne ;
   - Soit une valeur `"col"` pour les en-têtes de colonne.
3. Si c’est le cas pour chaque en-tête s’appliquant à la totalité de la ligne ou de la colonne et pourvu d’un attribut `scope`, **le test est validé**.

### Test 3

**Pour chaque contenu de balise `<th>` ne s’appliquant pas à la totalité de la ligne ou de la colonne, la balise `<th>` vérifie-t-elle ces conditions ?**

1. Retrouver dans le document les tableaux de données ;
2. Pour chaque en-tête (élément `<th>`) ne s’appliquant pas à la totalité de la ligne ou de la colonne, vérifier que l’élément `<th>` :
   - Possède un attribut `id` unique ;
   - Et ne possède pas d’attribut `scope `;
   - Et ne possède pas d’attribut WAI-ARIA `role="rowheader"` ou `"columnheader"`.
3. Si c’est le cas pour chaque en-tête ne s’appliquant pas à la totalité de la ligne ou de la colonne, **le test est validé**.

### Test 4

**Pour chaque contenu de balise `<td>` ou `<th>` associée à un ou plusieurs en-têtes possédant un attribut `id`, la balise vérifie-t-elle ces conditions ?**

1. Retrouver dans le document les tableaux de données ;
2. Pour chaque élément `<td>` ou `<th>` associé à un ou plusieurs en-têtes possédant un attribut `id`, vérifier que :
   - L’élément `<td>` ou `<th>` possède un attribut `headers` ;
   - Et l’attribut `headers` possède la liste des valeurs d’attribut `id` des en-têtes associés.
3. Si c’est le cas pour chaque élément `<td>` ou `<th>` associé à un ou plusieurs en-têtes possédant un attribut `id`, **le test est validé**.

### Test 5

**Pour chaque balise pourvue d’un attribut WAI-ARIA `role="rowheader"` ou `role="columnheader"` dont le contenu s’applique à la totalité de la ligne ou de la colonne, la balise vérifie-t-elle une de ces conditions ?**

1. Retrouver dans le document les tableaux de données ;
2. Pour chaque en-tête s’appliquant à la totalité de la ligne ou de la colonne et pourvu d’un attribut WAI-ARIA `role="rowheader"` ou `"columnheader"`, vérifier que l’élément possède :
   - Soit un attribut WAI-ARIA `role="rowheader"` pour les en-têtes de ligne ;
   - Soit un attribut WAI-ARIA `role="columnheader"` pour les en-têtes de colonne.
3. Si c’est le cas pour chaque en-tête s’appliquant à la totalité de la ligne ou de la colonne et pourvu d’un attribut WAI-ARIA `role="rowheader"` ou `"columnheader"`, **le test est validé**.



## Références WCAG

### Critère WCAG 1.3.1

**Info and Relationships** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **H43** : [Technique H43](https://www.w3.org/WAI/WCAG21/Techniques/html/H43)
- **H63** : [Technique H63](https://www.w3.org/WAI/WCAG21/Techniques/html/H63)
- **F90** : [Technique F90](https://www.w3.org/WAI/WCAG21/Techniques/html/F90)
