---
title: Dans chaque page web, les contenus additionnels apparaissant via les styles CSS uniquement peuvent-ils être rendus visibles au clavier et par tout dispositif de pointage ?
---

# Dans chaque page web, les contenus additionnels apparaissant via les styles CSS uniquement peuvent-ils être rendus visibles au clavier et par tout dispositif de pointage ?



## Tests

### Test 1

**Dans chaque page web, les contenus additionnels apparaissant au survol d’un [composant d’interface](/rgaa/glossaire/composant-d-interface) via les styles CSS respectent-ils si nécessaire une de ces conditions ?**

1. Retrouver dans le document les contenus additionnels devenant visible au survol d’un composant d’interface au moyen d’un mécanisme CSS (`pseudo-classe :hover`) ;
2. Pour chaque contenu additionnel, vérifier que les contenus additionnels apparaissent également :
   - À l’activation du composant au moyen du clavier ou de tout autre dispositif de pointage ;
   - À la prise de focus du composant ;
   - À l’activation ou à la prise de focus d’un autre composant.
3. Si c’est le cas pour chaque contenu additionnel, **le test est validé**.

### Test 2

**Dans chaque page web, les contenus additionnels apparaissant au focus d’un [composant d’interface](/rgaa/glossaire/composant-d-interface) via les styles CSS respectent-ils si nécessaire une de ces conditions ?**

1. Retrouver dans le document les contenus additionnels devenant visible à la prise de focus d’un composant d’interface au moyen d’un mécanisme CSS (`pseudo-classe :focus`) ;
2. Pour chaque contenu additionnel, vérifier que les contenus additionnels apparaissent également :

- À l’activation du composant au moyen du clavier ou de tout autre dispositif de pointage ;
- Au survol du composant ;
- À l’activation ou du survol d’un autre composant.

3. Si c’est le cas pour chaque contenu additionnel, **le test est validé**.



## Références WCAG

### Critère WCAG 2.1.1

**Keyboard** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G202** : [Technique G202](https://www.w3.org/WAI/WCAG21/Techniques/html/G202)
