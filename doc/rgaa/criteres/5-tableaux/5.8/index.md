---
title: Chaque [tableau de mise en forme](/rgaa/glossaire/tableau-de-mise-en-forme) ne doit pas utiliser d’éléments propres aux  [tableaux de données](/rgaa/glossaire/tableau-de-donnees). Cette règle est-elle respectée ?
---

# Chaque [tableau de mise en forme](/rgaa/glossaire/tableau-de-mise-en-forme) ne doit pas utiliser d’éléments propres aux  [tableaux de données](/rgaa/glossaire/tableau-de-donnees). Cette règle est-elle respectée ?



## Tests

### Test 1

**Chaque [tableau de mise en forme](/rgaa/glossaire/tableau-de-mise-en-forme) (balise `<table>`) vérifie-t-il ces conditions ?**

1. Retrouver dans le document les tableaux de mise en forme ;
2. Pour chaque tableau de mise en forme, vérifier que :
   - L’élément `<table>` ne possède pas d'attribut `summary`, d’éléments enfant `<caption>`, `<thead>`, `<th>`, `<tfoot>` ou d’éléments pourvus d’un attribut WAI-ARIA `role="rowheader"` ou `role="columnheader"` ;
   - Les éléments `<td>` ne possèdent pas d’attributs `scope`, `headers` et `axis`.
3. Si c’est le cas pour chaque tableau de mise en forme, **le test est validé**.



## Références WCAG

### Critère WCAG 1.3.1

**Info and Relationships** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **F46** : [Technique F46](https://www.w3.org/WAI/WCAG21/Techniques/html/F46)
