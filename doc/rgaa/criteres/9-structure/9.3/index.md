---
title: Dans chaque page web, chaque [liste](/rgaa/glossaire/listes) est-elle correctement structurée ?
---

# Dans chaque page web, chaque [liste](/rgaa/glossaire/listes) est-elle correctement structurée ?



## Tests

### Test 1

**Dans chaque page web, les informations regroupées visuellement sous forme de [liste](/rgaa/glossaire/listes) non ordonnée vérifient-elles une de ces conditions ?**

1. Retrouver dans le document les éléments regroupés visuellement sous la forme d’une liste non ordonnée ;
2. Pour chaque liste, vérifier que la liste est structurée :
   - Soit au moyen des éléments `<ul>` et `<li>` ;
   - Soit au moyen d’éléments pourvus d’attributs WAI-ARIA `role="list"` et `role="listitem"`.
3. Si c’est le cas pour chaque liste non ordonnée, **le test est validé**.

### Test 2

**Dans chaque page web, les informations regroupées visuellement sous forme de [liste](/rgaa/glossaire/listes) ordonnée vérifient-elles une de ces conditions ?**

1. Retrouver dans le document les éléments regroupés visuellement sous la forme d’une liste ordonnée ;
2. Pour chaque liste, vérifier que la liste est structurée :
   - Soit au moyen des éléments `<ol>` et `<li>` ;
   - Soit au moyen d’éléments pourvus d’attributs WAI-ARIA `role="list"` et `role="listitem"`.
3. Si c’est le cas pour chaque liste ordonnée, **le test est validé**.

### Test 3

**Dans chaque page web, les informations regroupées sous forme de [liste](/rgaa/glossaire/listes) de description utilisent-elles les balises `<dl>` et `<dt>/<dd>` ?**

1. Retrouver dans le document les éléments regroupés visuellement sous la forme d’une liste de description ;
2. Pour chaque liste, vérifier que la liste est structurée au moyen des éléments `<dl>`, `<dt>` et `<dd>` ;
3. Si c’est le cas pour chaque liste de description, **le test est validé**.



## Références WCAG

### Critère WCAG 1.3.1

**Info and Relationships** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G115** : [Technique G115](https://www.w3.org/WAI/WCAG21/Techniques/html/G115)
- **G153** : [Technique G153](https://www.w3.org/WAI/WCAG21/Techniques/html/G153)
- **H40** : [Technique H40](https://www.w3.org/WAI/WCAG21/Techniques/html/H40)
- **H48** : [Technique H48](https://www.w3.org/WAI/WCAG21/Techniques/html/H48)
- **F2** : [Technique F2](https://www.w3.org/WAI/WCAG21/Techniques/html/F2)
