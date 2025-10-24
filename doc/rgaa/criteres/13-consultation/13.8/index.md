---
title: Dans chaque page web, chaque contenu en mouvement ou clignotant est-il [contrôlable](/rgaa/glossaire/controle-contenu-en-mouvement-ou-clignotant) par l’utilisateur ?
---

# Dans chaque page web, chaque contenu en mouvement ou clignotant est-il [contrôlable](/rgaa/glossaire/controle-contenu-en-mouvement-ou-clignotant) par l’utilisateur ?



## Tests

### Test 1

**Dans chaque page web, chaque contenu en mouvement déclenché automatiquement, vérifie-t-il une de ces conditions ?**

1. Retrouver dans le document les contenus en mouvement (obtenus au moyen d’une image, d’un script ou d’un effet CSS) déclenchés automatiquement au chargement de la page ou lors de l’affichage d’un contenu (cf. note) ;
2. Pour chaque contenu, vérifier que :
   - Soit la durée du mouvement est inférieure à 5 secondes ;
   - Soit la présence d’un mécanisme (un bouton, par exemple) permet d’arrêter et de relancer le mouvement ;
   - Soit la présence d’un mécanisme (un bouton, par exemple) permet de cacher et d’afficher à nouveau le contenu en mouvement ;
   - Soit la présence d’un mécanisme (un bouton, par exemple) permet d’afficher la totalité du contenu sans mouvement.
3. Si c’est le cas pour chaque contenu en mouvement, **le test est validé**.

### Test 2

**Dans chaque page web, chaque contenu clignotant déclenché automatiquement, vérifie-t-il une de ces conditions ?**

1. Retrouver dans le document les contenus clignotants (obtenus au moyen d’une image, d’un script ou d’un effet CSS) déclenchés automatiquement au chargement de la page ou lors de l’affichage d’un contenu (cf. note).
2. Pour chaque contenu, vérifier que :
   - Soit la durée du clignotement est inférieure à 5 secondes ;
   - Soit la présence d’un mécanisme (un bouton, par exemple) permet d’arrêter et de relancer le clignotement ;
   - Soit la présence d’un mécanisme (un bouton, par exemple) permet de cacher et d’afficher à nouveau le contenu clignotant ;
   - Soit la présence d’un mécanisme (un bouton, par exemple) permet d’afficher la totalité du contenu clignotant.
3. Si c’est le cas pour chaque contenu clignotant, **le test est validé**.

Note : l'arrêt ou la mise en pause d'un contenu en mouvement ou clignotant au moyen de la prise de focus (par exemple, l'effet est suspendu uniquement pendant la prise de focus) n'est pas considéré comme un procédé conforme. Dans certains cas, le mouvement ne peut pas être arrêté, par exemple dans le cas d'une barre de progression, dans ce cas, le critère est non applicable.



## Références WCAG

### Critère WCAG 2.2.1

**Timing Adjustable** (Niveau A)

### Critère WCAG 2.2.2

**Pause, Stop, Hide** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **F4** : [Technique F4](https://www.w3.org/WAI/WCAG21/Techniques/html/F4)
- **F7** : [Technique F7](https://www.w3.org/WAI/WCAG21/Techniques/html/F7)
- **F16** : [Technique F16](https://www.w3.org/WAI/WCAG21/Techniques/html/F16)
- **F47** : [Technique F47](https://www.w3.org/WAI/WCAG21/Techniques/html/F47)
- **F50** : [Technique F50](https://www.w3.org/WAI/WCAG21/Techniques/html/F50)
- **G4** : [Technique G4](https://www.w3.org/WAI/WCAG21/Techniques/html/G4)
- **G11** : [Technique G11](https://www.w3.org/WAI/WCAG21/Techniques/html/G11)
- **G152** : [Technique G152](https://www.w3.org/WAI/WCAG21/Techniques/html/G152)
- **G186** : [Technique G186](https://www.w3.org/WAI/WCAG21/Techniques/html/G186)
- **G187** : [Technique G187](https://www.w3.org/WAI/WCAG21/Techniques/html/G187)
- **G191** : [Technique G191](https://www.w3.org/WAI/WCAG21/Techniques/html/G191)
- **SCR22** : [Technique SCR22](https://www.w3.org/WAI/WCAG21/Techniques/html/SCR22)
- **SCR33** : [Technique SCR33](https://www.w3.org/WAI/WCAG21/Techniques/html/SCR33)
- **SCR36** : [Technique SCR36](https://www.w3.org/WAI/WCAG21/Techniques/html/SCR36)
- **SM11** : [Technique SM11](https://www.w3.org/WAI/WCAG21/Techniques/html/SM11)
- **SM12** : [Technique SM12](https://www.w3.org/WAI/WCAG21/Techniques/html/SM12)
