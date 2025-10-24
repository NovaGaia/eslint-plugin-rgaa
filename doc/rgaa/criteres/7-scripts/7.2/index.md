---
title: Pour chaque [script](/rgaa/glossaire/script) ayant une [alternative](/rgaa/glossaire/alternative-a-script), cette alternative est-elle pertinente ?
---

# Pour chaque [script](/rgaa/glossaire/script) ayant une [alternative](/rgaa/glossaire/alternative-a-script), cette alternative est-elle pertinente ?



## Tests

### Test 1

**Chaque [script](/rgaa/glossaire/script) débutant par la balise `<script>` et ayant une [alternative](/rgaa/glossaire/alternative-a-script) vérifie-t-il une de ces conditions ?**

1. Retrouver les alternatives aux fonctionnalités JavaScript :
2. Chercher dans la page, les alternatives à un composant ou une fonctionnalité JavaScript mises à disposition.
3. Désactiver JavaScript dans le document et retrouver les alternatives proposées.
4. Pour chacune des alternatives proposées, vérifier qu’elle permet d’accéder aux mêmes contenus et à des fonctionnalités similaires.
5. Si c’est le cas, **le test est validé**.

### Test 2

**Chaque élément non textuel mis à jour par un [script](/rgaa/glossaire/script) (dans la page, ou dans un [cadre](/rgaa/glossaire/cadre)) et ayant une [alternative](/rgaa/glossaire/alternative-a-script) vérifie-t-il ces conditions ?**

1. Retrouver dans le document tous les éléments non textuels mis à jour par une fonctionnalité JavaScript.
2. Si l'élément non textuel a une alternative, vérifier que :
   - L'alternative est mise à jour lorsque le contenu non textuel est mis à jour ;
   - L'alternative mise à jour est pertinente.
3. Si c'est le cas, **le test est validé**.



## Références WCAG

### Critère WCAG 1.1.1

**Non-text Content** (Niveau A)

### Critère WCAG 4.1.2

**Name, Role, Value** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G136** : [Technique G136](https://www.w3.org/WAI/WCAG21/Techniques/html/G136)
- **F19** : [Technique F19](https://www.w3.org/WAI/WCAG21/Techniques/html/F19)
- **F20** : [Technique F20](https://www.w3.org/WAI/WCAG21/Techniques/html/F20)
