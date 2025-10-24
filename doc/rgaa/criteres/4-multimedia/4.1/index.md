---
title: Chaque [média temporel](/rgaa/glossaire/media-temporel-type-son-video-et-synchronise) pré-enregistré a-t-il, si nécessaire, une [transcription textuelle](/rgaa/glossaire/transcription-textuelle-media-temporel) ou une [audiodescription](/rgaa/glossaire/audiodescription-synchronisee-media-temporel) (hors cas particuliers) ?
---

# Chaque [média temporel](/rgaa/glossaire/media-temporel-type-son-video-et-synchronise) pré-enregistré a-t-il, si nécessaire, une [transcription textuelle](/rgaa/glossaire/transcription-textuelle-media-temporel) ou une [audiodescription](/rgaa/glossaire/audiodescription-synchronisee-media-temporel) (hors cas particuliers) ?



## Tests

### Test 1

**Chaque [média temporel](/rgaa/glossaire/media-temporel-type-son-video-et-synchronise) pré-enregistré seulement audio, vérifie-t-il, si nécessaire, l’une de ces conditions (hors cas particuliers) ?**

1. Retrouver dans le document les médias temporels (éléments `<audio>`, `<video>` ou `<object>`) seulement audio qui nécessitent une transcription textuelle ;
2. Pour chaque média temporel seulement audio, vérifier la présence d’une transcription textuelle :
   - Soit accessible au moyen d’un bouton ou d’un lien adjacent (une URL ou une ancre) ;
   - Soit adjacente clairement identifiable.
3. Si c’est le cas pour chaque média temporel, **le test est validé**.

### Test 2

**Chaque [média temporel](/rgaa/glossaire/media-temporel-type-son-video-et-synchronise) pré-enregistré seulement vidéo vérifie-t-il, si nécessaire, l’une de ces conditions (hors cas particuliers) ?**

1. Retrouver dans le document les médias temporels (éléments `<video>` ou `<object>`) seulement vidéo qui nécessitent une transcription textuelle ;
2. Pour chaque média temporel seulement vidéo, vérifier la présence :
   - Soit d’une version alternative audio seulement accessible au moyen d’un lien ou bouton adjacent (une URL ou une ancre) ;
   - Soit d’une version alternative audio seulement adjacente ;
   - Soit d’une transcription textuelle accessible au moyen d’un bouton ou d’un lien adjacent (une URL ou une ancre) ;
   - Soit d’une transcription textuelle adjacente clairement identifiable ;
   - Soit d’une audiodescription synchronisée ;
   - Soit d’une version alternative avec une audiodescription synchronisée accessible au moyen d’un bouton ou d'un lien adjacent (une URL ou une ancre).
3. Si c’est le cas pour chaque média temporel, **le test est validé**.

### Test 3

**Chaque [média temporel](/rgaa/glossaire/media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré vérifie-t-il, si nécessaire, une de ces conditions (hors cas particuliers) ?**

1. Retrouver dans le document les médias temporels (éléments `<video>` ou `<object>`) synchronisés qui nécessitent une transcription textuelle ;
2. Pour chaque média temporel synchronisé, vérifier la présence :
   - Soit d’une transcription textuelle accessible au moyen d’un lien ou bouton adjacent (une URL ou une ancre) ;
   - Soit d’une transcription textuelle adjacente clairement identifiable ;
   - Soit d’une audiodescription synchronisée ;
   - Soit d’une version alternative avec une audiodescription synchronisée accessible au moyen d’un bouton ou d’un lien adjacent (une URL ou une ancre).
3. Si c’est le cas pour chaque média temporel, **le test est validé**.



## Références WCAG

### Critère WCAG 1.2.1

**Audio-only and Video-only (Prerecorded)** (Niveau A)

### Critère WCAG 1.2.3

**Audio Description or Media Alternative (Prerecorded)** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G58** : [Technique G58](https://www.w3.org/WAI/WCAG21/Techniques/html/G58)
- **G69** : [Technique G69](https://www.w3.org/WAI/WCAG21/Techniques/html/G69)
- **G78** : [Technique G78](https://www.w3.org/WAI/WCAG21/Techniques/html/G78)
- **G158** : [Technique G158](https://www.w3.org/WAI/WCAG21/Techniques/html/G158)
- **G159** : [Technique G159](https://www.w3.org/WAI/WCAG21/Techniques/html/G159)
- **G173** : [Technique G173](https://www.w3.org/WAI/WCAG21/Techniques/html/G173)
- **G8** : [Technique G8](https://www.w3.org/WAI/WCAG21/Techniques/html/G8)
- **G166** : [Technique G166](https://www.w3.org/WAI/WCAG21/Techniques/html/G166)
- **H96** : [Technique H96](https://www.w3.org/WAI/WCAG21/Techniques/html/H96)
- **SM6** : [Technique SM6](https://www.w3.org/WAI/WCAG21/Techniques/html/SM6)
- **SM7** : [Technique SM7](https://www.w3.org/WAI/WCAG21/Techniques/html/SM7)
