---
title: Chaque [script](/rgaa/glossaire/script) est-il [contrôlable par le clavier et par tout dispositif de pointage](/rgaa/glossaire/accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) (hors cas particuliers) ?
---

# Chaque [script](/rgaa/glossaire/script) est-il [contrôlable par le clavier et par tout dispositif de pointage](/rgaa/glossaire/accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) (hors cas particuliers) ?



## Tests

### Test 1

**Chaque élément possédant un gestionnaire d’événement contrôlé par un script vérifie-t-il une de ces conditions (hors cas particuliers) ?**

1. Retrouver dans le document, tous les éléments sur lesquels est implémenté un gestionnaire d’événements JavaScript (par exemple click, focus, mouseover, blur, keydown, touch…).
2. Vérifier que l’élément est accessible au moyen du clavier :
   - Il est atteignable avec la touche de tabulation (tab) ;
   - Si l’élément gère une action simple, il est activable au clavier avec la touche entrée (Entrée) ;
   - Si l’élément gère une action complexe, il est utilisable avec le clavier (généralement avec les touches de direction).
3. Sinon, vérifier qu’un élément accessible par le clavier permettant de réaliser la même action est présent dans la page.
4. Vérifier que l’élément est accessible par tout dispositif de pointage (souris, toucher, stylet…).
5. Sinon, vérifier qu’un élément accessible au moyen d’un dispositif de pointage et permettant de réaliser la même action est présent dans la page.
6. Si c’est le cas, **le test est validé**.

### Test 2

**Un [script](/rgaa/glossaire/script) ne doit pas supprimer le focus d’un élément qui le reçoit. Cette règle est-elle respectée (hors cas particuliers) ?**

1. Activer, l’un après l’autre, tous les éléments capables de recevoir le focus.
2. Vérifier que le focus n’est pas supprimé via une fonctionnalité JavaScript.
3. Si c’est le cas, **le test est validé**.



## Références WCAG

### Critère WCAG 1.3.1

**Info and Relationships** (Niveau A)

### Critère WCAG 2.1.1

**Keyboard** (Niveau A)

### Critère WCAG 2.4.7

**Focus Visible** (Niveau AA)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G90** : [Technique G90](https://www.w3.org/WAI/WCAG21/Techniques/html/G90)
- **G202** : [Technique G202](https://www.w3.org/WAI/WCAG21/Techniques/html/G202)
- **F42** : [Technique F42](https://www.w3.org/WAI/WCAG21/Techniques/html/F42)
- **F54** : [Technique F54](https://www.w3.org/WAI/WCAG21/Techniques/html/F54)
- **F55** : [Technique F55](https://www.w3.org/WAI/WCAG21/Techniques/html/F55)
- **SCR2** : [Technique SCR2](https://www.w3.org/WAI/WCAG21/Techniques/html/SCR2)
- **SCR20** : [Technique SCR20](https://www.w3.org/WAI/WCAG21/Techniques/html/SCR20)
- **SCR29** : [Technique SCR29](https://www.w3.org/WAI/WCAG21/Techniques/html/SCR29)
- **SCR35** : [Technique SCR35](https://www.w3.org/WAI/WCAG21/Techniques/html/SCR35)
