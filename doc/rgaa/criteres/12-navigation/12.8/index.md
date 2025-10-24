---
title: Dans chaque page web, l’[ordre de tabulation](/rgaa/glossaire/ordre-de-tabulation) est-il [cohérent](/rgaa/glossaire/comprehensible-ordre-de-lecture) ?
---

# Dans chaque page web, l’[ordre de tabulation](/rgaa/glossaire/ordre-de-tabulation) est-il [cohérent](/rgaa/glossaire/comprehensible-ordre-de-lecture) ?



## Tests

### Test 1

**Dans chaque page web, l’[ordre de tabulation](/rgaa/glossaire/ordre-de-tabulation) dans le contenu est-il [cohérent](/rgaa/glossaire/comprehensible-ordre-de-lecture) ?**

1. Parcourir dans le document l’ensemble des contenus au moyen de la touche de tabulation vers l’avant (touche Tab) et vers l’arrière (touches Maj+Tab) ;
2. Vérifier que l’ordre de déplacement du focus reste cohérent relativement au contenu considéré (par exemple, l’ordre de tabulation dans une fenêtre modale ne doit considérer que les éléments d’interface présents au sein de cette fenêtre) ;
3. Si c’est le cas, **le test est validé**.

Note : il n'est pas obligatoire que la tabulation suive l'ordre de lecture naturel (de gauche à droite et de haut en bas par exemple) tant que les éléments sont accessibles dans un ordre cohérent.

### Test 2

**Pour chaque [script](/rgaa/glossaire/script) qui met à jour ou insère un contenu, l’[ordre de tabulation](/rgaa/glossaire/ordre-de-tabulation) reste-t-il [cohérent](/rgaa/glossaire/comprehensible-ordre-de-lecture) ?**

1. Retrouver dans le document l’ensemble des contenus insérés au moyen d’un script (affichage d’éléments masqués, mise jour de contenu via AJAX par exemple) ;
2. Positionner la tabulation sur l’élément déclencheur et l’activer ;
3. Après l’affichage du contenu mis à jour, vérifier que la tabulation reste cohérente (repositionnement correct du focus) ;
4. Si c’est le cas, **le test est validé**.



## Références WCAG

### Critère WCAG 2.4.3

**Focus Order** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G59** : [Technique G59](https://www.w3.org/WAI/WCAG21/Techniques/html/G59)
- **H4** : [Technique H4](https://www.w3.org/WAI/WCAG21/Techniques/html/H4)
- **F44** : [Technique F44](https://www.w3.org/WAI/WCAG21/Techniques/html/F44)
- **F85** : [Technique F85](https://www.w3.org/WAI/WCAG21/Techniques/html/F85)
- **SCR26** : [Technique SCR26](https://www.w3.org/WAI/WCAG21/Techniques/html/SCR26)
- **SCR27** : [Technique SCR27](https://www.w3.org/WAI/WCAG21/Techniques/html/SCR27)
- **SCR37** : [Technique SCR37](https://www.w3.org/WAI/WCAG21/Techniques/html/SCR37)
- **C27** : [Technique C27](https://www.w3.org/WAI/WCAG21/Techniques/html/C27)
