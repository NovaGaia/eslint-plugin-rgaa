---
title: Chaque [champ de formulaire](/rgaa/glossaire/champ-de-saisie-de-formulaire) a-t-il une [étiquette](/rgaa/glossaire/etiquette-de-champ-de-formulaire) ?
---

# Chaque [champ de formulaire](/rgaa/glossaire/champ-de-saisie-de-formulaire) a-t-il une [étiquette](/rgaa/glossaire/etiquette-de-champ-de-formulaire) ?



## Tests

### Test 1

**Chaque [champ de formulaire](/rgaa/glossaire/champ-de-saisie-de-formulaire) vérifie-t-il une de ces conditions ?**

1. Retrouver dans le document les champs de formulaire ;
2. Pour chaque champ de formulaire, vérifier que le champ de formulaire :
   - Possède un attribut WAI-ARIA `aria-labelledby` référençant un passage de texte identifié ;
   - Possède un attribut WAI-ARIA `aria-label` ;
   - Est associé à un élément `<label>` ayant un attribut `for` ;
   - Possède un attribut `title` ;
   - Un bouton adjacent au champ de formulaire lui fournit une étiquette visible et un élément `<label>` visuellement caché ou un attribut WAI-ARIA `aria-label`, `aria-labelledby` ou `title` lui fournit un nom accessible.
3. Si c’est le cas pour champ de formulaire, **le test est validé**.

### Test 2

**Chaque [champ de formulaire](/rgaa/glossaire/champ-de-saisie-de-formulaire) associé à une balise `<label>` ayant un attribut `for`, vérifie-t-il ces conditions ?**

1. Retrouver dans le document les champs de formulaire associé à un élément `<label>` ;
2. Pour chaque champ de formulaire, vérifier que :
   - Le champ de formulaire possède un attribut `id` ;
   - La valeur de l’attribut `for` de l’élément `<label>` est égale à la valeur de l’attribut `id`.
3. Si c’est le cas pour champ de formulaire, **le test est validé**.

### Test 3

**Chaque [champ de formulaire](/rgaa/glossaire/champ-de-saisie-de-formulaire) ayant une [étiquette](/rgaa/glossaire/etiquette-de-champ-de-formulaire) dont le contenu n’est pas visible ou à proximité (masqué, `aria-label`) ou qui n’est pas [accolé](/rgaa/glossaire/accoles-etiquette-et-champ-accoles) au champ (`aria-labelledby`), vérifie-t-il une de ses conditions ?**

1. Retrouver dans le document les champs de formulaire dont l’étiquette n’est pas visible ou à proximité (masquée, utilisation de l’attribut aria-label) ou n’est pas accolée au champ (utilisation de l’attribut `aria-labelledby`) ;
2. Pour chaque champ de formulaire, vérifier que le champ de formulaire :
   - soit possède un attribut `title` dont le contenu permet de comprendre la nature de la saisie attendue ;
   - est accompagné d’un passage de texte accolé au champ qui devient visible à la prise de focus permettant de comprendre la nature de la saisie attendue ;
   - est accompagné d’un passage de texte visible accolé au champ permettant de comprendre la nature de la saisie attendue.



## Références WCAG

### Critère WCAG 1.3.1

**Info and Relationships** (Niveau A)

### Critère WCAG 2.4.6

**Headings and Labels** (Niveau AA)

### Critère WCAG 3.3.2

**Labels or Instructions** (Niveau A)

### Critère WCAG 4.1.2

**Name, Role, Value** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G82** : [Technique G82](https://www.w3.org/WAI/WCAG21/Techniques/html/G82)
- **G131** : [Technique G131](https://www.w3.org/WAI/WCAG21/Techniques/html/G131)
- **H44** : [Technique H44](https://www.w3.org/WAI/WCAG21/Techniques/html/H44)
- **H65** : [Technique H65](https://www.w3.org/WAI/WCAG21/Techniques/html/H65)
- **F68** : [Technique F68](https://www.w3.org/WAI/WCAG21/Techniques/html/F68)
- **F82** : [Technique F82](https://www.w3.org/WAI/WCAG21/Techniques/html/F82)
- **F86** : [Technique F86](https://www.w3.org/WAI/WCAG21/Techniques/html/F86)
- **ARIA6** : [Technique ARIA6](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA6)
- **ARIA9** : [Technique ARIA9](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA9)
- **ARIA14** : [Technique ARIA14](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA14)
- **ARIA16** : [Technique ARIA16](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA16)
