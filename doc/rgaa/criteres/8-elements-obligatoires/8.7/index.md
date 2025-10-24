---
title: Dans chaque page web, chaque [changement de langue](/rgaa/glossaire/changement-de-langue) est-il indiqué dans le code source (hors cas particuliers) ?
---

# Dans chaque page web, chaque [changement de langue](/rgaa/glossaire/changement-de-langue) est-il indiqué dans le code source (hors cas particuliers) ?



## Tests

### Test 1

**Dans chaque page web, chaque texte écrit dans une langue différente de la [langue par défaut](/rgaa/glossaire/langue-par-defaut) vérifie-t-il une de ces conditions (hors cas particuliers) ?**

1. Retrouver les passages de texte en langue étrangère, à l’exception :
   - Des noms propres ;
   - Des mots d’origine étrangère, présents dans le dictionnaire de la langue du document ;
   - Des mots d’origine étrangère et d’usage courant dont la prononciation ne provoque pas d’incompréhension.
   - Vérifier que chaque passage de texte retenu possède une indication de langue (attribut `lang` et/ou `xml:lang` sur l’élément lui-même ou l’un de ses parents).
2. Si c’est le cas, **le test est validé**.



## Références WCAG

### Critère WCAG 3.1.2

**Language of Parts** (Niveau AA)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **H58** : [Technique H58](https://www.w3.org/WAI/WCAG21/Techniques/html/H58)
