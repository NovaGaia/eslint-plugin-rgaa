---
title: Pour chaque [tableau de données](/rgaa/glossaire/tableau-de-donnees), chaque [en-tête de colonne](/rgaa/glossaire/en-tete-de-colonne-ou-de-ligne) et chaque [en-tête de ligne](/rgaa/glossaire/en-tete-de-colonne-ou-de-ligne) sont-ils correctement déclarés ?
---

# Pour chaque [tableau de données](/rgaa/glossaire/tableau-de-donnees), chaque [en-tête de colonne](/rgaa/glossaire/en-tete-de-colonne-ou-de-ligne) et chaque [en-tête de ligne](/rgaa/glossaire/en-tete-de-colonne-ou-de-ligne) sont-ils correctement déclarés ?



## Tests

### Test 1

**Pour chaque [tableau de données](/rgaa/glossaire/tableau-de-donnees), chaque [en-tête de colonne](/rgaa/glossaire/en-tete-de-colonne-ou-de-ligne) s’appliquant à la totalité de la colonne vérifie-t-il une de ces conditions ?**

1. Retrouver dans le document les tableaux de données ;
2. Pour chaque en-tête de colonnes s’appliquant à la totalité de la colonne, vérifier que l’en-tête de colonne est structuré au moyen :
   - Soit d’un élément `<th>` ;
   - Soit d’un élément pourvu d’un attribut WAI-ARIA `role="columnheader"`.
3. Si c’est le cas pour chaque en-tête de colonne s’appliquant à la totalité de la colonne, **le test est validé**.

### Test 2

**Pour chaque [tableau de données](/rgaa/glossaire/tableau-de-donnees), chaque [en-tête de ligne](/rgaa/glossaire/en-tete-de-colonne-ou-de-ligne) s’appliquant à la totalité de la ligne vérifie-t-il une de ces conditions ?**

1. Retrouver dans le document les tableaux de données ;
2. Pour chaque en-tête de ligne s’appliquant à la totalité de la ligne, vérifier que l’en-tête de ligne est structuré au moyen :
   - Soit d’un élément `<th>` ;
   - Soit d’un élément pourvu d’un attribut WAI-ARIA `role="rowheader"`.
3. Si c’est le cas pour chaque en-tête de ligne s’appliquant à la totalité de la ligne, **le test est validé**.

### Test 3

**Pour chaque [tableau de données](/rgaa/glossaire/tableau-de-donnees), chaque en-tête ne s’appliquant pas à la totalité de la ligne ou de la colonne est-il structuré au moyen d’une balise `<th>` ?**

1. Retrouver dans le document les tableaux de données ;
2. Pour chaque en-tête ne s’appliquant pas à la totalité de la ligne ou de la colonne, vérifier que l’en-tête de ligne est structuré au moyen d’un élément `<th>` ;
3. Si c’est le cas pour chaque en-tête ne s’appliquant pas à la totalité de la ligne ou de la colonne, **le test est validé**.

### Test 4

**Pour chaque [tableau de données](/rgaa/glossaire/tableau-de-donnees), chaque cellule associée à plusieurs en-têtes est-elle structurée au moyen d’une balise `<td>` ou `<th>` ?**

1. Retrouver dans le document les tableaux de données ;
2. Pour chaque cellule associée à plusieurs en-têtes est-elle structurée au moyen d’une balise `<th>` ou `<td>` ;
3. Si c’est le cas pour chaque en-tête ne s’appliquant pas à la totalité de la ligne ou de la colonne, **le test est validé**.



## Références WCAG

### Critère WCAG 1.3.1

**Info and Relationships** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **H51** : [Technique H51](https://www.w3.org/WAI/WCAG21/Techniques/html/H51)
- **F91** : [Technique F91](https://www.w3.org/WAI/WCAG21/Techniques/html/F91)
