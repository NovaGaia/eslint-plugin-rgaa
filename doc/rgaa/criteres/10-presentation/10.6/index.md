---
title: Dans chaque page web, chaque [lien dont la nature n’est pas évidente](/rgaa/glossaire/lien-dont-la-nature-n-est-pas-evidente) est-il visible par rapport au texte environnant ?
---

# Dans chaque page web, chaque [lien dont la nature n’est pas évidente](/rgaa/glossaire/lien-dont-la-nature-n-est-pas-evidente) est-il visible par rapport au texte environnant ?



## Tests

### Test 1

**Dans chaque page web, chaque [lien texte](/rgaa/glossaire/lien-texte) signalé uniquement par la couleur, et dont la nature n’est pas évidente, vérifie-t-il ces conditions ?**

1. Retrouver dans le document les éléments de type lien (élément `<a>` ou élément pourvu d’un attribut WAI-ARIA `role="link"`) ;
2. Pour chaque élément de type lien, s’il peut être confondu avec un texte normal lorsqu’il est signalé uniquement par la couleur, vérifier que le contraste entre la couleur de police du lien et la couleur de police du texte environnant est de 3:1, au moins ;
3. Cette vérification doit être faite pour les différents états du lien s’ils sont présentés au moyen d’une couleur différente : l’état non visité, l’état visité, l’état activé, l’état au survol et l’état à la prise de focus ;
4. Si c’est le cas pour chaque élément de type lien, **le test est validé**.



## Références WCAG

### Critère WCAG 1.4.1

**Use of Color** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G183** : [Technique G183](https://www.w3.org/WAI/WCAG21/Techniques/html/G183)
- **F73** : [Technique F73](https://www.w3.org/WAI/WCAG21/Techniques/html/F73)
