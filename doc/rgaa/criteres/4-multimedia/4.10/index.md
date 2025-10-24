---
title: Chaque son déclenché automatiquement est-il [contrôlable](/rgaa/glossaire/controle-son-declenche-automatiquement) par l’utilisateur ?
---

# Chaque son déclenché automatiquement est-il [contrôlable](/rgaa/glossaire/controle-son-declenche-automatiquement) par l’utilisateur ?



## Tests

### Test 1

**Chaque séquence sonore déclenchée automatiquement via une balise `<object>`, `<video>`, `<audio>`, `<embed>`, `<bgsound>` ou un code JavaScript vérifie-t-elle une de ces conditions ?**

1. Au chargement du document, si un son se déclenche automatiquement, vérifier que :
   - Soit la séquence sonore a une durée inférieure ou égale à 3 secondes ;
   - Soit un dispositif (un bouton par exemple), sur l’élément ayant déclenché le son (voir note), ou dans la page, permet de le stopper ;
   - Soit le volume de la séquence peut être contrôlé par l’utilisateur, indépendamment du contrôle de volume du système.
2. Si c’est le cas, **le test est validé**.

Note : les éléments suivants sont susceptibles de déclencher des sons au chargement de la page : éléments `<audio>`, `<video>`, `<object>`, `<embed>`, `<bgsound>` ou un code JavaScript (utilisation de la Web Audio API, par exemple).



## Références WCAG

### Critère WCAG 1.4.2

**Audio Control** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G60** : [Technique G60](https://www.w3.org/WAI/WCAG21/Techniques/html/G60)
- **G170** : [Technique G170](https://www.w3.org/WAI/WCAG21/Techniques/html/G170)
- **G171** : [Technique G171](https://www.w3.org/WAI/WCAG21/Techniques/html/G171)
- **F23** : [Technique F23](https://www.w3.org/WAI/WCAG21/Techniques/html/F23)
- **F93** : [Technique F93](https://www.w3.org/WAI/WCAG21/Techniques/html/F93)
