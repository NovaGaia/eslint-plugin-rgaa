---
title: Dans chaque page web, les changements du [sens de lecture](/rgaa/glossaire/sens-de-lecture) sont-ils signalés ?
---

# Dans chaque page web, les changements du [sens de lecture](/rgaa/glossaire/sens-de-lecture) sont-ils signalés ?



## Tests

### Test 1

**Dans chaque page web, chaque texte dont le sens de lecture est différent du [sens de lecture](/rgaa/glossaire/sens-de-lecture) par défaut est contenu dans une balise possédant un attribut `dir` ?**

1. Retrouver dans le document les passages de textes qui utilisent une langue qui se lit dans le sens inverse de la langue du document (comme l’arabe ou l’hébreu pour le français par exemple).
2. Pour chaque passage de texte, vérifier que le passage de texte est contenu dans une balise qui possède un attribut `dir`.
3. Si c’est le cas pour chaque passage de texte, **le test est validé**.

### Test 2

**Dans chaque page web, chaque changement du [sens de lecture](/rgaa/glossaire/sens-de-lecture) (attribut `dir`) vérifie-t-il ces conditions ?**

1. Pour chaque passage de texte validé au test 8.10.1, vérifier que :
   - L’indication de sens de lecture est conforme (ltr, pour le sens « de gauche à droite » et rtl pour le sens « de droite à gauche ») ;
   - L’indication de sens de lecture est pertinente.
2. Si c’est le cas pour chaque passage de texte, **le test est validé**.



## Références WCAG

### Critère WCAG 1.3.2

**Meaningful Sequence** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **H56** : [Technique H56](https://www.w3.org/WAI/WCAG21/Techniques/html/H56)
