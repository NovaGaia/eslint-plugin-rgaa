---
title: Dans chaque page web, les propriétés d’espacement du texte peuvent-elles être redéfinies par l’utilisateur sans perte de contenu ou de fonctionnalité (hors cas particuliers) ?
---

# Dans chaque page web, les propriétés d’espacement du texte peuvent-elles être redéfinies par l’utilisateur sans perte de contenu ou de fonctionnalité (hors cas particuliers) ?



## Tests

### Test 1

**Dans chaque page web, le texte reste-t-il lisible lorsque l’affichage est modifié selon ces conditions (hors cas particuliers) ?**

1. Modifier les styles du document en donnant :
   - Une valeur de 1.5 à la propriété `line-height` de tous les éléments du document ;
   - Une valeur de 2em à la propriété `margin-bottom` des éléments `<p>` ;
   - Une valeur de 0.12em à la propriété `letter-spacing` de tous les éléments du document ;
   - Une valeur de 0.16em à la propriété `word-spacing` de tous les éléments du document ;
2. Pour chaque passage de texte, vérifier qu’il reste lisible, à l’exception :
   - Des sous-titres directement intégrés à une vidéo ;
   - Des images texte ;
   - Des textes au sein d’une balise `<canvas>`.
3. Si c’est le cas pour chaque passage de texte, **le test est validé**.

Note : une implémentation de ces règles de modification est disponible dans les ressources du critère de succès WCAG 1.4.12 (https://github.com/alastc/adaptation-scripts/blob/master/scripts/text-adaptation.js).



## Références WCAG

### Critère WCAG 1.4.12

**Text Spacing** (Niveau AA)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **C8** : [Technique C8](https://www.w3.org/WAI/WCAG21/Techniques/html/C8)
- **C21** : [Technique C21](https://www.w3.org/WAI/WCAG21/Techniques/html/C21)
- **C35** : [Technique C35](https://www.w3.org/WAI/WCAG21/Techniques/html/C35)
- **C36** : [Technique C36](https://www.w3.org/WAI/WCAG21/Techniques/html/C36)
