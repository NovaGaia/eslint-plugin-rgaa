---
title: Chaque page web est-elle définie par un [type de document](/rgaa/glossaire/type-de-document) ?
---

# Chaque page web est-elle définie par un [type de document](/rgaa/glossaire/type-de-document) ?



## Tests

### Test 1

**Pour chaque page web, le [type de document](/rgaa/glossaire/type-de-document) (balise `doctype`) est-il présent ?**

1. Retrouver dans le document la balise DOCTYPE (par exemple `<!DOCTYPE html>`) ;
2. Vérifier que :
   - La balise DOCTYPE est placée avant la balise `<html>` ;
   - Le type de document est valide.
3. Si c’est le cas, **le test est validé**.

### Test 2

**Pour chaque page web, le [type de document](/rgaa/glossaire/type-de-document) (balise `doctype`) est-il valide ?**

Tests identiques à 8.1.1

### Test 3

**Pour chaque page web possédant une déclaration de [type de document](/rgaa/glossaire/type-de-document), celle-ci est-elle située avant la balise `<html>` dans le code source ?**

Tests identiques à 8.1.1



## Références WCAG

### Critère WCAG 4.1.1

**Parsing** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G134** : [Technique G134](https://www.w3.org/WAI/WCAG21/Techniques/html/G134)
- **G192** : [Technique G192](https://www.w3.org/WAI/WCAG21/Techniques/html/G192)
