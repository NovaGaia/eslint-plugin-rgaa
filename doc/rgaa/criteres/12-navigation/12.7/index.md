---
title: Dans chaque page web, un [lien d’évitement ou d’accès rapide](/rgaa/glossaire/liens-d-evitement-ou-d-acces-rapide) à la [zone de contenu principal](/rgaa/glossaire/zone-de-contenu-principal) est-il présent (hors cas particuliers) ?
---

# Dans chaque page web, un [lien d’évitement ou d’accès rapide](/rgaa/glossaire/liens-d-evitement-ou-d-acces-rapide) à la [zone de contenu principal](/rgaa/glossaire/zone-de-contenu-principal) est-il présent (hors cas particuliers) ?



## Tests

### Test 1

**Dans chaque page web, un lien permet-il d’éviter la [zone de contenu principal](/rgaa/glossaire/zone-de-contenu-principal) ou d’y accéder (hors cas particuliers) ?**

1. Retrouver dans le document la zone de contenu principal (indiquée par l’élément main visible) ;
2. Vérifier que la zone :
   - Soit peut être évitée au moyen d’un lien d’évitement précédant directement la zone dans l’ordre du code source ;
   - Soit peut être atteinte au moyen d’un lien d’accès rapide visible à la prise de focus lors d’une tabulation.
3. Si c’est le cas, **le test est validé**.

### Test 2

**Dans chaque ensemble de pages, le [lien d’évitement ou d’accès rapide](/rgaa/glossaire/liens-d-evitement-ou-d-acces-rapide) à la [zone de contenu principal](/rgaa/glossaire/zone-de-contenu-principal) vérifie-t-il ces conditions (hors cas particuliers) ?**

1. Retrouver dans le document la zone de contenu principal (indiquée par l’élément main visible) ;
2. Vérifier que le lien d’évitement ou d’accès rapide à la zone est :
   - Situé à la même place dans la présentation ;
   - Présent toujours dans le même ordre relatif dans le code source (généré côté client) ;
   - Visible à la prise de focus lors d’une tabulation ;
   - Fonctionnel.
3. Si c’est le cas, **le test est validé**.

Note : lorsque le site web est constitué d'une seule page, l'obligation de la présence d'un lien d'accès rapide est liée au contexte de la page (présence ou absence de navigation ou de contenus additionnels, par exemple). Le critère peut être considéré comme non applicable lorsqu'il est avéré qu'un lien d'accès rapide est inutile.



## Références WCAG

### Critère WCAG 2.4.1

**Bypass Blocks** (Niveau A)

### Critère WCAG 2.4.3

**Focus Order** (Niveau A)

### Critère WCAG 3.2.3

**Consistent Navigation** (Niveau AA)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G1** : [Technique G1](https://www.w3.org/WAI/WCAG21/Techniques/html/G1)
- **G59** : [Technique G59](https://www.w3.org/WAI/WCAG21/Techniques/html/G59)
- **G123** : [Technique G123](https://www.w3.org/WAI/WCAG21/Techniques/html/G123)
- **G124** : [Technique G124](https://www.w3.org/WAI/WCAG21/Techniques/html/G124)
- **SCR28** : [Technique SCR28](https://www.w3.org/WAI/WCAG21/Techniques/html/SCR28)
- **F66** : [Technique F66](https://www.w3.org/WAI/WCAG21/Techniques/html/F66)
