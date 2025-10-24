---
title: Dans chaque page web, la [structure du document](/rgaa/glossaire/structure-du-document) est-elle cohérente (hors cas particuliers) ?
---

# Dans chaque page web, la [structure du document](/rgaa/glossaire/structure-du-document) est-elle cohérente (hors cas particuliers) ?



## Tests

### Test 1

**Dans chaque page web, la [structure du document](/rgaa/glossaire/structure-du-document) vérifie-t-elle ces conditions (hors cas particuliers) ?**

1. Vérifier que la zone d’en-tête est structurée au moyen d’un élément `<header>` ;
2. Vérifier que les zones de navigation principales et secondaires sont structurées au moyen d’un élément `<nav>` ;
3. Vérifier que l’élément `<nav>` n’est pas utilisé en dehors de la structuration des zones de navigation principales et secondaires ;
4. Vérifier que la zone de contenu principal est structurée au moyen d’un élément `<main>` ;
5. Si le document possède plusieurs éléments `<main>`, vérifier qu’un seul de ces éléments est visible (les autres occurrences de l’élément sont pourvues d’un attribut `hidden`) ;
6. Vérifier que la zone de pied de page est structurée au moyen d’un élément `<footer>`.
7. Si c’est le cas pour chaque zone de contenu, **le test est validé**.



## Références WCAG

### Critère WCAG 1.3.1

**Info and Relationships** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G115** : [Technique G115](https://www.w3.org/WAI/WCAG21/Techniques/html/G115)
- **ARIA11** : [Technique ARIA11](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA11)
