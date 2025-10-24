---
title: Dans chaque page web, l’information est-elle structurée par l’utilisation appropriée de [titres](/rgaa/glossaire/titre) ?
---

# Dans chaque page web, l’information est-elle structurée par l’utilisation appropriée de [titres](/rgaa/glossaire/titre) ?



## Tests

### Test 1

**Dans chaque page web, la hiérarchie entre les [titres](/rgaa/glossaire/titre) (balise `<hx>` ou balise possédant un attribut WAI-ARIA `role="heading"` associé à un attribut WAI-ARIA `aria-level`) est-elle pertinente ?**

1. Retrouver dans le document les titres (balise `<hx>` ou balise possédant un attribut WAI-ARIA `role="heading"` associé à un attribut WAI-ARIA `aria-level`) ;
2. Vérifier que la hiérarchie entre les titres est pertinente ;
3. Si c’est le cas, **le test est validé**.

### Test 2

**Dans chaque page web, le contenu de chaque [titre](/rgaa/glossaire/titre) (balise `<hx>` ou balise possédant un attribut WAI-ARIA `role="heading"` associé à un attribut WAI-ARIA `aria-level`) est-il pertinent ?**

1. Pour chaque titre identifié au test 9.1.1, vérifier que son contenu est pertinent ;
2. Si c’est le cas pour chaque titre, **le test est validé**.

### Test 3

**Dans chaque page web, chaque passage de texte constituant un [titre](/rgaa/glossaire/titre) est-il structuré à l’aide d’une balise `<hx>` ou d’une balise possédant un attribut WAI-ARIA `role="heading"` associé à un attribut WAI-ARIA `aria-level` ?**

1. Pour chaque titre identifié au test 9.1.1, vérifier que :
   - Soit il est structuré au moyen d’une balise `<hx>` (“x” désignant une valeur numérique comprise entre 1 et 6);
   - Soit il est structuré au moyen d’une balise possédant un attribut WAI-ARIA `role="heading"` et un attribut WAI-ARIA `aria-level=x` (“x” désignant une valeur numérique).
2. Si c’est le cas pour chaque titre, **le test est validé**.



## Références WCAG

### Critère WCAG 1.3.1

**Info and Relationships** (Niveau A)

### Critère WCAG 2.4.1

**Bypass Blocks** (Niveau A)

### Critère WCAG 2.4.6

**Headings and Labels** (Niveau AA)

### Critère WCAG 4.1.2

**Name, Role, Value** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G115** : [Technique G115](https://www.w3.org/WAI/WCAG21/Techniques/html/G115)
- **G130** : [Technique G130](https://www.w3.org/WAI/WCAG21/Techniques/html/G130)
- **H42** : [Technique H42](https://www.w3.org/WAI/WCAG21/Techniques/html/H42)
- **G141** : [Technique G141](https://www.w3.org/WAI/WCAG21/Techniques/html/G141)
- **ARIA4** : [Technique ARIA4](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA4)
- **ARIA12** : [Technique ARIA12](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA12)
