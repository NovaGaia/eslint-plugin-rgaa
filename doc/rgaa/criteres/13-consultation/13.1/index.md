---
title: Pour chaque page web, l’utilisateur a-t-il le contrôle de chaque limite de temps modifiant le contenu (hors cas particuliers) ?
---

# Pour chaque page web, l’utilisateur a-t-il le contrôle de chaque limite de temps modifiant le contenu (hors cas particuliers) ?



## Tests

### Test 1

**Pour chaque page web, chaque [procédé de rafraîchissement](/rgaa/glossaire/procede-de-rafraichissement) (balise `<object>`, balise `<embed>`, balise `<svg>`, balise `<canvas>`, balise `<meta>`) vérifie-t-il une de ces conditions (hors cas particuliers) ?**

1. Retrouver dans le document les rafraîchissements initiés dans le contenu par un élément `<object>`, `<embed>`, `<svg>`, `<canvas>` ou par un élément `<meta http-equiv="refresh" content="[compteur]">` (dans l’élément `<head>` de la page) ;
2. Pour chaque rafraîchissement, vérifier que :
   - Soit la présence d’un mécanisme permet à l’utilisateur de stopper et de relancer le rafraîchissement ;
   - Soit la présence d’un mécanisme permet à l’utilisateur d’augmenter la limite de temps entre deux rafraîchissements de dix fois, au moins ;
   - Soit la présence d’un mécanisme qui avertit l’utilisateur de l’imminence du rafraîchissement, laisse 20 secondes, au moins, à l’utilisateur, pour augmenter la limite de temps avant le prochain rafraîchissement ;
   - Soit la limite de temps entre deux rafraîchissements est de vingt heures, au moins.
3. Si c’est le cas, **le test est validé**.

### Test 2

**Pour chaque page web, chaque procédé de [redirection](/rgaa/glossaire/redirection) effectué via une balise `<meta>` est-il immédiat (hors cas particuliers) ?**

1. Retrouver dans le document une redirection automatique initiée par un élément `<meta http-equiv="refresh" content="0;URL='[URL ciblée]'" />` ;
2. Vérifier que la redirection est immédiate ;
3. Si c’est le cas, **le test est validé**.

### Test 3

**Pour chaque page web, chaque procédé de [redirection](/rgaa/glossaire/redirection) effectué via un [script](/rgaa/glossaire/script) vérifie-t-il une de ces conditions (hors cas particuliers) ?**

1. Retrouver dans le document les redirections automatiques initiées par un script (sous la forme d’un décompte par exemple) ;
2. Pour chaque redirection automatique, vérifier que :
   - Soit la présence d’un mécanisme permet à l’utilisateur de stopper et relancer la redirection ;
   - Soit la présence d’un mécanisme permet à l’utilisateur d’augmenter la limite de temps avant le rafraîchissement de dix fois, au moins ;
   - Soit la présence d’un mécanisme qui avertit l’utilisateur de l’imminence du rafraîchissement, laisse 20 secondes, au moins, à l’utilisateur, pour augmenter la limite de temps avant le prochain rafraîchissement ;
   - Soit la limite de temps avant la redirection est de vingt heures, au moins.
3. Si c’est le cas, **le test est validé**.

### Test 4

**Pour chaque page web, chaque procédé limitant le temps d’une session vérifie-t-il une de ces conditions (hors cas particuliers) ?**

1. Retrouver dans le document les procédés limitant le temps d’une session (par exemple, après une authentification) ;
2. Pour chaque procédé, vérifier que :
   - Soit la présence d’un mécanisme permet à l’utilisateur de supprimer la limite de temps ;
   - Soit la présence d’un mécanisme permet à l’utilisateur d’augmenter la limite de temps ;
   - Soit la limite de temps est de vingt heures, au moins.
3. Si c’est le cas, **le test est validé**.

Note : lorsque la limite de temps est essentielle, notamment lorsqu'elle ne pourrait pas être supprimée sans changer fondamentalement le contenu ou les fonctionnalités liées au contenu, le critère est non applicable. Par exemple, le rafraîchissement d'un flux RSS dans une page n'est pas une limite de temps essentielle ; le critère est applicable. En revanche, une redirection automatique qui amène vers la nouvelle version d'une page à partir d'une url obsolète est essentielle ; le critère est non applicable.



## Références WCAG

### Critère WCAG 2.2.1

**Timing Adjustable** (Niveau A)

### Critère WCAG 2.2.2

**Pause, Stop, Hide** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **F40** : [Technique F40](https://www.w3.org/WAI/WCAG21/Techniques/html/F40)
- **F41** : [Technique F41](https://www.w3.org/WAI/WCAG21/Techniques/html/F41)
- **F58** : [Technique F58](https://www.w3.org/WAI/WCAG21/Techniques/html/F58)
- **F61** : [Technique F61](https://www.w3.org/WAI/WCAG21/Techniques/html/F61)
- **G75** : [Technique G75](https://www.w3.org/WAI/WCAG21/Techniques/html/G75)
- **G76** : [Technique G76](https://www.w3.org/WAI/WCAG21/Techniques/html/G76)
- **G110** : [Technique G110](https://www.w3.org/WAI/WCAG21/Techniques/html/G110)
- **G133** : [Technique G133](https://www.w3.org/WAI/WCAG21/Techniques/html/G133)
- **G180** : [Technique G180](https://www.w3.org/WAI/WCAG21/Techniques/html/G180)
- **G186** : [Technique G186](https://www.w3.org/WAI/WCAG21/Techniques/html/G186)
- **G198** : [Technique G198](https://www.w3.org/WAI/WCAG21/Techniques/html/G198)
- **H76** : [Technique H76](https://www.w3.org/WAI/WCAG21/Techniques/html/H76)
- **SCR1** : [Technique SCR1](https://www.w3.org/WAI/WCAG21/Techniques/html/SCR1)
- **SCR16** : [Technique SCR16](https://www.w3.org/WAI/WCAG21/Techniques/html/SCR16)
- **SCR36** : [Technique SCR36](https://www.w3.org/WAI/WCAG21/Techniques/html/SCR36)
- **SVR1** : [Technique SVR1](https://www.w3.org/WAI/WCAG21/Techniques/html/SVR1)
