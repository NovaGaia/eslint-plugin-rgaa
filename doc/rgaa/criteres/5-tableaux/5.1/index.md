---
title: Chaque [tableau de données complexe](/rgaa/glossaire/tableau-de-donnees-complexe) a-t-il un [résumé](/rgaa/glossaire/resume-de-tableau) ?
---

# Chaque [tableau de données complexe](/rgaa/glossaire/tableau-de-donnees-complexe) a-t-il un [résumé](/rgaa/glossaire/resume-de-tableau) ?



## Tests

### Test 1

**Pour chaque [tableau de données complexe](/rgaa/glossaire/tableau-de-donnees-complexe), un [résumé](/rgaa/glossaire/resume-de-tableau) est-il disponible ?**

1. Retrouver dans le document les tableaux de données complexes (tableau de données - élément `<table>` ou élément pourvu d’un attribut WAI-ARIA `role="table"` - contenant des en-têtes qui ne sont pas répartis uniquement sur la première ligne et/ou la première colonne de la grille ou dont la portée n’est pas valable pour l’ensemble de la colonne ou de la ligne) ;
2. Pour chaque tableau de données complexe, vérifier qu’un passage de texte permettant de comprendre la nature et la structure du tableau, est présent :
   - Soit dans l’élément `<caption>` ;
   - Soit dans l’attribut `summary` de l’élément `<table>` (dans les versions de HTML et de XHTML antérieures à HTML 5) ;
   - Soit dans un passage de texte lié au tableau avec l’attribut `aria-describedby`.
3. Si c’est le cas pour chaque tableau de données complexe, **le test est validé**.



## Références WCAG

### Critère WCAG 1.3.1

**Info and Relationships** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **H73** : [Technique H73](https://www.w3.org/WAI/WCAG21/Techniques/html/H73)
