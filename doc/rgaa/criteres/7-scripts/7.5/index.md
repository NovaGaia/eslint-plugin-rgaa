---
title: Dans chaque page web, les [messages de statut](/rgaa/glossaire/message-de-statut) sont-ils correctement restitués par les technologies d’assistance ?
---

# Dans chaque page web, les [messages de statut](/rgaa/glossaire/message-de-statut) sont-ils correctement restitués par les technologies d’assistance ?



## Tests

### Test 1

**Chaque [message de statut](/rgaa/glossaire/message-de-statut) qui informe de la réussite, du résultat d’une action ou bien de l’état d’une application utilise-t-il l’attribut WAI-ARIA `role="status"` ?**

1. Retrouver dans le document les messages qui valent pour message de statut.
2. Pour chacun de ces messages, déterminer la nature de l’information dont est porteur le message :
3. Si le message informe de la réussite, du résultat d’une action ou bien de l’état d’une application, vérifier que l’élément qui contient le message :
   - Soit utilise l’attribut WAI-ARIA `role=”status”` ;
   - Soit utilise les attributs WAI-ARIA `aria-live=”polite”` et `aria-atomic=”true”`.
4. Si le message présente une suggestion, ou avertit de l’existence d’une erreur, vérifier que l’élément qui contient le message :
   - Soit utilise l’attribut WAI-ARIA `role=”alert”` ;
   - Soit utilise les attributs `aria-live=”assertive”` et `aria-atomic=”true”`.
5. Si le message indique la progression d’un processus, vérifier que l’élément qui contient le message :
   - Soit utilise l’un des attributs WAI-ARIA `role=”log”`, `role=”progressbar”` ou `role=”status”` ;
   - Soit utilise l’attribut WAI-ARIA `aria-live=”polite”` si l’intention est de signaler l’équivalent d’un `rôle “log”` ;
   - Soit utilise les attributs WAI-ARIA `aria-live=”polite”` et aria-atomic=”true si l’intention est de signaler l’équivalent d’un rôle “status”.
6. Si c’est le cas, **le test est validé**.

### Test 2

**Chaque [message de statut](/rgaa/glossaire/message-de-statut) qui présente une suggestion, ou avertit de l’existence d’une erreur utilise-t-il l’attribut WAI-ARIA `role="alert"` ?**

Tests identiques à 7.5.1

### Test 3

**Chaque [message de statut](/rgaa/glossaire/message-de-statut) qui indique la progression d’un processus utilise-t-il l’un des attributs WAI-ARIA `role="log"`, `role="progressbar"` ou `role="status"` ?**

Tests identiques à 7.5.1



## Références WCAG

### Critère WCAG 4.1.3

**Status Messages** (Niveau AA)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **ARIA19** : [Technique ARIA19](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA19)
- **ARIA22** : [Technique ARIA22](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA22)
- **ARIA23** : [Technique ARIA23](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA23)
