---
title: Dans chaque page web, les contenus additionnels apparaissant à la prise de focus ou au survol d’un [composant d’interface](/rgaa/glossaire/composant-d-interface) sont-ils contrôlables par l’utilisateur (hors cas particuliers) ?
---

# Dans chaque page web, les contenus additionnels apparaissant à la prise de focus ou au survol d’un [composant d’interface](/rgaa/glossaire/composant-d-interface) sont-ils contrôlables par l’utilisateur (hors cas particuliers) ?



## Tests

### Test 1

**Chaque contenu additionnel devenant visible à la prise de focus ou au survol d’un [composant d’interface](/rgaa/glossaire/composant-d-interface) peut-il être masqué par une action de l’utilisateur sans déplacer le focus ou le pointeur de la souris (hors cas particuliers) ?**

1. Retrouver dans le document les contenus additionnels devenant visible à la prise de focus ou au survol d’un composant d’interface, à l’exception :
   - Des contenus additionnels contrôlés par l’agent utilisateur (par exemple, les infobulles associées à l’attribut `title` ou à la validation native d’un formulaire ;
   - Des contenus additionnels devenant visibles par une activation de l’utilisateur (par exemple, une fenêtre de dialogue).
2. Pour chaque contenu additionnel, vérifier que :
   - Soit le contenu additionnel est positionné de façon à ce qu’il ne gêne pas la consultation des autres contenus informatifs sur lesquels il viendrait se superposer (y compris le composant d’interface qui a déclenché son apparition), quelles que soient les conditions de consultation (y compris lors de l’utilisation d’un mécanisme de zoom) ;
   - Soit un mécanisme (au clavier) permet de faire disparaître le contenu additionnel (par exemple, la touche Echap).
3. Si c’est le cas pour chaque contenu additionnel, **le test est validé**.

### Test 2

**Chaque contenu additionnel qui apparait au survol d’un [composant d’interface](/rgaa/glossaire/composant-d-interface) peut-il être survolé par le pointeur de la souris sans disparaître (hors cas particuliers) ?**

1. Retrouver dans le document les contenus additionnels devenant visible au survol d’un composant d’interface, à l’exception :
   - Des contenus additionnels contrôlés par l’agent utilisateur (par exemple, les infobulles associées à l’attribut title ou à la validation native d’un formulaire) ;
   - Des contenus additionnels devenant visibles par une activation de l’utilisateur (par exemple, une fenêtre de dialogue).
2. Pour chaque contenu additionnel, vérifier qu’il peut être survolé par le pointeur de la souris sans disparaître ;
3. Si c’est le cas pour chaque contenu additionnel, **le test est validé**.

### Test 3

**Chaque contenu additionnel qui apparaît à la prise de focus ou au survol d’un [composant d’interface](/rgaa/glossaire/composant-d-interface) vérifie-t-il une de ces conditions (hors cas particuliers) ?**

1. Retrouver dans le document les contenus additionnels devenant visible à la prise de focus ou au survol d’un composant d’interface, à l’exception :
   - Des contenus additionnels contrôlés par l’agent utilisateur (par exemple, les infobulles associées à l’attribut `title` ou à la validation native d’un formulaire) ;
   - Des contenus additionnels devenant visibles par une activation de l’utilisateur (par exemple, une fenêtre de dialogue).
2. Pour chaque contenu additionnel, vérifier qu’il reste visible :
   - Jusqu’à ce que l’utilisateur retire le pointeur souris ou le focus du contenu additionnel ou du composant d’interface ayant déclenché son apparition ;
   - Jusqu’à ce l’utilisateur déclenche le mécanisme prévu pour faire disparaître le contenu additionnel ;
   - Jusqu’à ce que l’information proposée par le contenu additionnel ne soit plus valide (par exemple un contenu additionnel signalant l’état “occupé” du composant d’interface que l’utilisateur souhaite activer ou encore un message d’erreur signalé sous la forme d’un contenu additionnel tant que l’utilisateur n’a pas rectifié sa saisie).
3. Si c’est le cas pour chaque contenu additionnel, **le test est validé**.



## Références WCAG

### Critère WCAG 1.4.13

**Content on Hover or Focus** (Niveau AA)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **F95** : [Technique F95](https://www.w3.org/WAI/WCAG21/Techniques/html/F95)
