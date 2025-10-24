---
title: Dans chaque page web, [les changements brusques de luminosité ou les effets de flash](/rgaa/glossaire/changement-brusque-de-luminosite-ou-effet-de-flash) sont-ils correctement utilisés ?
---

# Dans chaque page web, [les changements brusques de luminosité ou les effets de flash](/rgaa/glossaire/changement-brusque-de-luminosite-ou-effet-de-flash) sont-ils correctement utilisés ?



## Tests

### Test 1

**Dans chaque page web, chaque image ou élément multimédia (balise `<video>`, balise `<img>`, balise `<svg>`, balise `<canvas>`, balise `<embed>` ou balise `<object>`) qui provoque un changement brusque de luminosité ou un effet de flash vérifie-t-il une de ces conditions ?**

1. Retrouver dans le document les contenus clignotants ou qui provoquent des effets de flash de type image animée, vidéo (cf. note) ou animation (éléments `<img>`, `<svg>`, `<canvas>`, `<embed>`, `<object>` ou `<video>`) ;
2. Pour chaque contenu clignotant ou provoquant des effets de flash, vérifier que :
   - Soit la fréquence de l’effet est inférieur à 3 par seconde ;
   - Soit la surface cumulée est inférieure à 21824 pixels.
3. Si c’est le cas pour chaque contenu clignotant ou provoquant des effets de flash, **le test est validé**.

Note : l'évaluation de ce critère peut être complexe. Lorsque l'effet est géré par un script ou au moyen de CSS, l'analyse du code est suffisante. L'outil PEAT permet d'analyser les vidéos au format .avi, par exemple. Un exemple de vidéo ayant provoqué des crises d'épilepsie peut être consulté ici : London 2012 Olympics Seizure (https://www.youtube.com/watch?v=vs0hfhSje9M).

### Test 2

**Dans chaque page web, chaque script qui provoque [un changement brusque de luminosité ou un effet de flash](/rgaa/glossaire/changement-brusque-de-luminosite-ou-effet-de-flash) vérifie-t-il une de ces conditions ?**

1. Retrouver dans le document les contenus clignotants ou qui provoquent des effets de flash obtenus au moyen d’un script ;
2. Pour chaque contenu clignotant ou provoquant des effets de flash, vérifier que :
   - Soit la fréquence de l’effet est inférieur à 3 par seconde ;
   - Soit la surface cumulée est inférieure à 21824 pixels.
3. Si c’est le cas pour chaque contenu clignotant ou provoquant des effets de flash, **le test est validé**.

### Test 3

**Dans chaque page web, chaque mise en forme CSS qui provoque [un changement brusque de luminosité ou un effet de flash](/rgaa/glossaire/changement-brusque-de-luminosite-ou-effet-de-flash) vérifie-t-il une de ces conditions ?**

1. Retrouver dans le document les contenus clignotants ou qui provoquent des effets de flash obtenus au moyen d’une animation CSS ;
2. Pour chaque contenu clignotant ou provoquant des effets de flash, vérifier que :
   - Soit la fréquence de l’effet est inférieur à 3 par seconde ;
   - Soit la surface cumulée est inférieure à 21824 pixels.
3. Si c’est le cas pour chaque contenu clignotant ou provoquant des effets de flash, **le test est validé**.



## Références WCAG

### Critère WCAG 2.3.1

**Three Flashes or Below Threshold** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G15** : [Technique G15](https://www.w3.org/WAI/WCAG21/Techniques/html/G15)
- **G19** : [Technique G19](https://www.w3.org/WAI/WCAG21/Techniques/html/G19)
- **G176** : [Technique G176](https://www.w3.org/WAI/WCAG21/Techniques/html/G176)
