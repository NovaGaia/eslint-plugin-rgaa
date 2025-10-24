---
title: Pour chaque [tableau de mise en forme](/rgaa/glossaire/tableau-de-mise-en-forme), le contenu linéarisé reste-t-il compréhensible ?
---

# Pour chaque [tableau de mise en forme](/rgaa/glossaire/tableau-de-mise-en-forme), le contenu linéarisé reste-t-il compréhensible ?



## Tests

### Test 1

**Chaque [tableau de mise en forme](/rgaa/glossaire/tableau-de-mise-en-forme) vérifie-t-il ces conditions ?**

1. Retrouver dans le document les tableaux de mise en forme ;
2. Pour chaque tableau de mise en forme, vérifier que :
   - L’ordre d’accès aux cellules est cohérent avec le contenu ;
   - L’élément `<table>` est pourvu d’un attribut WAI-ARIA `role="presentation"`.
3. Si c’est le cas pour chaque tableau de mise en forme, **le test est validé**.



## Références WCAG

### Critère WCAG 1.3.2

**Meaningful Sequence** (Niveau A)

### Critère WCAG 4.1.2

**Name, Role, Value** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **F49** : [Technique F49](https://www.w3.org/WAI/WCAG21/Techniques/html/F49)
- **ARIA4** : [Technique ARIA4](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA4)
