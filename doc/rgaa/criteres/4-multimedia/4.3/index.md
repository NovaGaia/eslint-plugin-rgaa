---
title: Chaque [média temporel](/rgaa/glossaire/media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré a-t-il, si nécessaire, des [sous-titres synchronisés](/rgaa/glossaire/sous-titres-synchronises-objet-multimedia) (hors cas particuliers) ?
---

# Chaque [média temporel](/rgaa/glossaire/media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré a-t-il, si nécessaire, des [sous-titres synchronisés](/rgaa/glossaire/sous-titres-synchronises-objet-multimedia) (hors cas particuliers) ?



## Tests

### Test 1

**Chaque [média temporel](/rgaa/glossaire/media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré vérifie-t-il, si nécessaire, l’une de ces conditions (hors cas particuliers) ?**

1. Retrouver dans le document les médias temporels pré-enregistrés synchronisés ;
2. Pour chaque média temporel synchronisé, vérifier la présence :
   - Soit de sous-titres synchronisés ;
   - Soit d’une version alternative possédant des sous-titres synchronisés accessible au moyen d’un lien ou d’un bouton adjacent.
3. Si c’est le cas pour chaque média temporel, **le test est validé**.

### Test 2

**Pour chaque [média temporel](/rgaa/glossaire/media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré possédant des [sous-titres synchronisés](/rgaa/glossaire/sous-titres-synchronises-objet-multimedia) diffusés via une balise `<track>`, la balise `<track>` possède-t-elle un attribut `kind="captions"` ?**

1. Retrouver dans le document les médias temporels synchronisés possédant des sous-titres synchronisés au moyen d’un élément `<track>` ;
2. Pour chaque média temporel synchronisé, vérifier que la balise `<track>` possède un attribut `kind="caption"` ;
3. Si c’est le cas pour chaque média temporel synchronisé, **le test est validé**.



## Références WCAG

### Critère WCAG 1.2.2

**Captions (Prerecorded)** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G58** : [Technique G58](https://www.w3.org/WAI/WCAG21/Techniques/html/G58)
- **G93** : [Technique G93](https://www.w3.org/WAI/WCAG21/Techniques/html/G93)
- **G87** : [Technique G87](https://www.w3.org/WAI/WCAG21/Techniques/html/G87)
- **H95** : [Technique H95](https://www.w3.org/WAI/WCAG21/Techniques/html/H95)
- **SM11** : [Technique SM11](https://www.w3.org/WAI/WCAG21/Techniques/html/SM11)
- **SM12** : [Technique SM12](https://www.w3.org/WAI/WCAG21/Techniques/html/SM12)
- **F74** : [Technique F74](https://www.w3.org/WAI/WCAG21/Techniques/html/F74)
- **F75** : [Technique F75](https://www.w3.org/WAI/WCAG21/Techniques/html/F75)
