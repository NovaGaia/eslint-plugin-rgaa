---
title: Dans chaque [formulaire](/rgaa/glossaire/formulaire), le [contrôle de saisie](/rgaa/glossaire/controle-de-saisie-formulaire) est-il utilisé de manière pertinente (hors cas particuliers) ?
---

# Dans chaque [formulaire](/rgaa/glossaire/formulaire), le [contrôle de saisie](/rgaa/glossaire/controle-de-saisie-formulaire) est-il utilisé de manière pertinente (hors cas particuliers) ?



## Tests

### Test 1

**Les [indications du caractère obligatoire](/rgaa/glossaire/indication-de-champ-obligatoire) de la saisie des champs vérifient-elles une de ces conditions (hors cas particuliers) ?**

1. Retrouver dans le document les champs de formulaire obligatoires ;
2. Pour chaque champ de formulaire, vérifier que préalablement à la validation du formulaire :
   - Soit une indication de champ obligatoire est visible et permet d’identifier nommément le champ concerné ;
   - Soit le champ possède un attribut `aria-required="true"` ou `required`.
3. Si c’est le cas pour chaque champ de formulaire obligatoire, **le test est validé**.

### Test 2

**Les champs obligatoires ayant l’attribut `aria-required="true"` ou `required` vérifient-ils une de ces conditions ?**

1. Retrouver dans le document les champs de formulaire obligatoires qui possèdent un attribut `aria-required="true"` ou `required` ;
2. Pour chaque champ de formulaire, vérifier que préalablement à la validation du formulaire :
   - Soit une indication de champ obligatoire est visible et située dans l’étiquette associée au champ ;
   - Soit une indication de champ obligatoire est visible et située dans le passage de texte associé au champ.
3. Si c’est le cas pour chaque champ de formulaire obligatoire qui possèdent un attribut `aria-required="true"` ou `required`, **le test est validé**.

### Test 3

**Les messages d’erreur indiquant l’absence de saisie d’un champ obligatoire vérifient-ils une de ces conditions ?**

1. Retrouver dans le document les messages d’erreur indiquant l’absence de saisie d’un champ obligatoire ;
2. Pour chaque message d’erreur, vérifier que :
   - Soit le message d’erreur est visible et permet d’identifier nommément le champ concerné ;
   - Soit le champ obligatoire associé au message d’erreur possède un attribut `aria-invalid="true"`.
3. Si c’est le cas pour chaque message d’erreur indiquant l’absence de saisie d’un champ obligatoire, **le test est validé**.

### Test 4

**Les champs obligatoires ayant l’attribut `aria-invalid="true"` vérifient-ils une de ces conditions ?**

1. Retrouver dans le document les champs de formulaire obligatoires qui possèdent un attribut `aria-invalid="true"` ;
2. Pour chaque champ de formulaire, vérifier que :
   - Soit le message d’erreur indiquant le caractère invalide de la saisie est visible et situé dans l’étiquette associée au champ ;
   - Soit le message d’erreur indiquant le caractère invalide de la saisie est visible et situé dans le passage de texte associé au champ.
3. Si c’est le cas pour chaque champ de formulaire obligatoire qui possède un attribut `aria-invalid="true"`, **le test est validé**.

### Test 5

**Les instructions et indications du type de données et/ou de format obligatoires vérifient-elles une de ces conditions ?**

1. Retrouver dans le document les champs de formulaire obligatoires auxquels est associée une instruction ou une indication du type de données et/ou de format obligatoire ;
2. Pour chaque champ de formulaire, vérifier que l’instruction ou l’indication du type de données et/ou de format obligatoire est préalablement à la validation du formulaire :
   - Soit visible et permet d’identifier nommément le champ concerné ;
   - Soit visible dans l’étiquette ou le passage de texte associé au champ.
3. Si c’est le cas pour chaque champ de formulaire obligatoire auquel est associée une instruction ou une indication du type de données et/ou de format obligatoire, **le test est validé**.

### Test 6

**Les messages d’erreurs fournissant une instruction ou une indication du type de données et/ou de format obligatoire des champs vérifient-ils une de ces conditions ?**

1. Retrouver dans le document les messages d’erreur fournissant une instruction ou une indication du type de données et/ou de format obligatoire d’un champ ;
2. Pour chaque message d’erreur, vérifier que :
   - Soit le message d’erreur est visible et permet d’identifier nommément le champ concerné ;
   - Soit le champ associé au message d’erreur possède un attribut `aria-invalid="true"`.
3. Si c’est le cas pour chaque message d’erreur indiquant l’absence de saisie d’un champ obligatoire, **le test est validé**.

### Test 7

**Les champs ayant l’attribut `aria-invalid="true"` dont la saisie requiert un type de données et/ou de format obligatoires vérifient-ils une de ces conditions ?**

1. Retrouver dans le document les champs de formulaire qui possèdent un attribut `aria-invalid="true"` ;
2. Pour chaque champ de formulaire, vérifier que :
   - Soit une instruction ou une indication du type de données et/ou de format obligatoire est visible et située dans l’élément `<label>` associé au champ ;
   - Soit une instruction ou une indication du type de données et/ou de format obligatoire est visible et située dans le passage de texte associé au champ.
3. Si c’est le cas pour chaque champ de formulaire qui possède un attribut `aria-invalid="true"`, **le test est validé**.



## Références WCAG

### Critère WCAG 3.3.1

**Error Identification** (Niveau A)

### Critère WCAG 3.3.2

**Labels or Instructions** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G83** : [Technique G83](https://www.w3.org/WAI/WCAG21/Techniques/html/G83)
- **G84** : [Technique G84](https://www.w3.org/WAI/WCAG21/Techniques/html/G84)
- **G85** : [Technique G85](https://www.w3.org/WAI/WCAG21/Techniques/html/G85)
- **G89** : [Technique G89](https://www.w3.org/WAI/WCAG21/Techniques/html/G89)
- **G184** : [Technique G184](https://www.w3.org/WAI/WCAG21/Techniques/html/G184)
- **H44** : [Technique H44](https://www.w3.org/WAI/WCAG21/Techniques/html/H44)
- **H81** : [Technique H81](https://www.w3.org/WAI/WCAG21/Techniques/html/H81)
- **H89** : [Technique H89](https://www.w3.org/WAI/WCAG21/Techniques/html/H89)
- **H90** : [Technique H90](https://www.w3.org/WAI/WCAG21/Techniques/html/H90)
- **F81** : [Technique F81](https://www.w3.org/WAI/WCAG21/Techniques/html/F81)
- **SCR18** : [Technique SCR18](https://www.w3.org/WAI/WCAG21/Techniques/html/SCR18)
- **SCR32** : [Technique SCR32](https://www.w3.org/WAI/WCAG21/Techniques/html/SCR32)
- **ARIA1** : [Technique ARIA1](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA1)
- **ARIA2** : [Technique ARIA2](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA2)
- **ARIA6** : [Technique ARIA6](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA6)
- **ARIA9** : [Technique ARIA9](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA9)
- **ARIA16** : [Technique ARIA16](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA16)
- **ARIA21** : [Technique ARIA21](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA21)
