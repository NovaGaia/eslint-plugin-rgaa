---
title: Pour chaque [script](/rgaa/glossaire/script) qui initie un [changement de contexte](/rgaa/glossaire/changement-de-contexte), l’utilisateur est-il averti ou en a-t-il le contrôle ?
---

# Pour chaque [script](/rgaa/glossaire/script) qui initie un [changement de contexte](/rgaa/glossaire/changement-de-contexte), l’utilisateur est-il averti ou en a-t-il le contrôle ?



## Tests

### Test 1

**Chaque [script](/rgaa/glossaire/script) qui initie un [changement de contexte](/rgaa/glossaire/changement-de-contexte) vérifie-t-il une de ces conditions ?**

1. Retrouver dans le document tous les événements JavaScript qui initient un changement de contexte, par exemple :
   - Une mise à jour dynamique de champs de formulaire ;
   - L’ouverture d’une nouvelle page à l’activation d’une option d’une liste de sélection (élément `<select>`) ;
   - La mise à jour, via un procédé AJAX d’une partie essentielle de la page ;
   - Le lancement automatique d’un lecteur vidéo suite à la sélection d’une playlist ;
   - La manipulation du focus ayant pour résultat de modifier la position courante de l’utilisateur dans la page.
2. Vérifier que :
   - L’utilisateur est averti par un message de l’action du script et du type de changement avant son déclenchement ;
   - Ou bien le changement de contexte est initié par un bouton (input de type submit, button ou image ou la balise button) explicite ;
   - Ou bien le changement de contexte est initié par un lien explicite.
3. Si c’est le cas, **le test est validé**.



## Références WCAG

### Critère WCAG 3.2.1

**On Focus** (Niveau A)

### Critère WCAG 3.2.2

**On Input** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G13** : [Technique G13](https://www.w3.org/WAI/WCAG21/Techniques/html/G13)
- **G76** : [Technique G76](https://www.w3.org/WAI/WCAG21/Techniques/html/G76)
- **G80** : [Technique G80](https://www.w3.org/WAI/WCAG21/Techniques/html/G80)
- **G107** : [Technique G107](https://www.w3.org/WAI/WCAG21/Techniques/html/G107)
- **H32** : [Technique H32](https://www.w3.org/WAI/WCAG21/Techniques/html/H32)
- **H84** : [Technique H84](https://www.w3.org/WAI/WCAG21/Techniques/html/H84)
- **F9** : [Technique F9](https://www.w3.org/WAI/WCAG21/Techniques/html/F9)
- **F22** : [Technique F22](https://www.w3.org/WAI/WCAG21/Techniques/html/F22)
- **F36** : [Technique F36](https://www.w3.org/WAI/WCAG21/Techniques/html/F36)
- **F37** : [Technique F37](https://www.w3.org/WAI/WCAG21/Techniques/html/F37)
- **F41** : [Technique F41](https://www.w3.org/WAI/WCAG21/Techniques/html/F41)
- **SCR19** : [Technique SCR19](https://www.w3.org/WAI/WCAG21/Techniques/html/SCR19)
