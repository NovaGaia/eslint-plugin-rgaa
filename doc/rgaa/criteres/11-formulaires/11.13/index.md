---
title: La finalité d’un champ de saisie peut-elle être déduite pour faciliter le remplissage automatique des champs avec les données de l’utilisateur ?
---

# La finalité d’un champ de saisie peut-elle être déduite pour faciliter le remplissage automatique des champs avec les données de l’utilisateur ?



## Tests

### Test 1

**Chaque [champ de formulaire](/rgaa/glossaire/champ-de-saisie-de-formulaire) dont l’objet se rapporte à une information concernant l’utilisateur vérifie-t-il ces conditions ?**

1. Retrouver dans le document les champs de formulaire qui se rapportent à une information concernant l’utilisateur (nom, prénom, numéro de téléphone, etc.) ;
2. Pour chaque champ de formulaire, vérifier que :
   - Le champ de formulaire possède un attribut `autocomplete` ;
   - L’attribut `autocomplete` est pourvu d’une valeur présente dans la <a rel="noreferrer noopener" target="_blank" title="liste des valeurs possibles - en anglais - nouvelle fenêtre" href="https://www.w3.org/TR/html52/sec-forms.html#autofill-processing-model">liste des valeurs possibles</a> ;
   - La valeur indiquée pour l’attribut `autocomplete` est pertinente au regard du type d’information attendu.
3. Si c’est le cas pour chaque champ de formulaire retrouvé, **le test est validé**.



## Références WCAG

### Critère WCAG 1.3.5

**Identify Input Purpose** (Niveau AA)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **H98** : [Technique H98](https://www.w3.org/WAI/WCAG21/Techniques/html/H98)
