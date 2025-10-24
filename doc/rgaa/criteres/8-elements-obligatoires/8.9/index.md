---
title: Dans chaque page web, les balises ne doivent pas être utilisées [uniquement à des fins de présentation](/rgaa/glossaire/uniquement-a-des-fins-de-presentation). Cette règle est-elle respectée ?
---

# Dans chaque page web, les balises ne doivent pas être utilisées [uniquement à des fins de présentation](/rgaa/glossaire/uniquement-a-des-fins-de-presentation). Cette règle est-elle respectée ?



## Tests

### Test 1

**Dans chaque page web les balises (à l’exception de `<div>`, `<span>` et `<table>`) ne doivent pas être utilisées [uniquement à des fins de présentation](/rgaa/glossaire/uniquement-a-des-fins-de-presentation). Cette règle est-elle respectée ?**

1. Retrouver dans le document l’ensemble des éléments sémantiques utilisés à des fins de présentation ;
2. Pour chacun de ces éléments, vérifier que :
   - L’élément est pourvu d’un attribut `role="presentation"` ;
   - L’utilisation de cet élément à des fins de présentation reste justifée.
3. Si c’est le cas, **le test est validé**.

Note : Quelques exemples, non exhaustifs de détournement de balisage : un élément `<div>` utilisé comme paragraphe, un titre utilisé comme légende, un élément `<blockquote>` ou des paragraphes vides ou encore des espaces utilisés pour créer des effets de marges.
L'utilisation d'un `role="presentation"` est formellement déconseillée, mais peut toutefois se justifier dans de rares cas. Cela peut être acceptable sur un élément `<blockquote>` ou un paragraphe vide, mais sera considéré comme non-conforme sur un titre.

Le cas des tableaux : à noter que ce test aborde les tableaux de présentation qui ne devraient finalement pas apparaître au sein de la thématique Tableaux.



## Références WCAG

### Critère WCAG 1.3.1

**Info and Relationships** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G115** : [Technique G115](https://www.w3.org/WAI/WCAG21/Techniques/html/G115)
- **H88** : [Technique H88](https://www.w3.org/WAI/WCAG21/Techniques/html/H88)
- **F43** : [Technique F43](https://www.w3.org/WAI/WCAG21/Techniques/html/F43)
- **F92** : [Technique F92](https://www.w3.org/WAI/WCAG21/Techniques/html/F92)
