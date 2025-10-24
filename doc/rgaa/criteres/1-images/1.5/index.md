---
title: Pour chaque image utilisée comme [CAPTCHA](/rgaa/glossaire/captcha), une solution d’accès alternatif au contenu ou à la fonction du CAPTCHA est-elle présente ?
---

# Pour chaque image utilisée comme [CAPTCHA](/rgaa/glossaire/captcha), une solution d’accès alternatif au contenu ou à la fonction du CAPTCHA est-elle présente ?



## Tests

### Test 1

**Chaque image (balises `<img>`, `<area>`, `<object>`, `<embed>`, `<svg>`, `<canvas>` ou possédant un attribut WAI-ARIA `role="img"`) utilisée comme [CAPTCHA](/rgaa/glossaire/captcha) vérifie-t-elle une de ces conditions ?**

1. Retrouver dans le document les images (éléments `<img>`, `<area>`, `<object>`, `<embed>`, `<svg>`, `<canvas>` ou possédant un attribut WAI-ARIA `role="img"`) utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque image, vérifier qu’il existe :
   - Soit une autre forme de CAPTCHA non graphique, au moins ;
   - Soit une autre solution d’accès à la fonctionnalité qui est sécurisée par le CAPTCHA.
3. Si c’est le cas pour chaque image, **le test est validé**.

### Test 2

**Chaque bouton associé à une image (balise `input` avec l’attribut `type="image"`) utilisée comme [CAPTCHA](/rgaa/glossaire/captcha) vérifie-t-il une de ces conditions ?**

1. Retrouver dans le document les boutons associés à une image (éléments `<input>` avec l’attribut `type="image"`) utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque bouton associé à une image, vérifier qu’il existe :
   - Soit une autre forme de CAPTCHA non graphique, au moins ;
   - Soit une autre solution d’accès à la fonctionnalité qui est sécurisée par le CAPTCHA.
3. Si c’est le cas pour chaque image, **le test est validé**.



## Références WCAG

### Critère WCAG 1.1.1

**Non-text Content** (Niveau A)



## Techniques

Les techniques suivantes peuvent être utilisées pour implémenter ce critère :

- **G144** : [Technique G144](https://www.w3.org/WAI/WCAG21/Techniques/html/G144)
