---
title: Dans chaque [formulaire](/rgaa/glossaire/formulaire), les [items de même nature d’une liste de choix](/rgaa/glossaire/items-de-meme-nature-d-une-liste-de-choix) sont-ils regroupés de manière pertinente ?
---

# Dans chaque [formulaire](/rgaa/glossaire/formulaire), les [items de même nature d’une liste de choix](/rgaa/glossaire/items-de-meme-nature-d-une-liste-de-choix) sont-ils regroupés de manière pertinente ?



## Tests

### Test 1

**Pour chaque balise `<select>`, les [items de même nature d’une liste de choix](/rgaa/glossaire/items-de-meme-nature-d-une-liste-de-choix) sont-ils regroupés avec une balise `<optgroup>`, si nécessaire ?**

1. Retrouver dans le document les listes de sélection (élément `<select>`) ;
2. Pour chaque liste de sélection proposant des groupes d’items de même nature, vérifier que ces items sont regroupés au moyen d’éléments `<optgroup>` ;
3. Si c’est le cas pour chaque liste de sélection proposant des groupes d’items de même nature, **le test est validé**.

### Test 2

**Dans chaque balise `<select>`, chaque balise `<optgroup>` possède-t-elle un attribut `label` ?**

1. Retrouver dans le document les listes de sélection (élément `<select>`) qui possèdent des éléments `<optgroup>` ;
2. Pour chaque élément `<optgroup>`, vérifier qu’il possède un attribut `label` ;
3. Si c’est le cas pour chaque élément `<optgroup>`, **le test est validé**.

### Test 3

**Pour chaque balise `<optgroup>` ayant un attribut `label`, le contenu de l’attribut `label` est-il pertinent ?**

1. Retrouver dans le document les listes de sélection (élément `<select>`) qui possèdent des éléments `<optgroup>` pourvus d’un attribut `label` ;
2. Pour chaque attribut `label`, vérifier que son contenu est pertinent ;
3. Si c’est le cas pour chaque attribut `label`, **le test est validé**.



## Références WCAG

### Critère WCAG 1.3.1

**Info and Relationships** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **H85** : [Technique H85](https://www.w3.org/WAI/WCAG21/Techniques/html/H85)
