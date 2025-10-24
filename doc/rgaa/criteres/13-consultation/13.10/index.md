---
title: Dans chaque page web, les fonctionnalités utilisables ou disponibles au moyen d’un [geste complexe](/rgaa/glossaire/gestes-complexes-et-gestes-simples) peuvent-elles être également disponibles au moyen d’un [geste simple](/rgaa/glossaire/gestes-complexes-et-gestes-simples) (hors cas particuliers) ?
---

# Dans chaque page web, les fonctionnalités utilisables ou disponibles au moyen d’un [geste complexe](/rgaa/glossaire/gestes-complexes-et-gestes-simples) peuvent-elles être également disponibles au moyen d’un [geste simple](/rgaa/glossaire/gestes-complexes-et-gestes-simples) (hors cas particuliers) ?



## Tests

### Test 1

**Dans chaque page web, chaque fonctionnalité utilisable ou disponible suite à un contact multipoint est-elle également utilisable ou disponible suite à un contact en un point unique de l’écran (hors cas particuliers).**

1. Retrouver dans le document les fonctionnalités utilisables ou disponibles au moyen d’une interaction au toucher de type contact multipoint ;
2. Pour chaque fonctionnalité, vérifier qu’elle reste disponible au moyen d’une interaction au toucher de type contact en un point unique de l’écran (par exemple, la possibilité de consulter les éléments d’une liste par un mouvement de balayage horizontal droit ou gauche doit aussi être disponible au moyen de boutons “précédent” et “suivant” ou encore un geste de pincer et zoomer qui peut être alternativement réalisé au moyen de boutons “plus” et “moins”) ;
3. Si c’est le cas pour chaque fonctionnalité utilisable ou disponible au moyen d’une interaction au toucher de type contact multipoint, **le test est validé**.

### Test 2

**Dans chaque page web, chaque fonctionnalité utilisable ou disponible suite à un geste basé sur le suivi d’une trajectoire sur l’écran est-elle également utilisable ou disponible suite à un contact en un point unique de l’écran (hors cas particuliers).**

1. Retrouver dans le document les fonctionnalités utilisables ou disponibles au moyen d’une interaction au toucher qui implique le suivi d’une trajectoire sur l’écran ;
2. Pour chaque fonctionnalité, vérifier qu’elle reste disponible au moyen d’une interaction au toucher de type contact en un point unique de l’écran (par exemple, la possibilité de composer son mot de passe en suivant une trajectoire sur un clavier virtuel doit aussi être disponible au moyen de pressions successives sur les touches du clavier) ;
3. Si c’est le cas pour chaque fonctionnalité utilisable ou disponible au moyen d’une interaction au toucher qui implique le suivi d’une trajectoire sur l’écran, **le test est validé**.

Il existe une gestion de cas particuliers dans deux types de situation :

- Le critère ne s'applique qu'à des fonctionnalités mises en place par l'auteur du site. Il ne concerne donc pas les gestes requis par l'agent utilisateur ou le système d'exploitation.
- Le critère ne s'applique pas aux fonctionnalités dont la réalisation d'un geste complexe est essentielle (exécuter le tracé d'une signature, par exemple).



## Références WCAG

### Critère WCAG 2.5.1

**Pointer Gestures** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G215** : [Technique G215](https://www.w3.org/WAI/WCAG21/Techniques/html/G215)
- **G216** : [Technique G216](https://www.w3.org/WAI/WCAG21/Techniques/html/G216)
