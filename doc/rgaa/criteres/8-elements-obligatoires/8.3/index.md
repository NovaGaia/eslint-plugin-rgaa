---
title: Dans chaque page web, la [langue par défaut](/rgaa/glossaire/langue-par-defaut) est-elle présente ?
---

# Dans chaque page web, la [langue par défaut](/rgaa/glossaire/langue-par-defaut) est-elle présente ?



## Tests

### Test 1

**Pour chaque page web, l’indication de langue par défaut vérifie-t-elle une de ces conditions ?**

1. Retrouver dans le document l’indication de langue par défaut ;
2. Vérifier la présence d’une indication de langue :
   - Soit au moyen de l’attribut lang sur la balise html si le code est du HTML5 ou du HTML4 ;
   - Soit au moyen des attributs lang et xml:lang sur la balise html si le code est du XHTML 1.0 ;
   - Soit au moyen de l’attribut xml:lang sur la balise html si le code est du XHTML 1.1 ;
   - Sinon, vérifier la présence d’une indication de langue sur chaque élément de texte ou l’un de ses parents.
3. Si c’est le cas, **le test est validé**.



## Références WCAG

### Critère WCAG 3.1.1

**Language of Page** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **H57** : [Technique H57](https://www.w3.org/WAI/WCAG21/Techniques/html/H57)
