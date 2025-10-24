---
title: Pour chaque page web, les [contenus cachés](/rgaa/glossaire/contenu-cache) ont-ils vocation à être ignorés par les technologies d’assistance ?
---

# Pour chaque page web, les [contenus cachés](/rgaa/glossaire/contenu-cache) ont-ils vocation à être ignorés par les technologies d’assistance ?



## Tests

### Test 1

**Dans chaque page web, chaque contenu caché vérifie-t-il une de ces conditions ?**

1. Retrouver les contenus cachés (éléments pourvus de l’attribut hidden ou de l’attribut WAI-ARIA aria-hidden, ou bien d’une classe ou d’un ensemble de styles CSS susceptibles de masquer le contenu).
2. Pour chaque contenu caché, vérifier que :
   - Soit le contenu caché a vocation à être ignoré par les technologies d’assistance (un élément statistique de visites par exemple) ;
   - Soit le contenu caché n’a pas vocation à être ignoré par les technologies d’assistance, et dans ce cas il est rendu restituable par les technologies d’assistance au moyen :
     - Soit d’une action de l’utilisateur réalisable au clavier ou par tout dispositif de pointage sur un élément précédent le contenu caché ;
     - Soit d’une fonction de programmation qui repositionne le focus sur le contenu.
3. Si c’est le cas pour chaque contenu caché, **le test est validé**.



## Références WCAG

### Critère WCAG 1.3.2

**Meaningful Sequence** (Niveau A)

### Critère WCAG 4.1.2

**Name, Role, Value** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G57** : [Technique G57](https://www.w3.org/WAI/WCAG21/Techniques/html/G57)
