---
title: Pour chaque page web, le code source généré est-il valide selon le [type de document](/rgaa/glossaire/type-de-document) spécifié ?
---

# Pour chaque page web, le code source généré est-il valide selon le [type de document](/rgaa/glossaire/type-de-document) spécifié ?



## Tests

### Test 1

**Pour chaque déclaration de [type de document](/rgaa/glossaire/type-de-document), le code source généré de la page vérifie-t-il ces conditions ?**

1. Dans le menu « Check », activer l’option « W3C Nu markup checker (all frames) ».
2. Dans la page de résultats, vérifier que :
   - Les balises, attributs et valeurs d’attributs respectent les règles d’écriture ;
   - L’imbrication des balises est conforme ;
   - L’ouverture et la fermeture des balises sont conformes ;
   - Les valeurs d’attribut id sont uniques dans la page ;
   - Les attributs ne sont pas doublés sur un même élément.
3. Si c’est le cas, **le test est validé**.



## Références WCAG

### Critère WCAG 4.1.1

**Parsing** (Niveau A)

### Critère WCAG 4.1.2

**Name, Role, Value** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **H74** : [Technique H74](https://www.w3.org/WAI/WCAG21/Techniques/html/H74)
- **H93** : [Technique H93](https://www.w3.org/WAI/WCAG21/Techniques/html/H93)
- **H94** : [Technique H94](https://www.w3.org/WAI/WCAG21/Techniques/html/H94)
- **F70** : [Technique F70](https://www.w3.org/WAI/WCAG21/Techniques/html/F70)
- **F77** : [Technique F77](https://www.w3.org/WAI/WCAG21/Techniques/html/F77)
