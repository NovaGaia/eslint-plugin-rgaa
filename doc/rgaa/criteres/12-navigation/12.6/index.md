---
title: Les zones de regroupement de contenus présentes dans plusieurs pages web (zones d’[en-tête](/rgaa/glossaire/zone-d-en-tete), de [navigation principale](/rgaa/glossaire/menu-et-barre-de-navigation), de [contenu principal](/rgaa/glossaire/zone-de-contenu-principal), de [pied de page](/rgaa/glossaire/zone-de-pied-de-page) et de [moteur de recherche](/rgaa/glossaire/moteur-de-recherche-interne-a-un-site-web)) peuvent-elles être atteintes ou évitées ?
---

# Les zones de regroupement de contenus présentes dans plusieurs pages web (zones d’[en-tête](/rgaa/glossaire/zone-d-en-tete), de [navigation principale](/rgaa/glossaire/menu-et-barre-de-navigation), de [contenu principal](/rgaa/glossaire/zone-de-contenu-principal), de [pied de page](/rgaa/glossaire/zone-de-pied-de-page) et de [moteur de recherche](/rgaa/glossaire/moteur-de-recherche-interne-a-un-site-web)) peuvent-elles être atteintes ou évitées ?



## Tests

### Test 1

**Dans chaque page web où elles sont présentes, la zone d’[en-tête](/rgaa/glossaire/zone-d-en-tete), de [navigation principale](/rgaa/glossaire/menu-et-barre-de-navigation), de [contenu principal](/rgaa/glossaire/zone-de-contenu-principal), de [pied de page](/rgaa/glossaire/zone-de-pied-de-page) et de [moteur de recherche](/rgaa/glossaire/moteur-de-recherche-interne-a-un-site-web) respectent-elles au moins une de ces conditions ?**

1. Retrouver dans le document les zones de regroupement de contenus (zones d’en-tête, de navigation principale, de contenu principal, de pied de page et de moteur de recherche) ;
2. Pour chaque zone, vérifier que la zone :
   - Soit possède un rôle WAI-ARIA de type landmark correspondant à sa nature ;
   - Soit possède un titre de hiérarchie dont le contenu permet de comprendre la nature du contenu de la zone ;
   - Soit peut être masquée au moyen d’un bouton précédant directement la zone dans l’ordre du code source ;
   - Soit peut être évitée au moyen d’un lien d’évitement précédant directement la zone dans l’ordre du code source ;
   - Soit peut être atteinte au moyen d’un lien d’accès rapide soit visible par défaut, soit visible à la prise de focus lors d’une tabulation.
3. Si c’est le cas pour chaque zone de regroupement de contenus, **le test est validé**.



## Références WCAG

### Critère WCAG 1.3.1

**Info and Relationships** (Niveau A)

### Critère WCAG 2.4.1

**Bypass Blocks** (Niveau A)

### Critère WCAG 4.1.2

**Name, Role, Value** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **H69** : [Technique H69](https://www.w3.org/WAI/WCAG21/Techniques/html/H69)
- **G115** : [Technique G115](https://www.w3.org/WAI/WCAG21/Techniques/html/G115)
- **ARIA4** : [Technique ARIA4](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA4)
- **ARIA11** : [Technique ARIA11](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA11)
