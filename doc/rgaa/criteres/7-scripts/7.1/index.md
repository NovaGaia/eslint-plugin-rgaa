---
title: Chaque [script](/rgaa/glossaire/script) est-il, si nécessaire, [compatible avec les technologies d’assistance](/rgaa/glossaire/compatible-avec-les-technologies-d-assistance) ?
---

# Chaque [script](/rgaa/glossaire/script) est-il, si nécessaire, [compatible avec les technologies d’assistance](/rgaa/glossaire/compatible-avec-les-technologies-d-assistance) ?



## Tests

### Test 1

**Chaque [script](/rgaa/glossaire/script) qui génère ou contrôle un [composant d’interface](/rgaa/glossaire/composant-d-interface) vérifie-t-il, si nécessaire, une de ces conditions ?**

1. Retrouver dans le document tous les composants d’interface générés ou contrôlés au moyen de JavaScript ;
2. Vérifier que :
   - Le composant possède un rôle cohérent avec son usage (généralement un bouton ou un lien) ;
   - Le composant possède un nom explicite ;
   - Le nom du composant est cohérent avec l’état de la fonctionnalité ou des contenus contrôlés (par exemple pour une fonctionnalité permettant d’afficher ou de masquer une zone de contenu).
3. Sinon, vérifier la présence d’un composant d’interface accessible permettant d’accéder aux mêmes fonctionnalités ;
4. Sinon, vérifier la présence d’une alternative accessible permettant d’accéder aux mêmes fonctionnalités.
5. Si c’est le cas, **le test est validé**.

### Test 2

**Chaque [script](/rgaa/glossaire/script) qui génère ou contrôle un [composant d’interface](/rgaa/glossaire/composant-d-interface) respecte-t-il une de ces conditions ?**

1. Pour chacun des composants d’interface ayant validé le test 7.1.1, vérifier que le composant d’interface est correctement restitué par les technologies d’assistance ;
2. Sinon, vérifier qu’une alternative accessible au composant d’interface permet d’accéder aux mêmes fonctionnalités ;
3. Si c’est le cas, **le test est validé**.

### Test 3

**Chaque [script](/rgaa/glossaire/script) qui génère ou contrôle un [composant d’interface](/rgaa/glossaire/composant-d-interface) vérifie-t-il ces conditions (hors cas particuliers) ?**

1. Pour chacun des composants d’interface ayant validé le test 7.1.1, vérifier que le composant d’interface possède :
   - Un nom pertinent (intitulé visible) ;
   - Un rôle pertinent.
2. Si le composant d’interface possède un nom accessible, vérifier que ce nom est pertinent et contient au moins l’intitulé visible.
3. Si c’est le cas, **le test est validé**.



## Références WCAG

### Critère WCAG 2.5.3

**Label in Name** (Niveau A)

### Critère WCAG 4.1.2

**Name, Role, Value** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G10** : [Technique G10](https://www.w3.org/WAI/WCAG21/Techniques/html/G10)
- **G135** : [Technique G135](https://www.w3.org/WAI/WCAG21/Techniques/html/G135)
- **G136** : [Technique G136](https://www.w3.org/WAI/WCAG21/Techniques/html/G136)
- **F15** : [Technique F15](https://www.w3.org/WAI/WCAG21/Techniques/html/F15)
- **F19** : [Technique F19](https://www.w3.org/WAI/WCAG21/Techniques/html/F19)
- **F20** : [Technique F20](https://www.w3.org/WAI/WCAG21/Techniques/html/F20)
- **F42** : [Technique F42](https://www.w3.org/WAI/WCAG21/Techniques/html/F42)
- **F59** : [Technique F59](https://www.w3.org/WAI/WCAG21/Techniques/html/F59)
- **F79** : [Technique F79](https://www.w3.org/WAI/WCAG21/Techniques/html/F79)
- **ARIA4** : [Technique ARIA4](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA4)
- **ARIA5** : [Technique ARIA5](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA5)
- **ARIA18** : [Technique ARIA18](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA18)
- **ARIA19** : [Technique ARIA19](https://www.w3.org/WAI/WCAG21/Techniques/html/ARIA19)
- **SCR21** : [Technique SCR21](https://www.w3.org/WAI/WCAG21/Techniques/html/SCR21)
