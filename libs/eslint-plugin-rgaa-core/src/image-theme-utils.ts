/**
 * Fonctions utilitaires pour la thématique 1 - Images
 * Gère toutes les fonctions liées aux images, SVG et Canvas pour les règles RGAA 1.1, 1.2 et 1.3
 */

import {
  getAttributeValue,
  getChildElements,
  hasAriaHidden,
  hasAttribute,
  hasEmptyAlt,
  hasRoleNone,
  hasRolePresentation,
  hasTextContent,
  hasTitleAttribute,
  isCanvasTag,
  isNodeType,
  isSvgTag
} from './common';

/**
 * ============================================================================
 * FONCTIONS SPÉCIFIQUES AUX SVG
 * ============================================================================
 */

/**
 * Vérifie si un SVG a un élément <title> enfant
 * @param node - Le nœud SVG à vérifier
 * @returns true si un élément <title> est présent
 */
export function hasSvgTitle(node: any): boolean {
  if (!node || !node.children) {
    return false;
  }
  
  const titleElements = getChildElements(node, 'JSXElement');
  return titleElements.some((child: any) => 
    child.openingElement && 
    child.openingElement.name && 
    child.openingElement.name.name === 'title'
  );
}

/**
 * Vérifie si un SVG a un élément <desc> enfant
 * @param node - Le nœud SVG à vérifier
 * @returns true si un élément <desc> est présent
 */
export function hasSvgDesc(node: any): boolean {
  if (!node || !node.children) {
    return false;
  }
  
  const descElements = getChildElements(node, 'JSXElement');
  return descElements.some((child: any) => 
    child.openingElement && 
    child.openingElement.name && 
    child.openingElement.name.name === 'desc'
  );
}

/**
 * Vérifie si un SVG a un élément <title> ou <desc> enfant
 * @param node - Le nœud SVG à vérifier
 * @returns true si un élément <title> ou <desc> est présent
 */
export function hasSvgTitleOrDesc(node: any): boolean {
  return hasSvgTitle(node) || hasSvgDesc(node);
}

/**
 * Vérifie si un SVG a un élément <title> ou <desc> avec du contenu
 * @param node - Le nœud SVG à vérifier
 * @returns true si un élément <title> ou <desc> avec du contenu est présent
 */
export function hasSvgTitleOrDescWithContent(node: any): boolean {
  const titleContent = getSvgTitleContent(node);
  const descContent = getSvgDescContent(node);
  return (titleContent !== null && titleContent.trim().length > 0) || (descContent !== null && descContent.trim().length > 0);
}

/**
 * Récupère le contenu textuel de l'élément <title> d'un SVG
 * @param node - Le nœud SVG à analyser
 * @returns Le contenu textuel du <title> ou null si non trouvé
 */
export function getSvgTitleContent(node: any): string | null {
  if (!node || !node.children) {
    return null;
  }
  
  const titleElements = getChildElements(node, 'JSXElement');
  const titleElement = titleElements.find((child: any) => 
    child.openingElement && 
    child.openingElement.name && 
    child.openingElement.name.name === 'title'
  );
  
  if (!titleElement || !titleElement.children) {
    return null;
  }
  
  // Extraire le contenu textuel du <title>
  const textParts: string[] = [];
  
  const extractText = (child: any) => {
    if (isNodeType(child, 'JSXText')) {
      const text = child.value.trim();
      if (text.length > 0) {
        textParts.push(text);
      }
    } else if (isNodeType(child, 'JSXElement') && child.children) {
      // Récursion pour les éléments imbriqués
      for (const grandChild of child.children) {
        extractText(grandChild);
      }
    }
  };
  
  for (const child of titleElement.children) {
    extractText(child);
  }
  
  return textParts.length > 0 ? textParts.join(' ') : null;
}

/**
 * Récupère le contenu textuel de l'élément <desc> d'un SVG
 * @param node - Le nœud SVG à analyser
 * @returns Le contenu textuel du <desc> ou null si non trouvé
 */
export function getSvgDescContent(node: any): string | null {
  if (!node || !node.children) {
    return null;
  }
  
  const descElements = getChildElements(node, 'JSXElement');
  const descElement = descElements.find((child: any) => 
    child.openingElement && 
    child.openingElement.name && 
    child.openingElement.name.name === 'desc'
  );
  
  if (!descElement || !descElement.children) {
    return null;
  }
  
  // Extraire le contenu textuel du <desc>
  const textParts: string[] = [];
  
  const extractText = (child: any) => {
    if (isNodeType(child, 'JSXText')) {
      const text = child.value.trim();
      if (text.length > 0) {
        textParts.push(text);
      }
    } else if (isNodeType(child, 'JSXElement') && child.children) {
      // Récursion pour les éléments imbriqués
      for (const grandChild of child.children) {
        extractText(grandChild);
      }
    }
  };
  
  for (const child of descElement.children) {
    extractText(child);
  }
  
  return textParts.length > 0 ? textParts.join(' ') : null;
}

/**
 * ============================================================================
 * FONCTIONS SPÉCIFIQUES AUX CANVAS
 * ============================================================================
 */

/**
 * Récupère le contenu textuel d'un élément Canvas
 * @param node - Le nœud Canvas à analyser
 * @returns Le contenu textuel du Canvas ou null si non trouvé
 */
export function getCanvasTextContent(node: any): string | null {
  if (!node || !node.children) {
    return null;
  }

  const textParts: string[] = [];
  
  /**
   * Fonction récursive pour extraire le texte des enfants
   * @param child - L'enfant à analyser
   */
  const extractText = (child: any) => {
    if (isNodeType(child, 'JSXText')) {
      const text = child.value.trim();
      if (text.length > 0) {
        textParts.push(text);
      }
    } else if (isNodeType(child, 'JSXElement') && child.children) {
      // Récursion pour les éléments imbriqués
      for (const grandChild of child.children) {
        extractText(grandChild);
      }
    }
  };

  // Parcourir tous les enfants du Canvas
  for (const child of node.children) {
    extractText(child);
  }
  
  return textParts.length > 0 ? textParts.join(' ') : null;
}

/**
 * Vérifie si un Canvas a du contenu textuel significatif
 * @param node - Le nœud Canvas à vérifier
 * @returns true si le Canvas contient du texte significatif
 */
export function hasCanvasTextContent(node: any): boolean {
  const content = getCanvasTextContent(node);
  return content !== null && content.trim().length > 0;
}

/**
 * ============================================================================
 * FONCTIONS GÉNÉRALES POUR LES IMAGES (RGAA 1.1, 1.2, 1.3)
 * ============================================================================
 */

/**
 * Vérifie si un nœud a des attributs d'alternative valides
 * @param node - Le nœud à vérifier
 * @returns true si au moins un attribut d'alternative est présent
 */
export function hasAlternativeAttributes(node: any): boolean {
  const hasStandardAttrs = hasAttribute(node, 'alt') ||
                          hasAttribute(node, 'aria-labelledby') || 
                          hasAttribute(node, 'aria-label') || 
                          hasAttribute(node, 'title');
  
  // Pour les SVG (avec ou sans role="img"), vérifier aussi les éléments <title> enfants
  if (isSvgTag(node) && node.children) {
    return hasStandardAttrs || hasSvgTitleOrDesc(node);
  }
  
  // Pour les Canvas, vérifier aussi le contenu textuel
  if (isCanvasTag(node) && node.children) {
    return hasStandardAttrs || hasTextContent(node);
  }
  
  return hasStandardAttrs;
}

/**
 * Vérifie si un nœud a des attributs d'alternative pour les images décoratives
 * Exclut alt="" car c'est valide pour les images décoratives
 * @param node - Le nœud à vérifier
 * @returns true si des attributs d'alternative autres que alt="" sont présents
 */
export function hasAlternativeAttributesForDecorative(node: any): boolean {
  const hasAriaLabelledBy = hasAttribute(node, 'aria-labelledby');
  const hasAriaLabel = hasAttribute(node, 'aria-label');
  const hasTitle = hasTitleAttribute(node);
  
  // Pour les images <img>, vérifier aussi l'attribut alt (mais pas alt="")
  const altValue = getAttributeValue(node, 'alt');
  const hasNonEmptyAlt = hasAttribute(node, 'alt') && altValue !== '';
  
  return hasAriaLabelledBy || hasAriaLabel || hasTitle || hasNonEmptyAlt;
}

/**
 * Vérifie si une image est correctement marquée comme décorative
 * @param node - Le nœud à vérifier
 * @returns true si l'image est correctement marquée comme décorative
 */
export function isCorrectlyMarkedDecorative(node: any): boolean {
  // Vérifier les attributs de marquage décoratif
  const hasAriaHiddenTrue = hasAriaHidden(node);
  const hasRolePres = hasRolePresentation(node);
  const hasRoleNoneAttr = hasRoleNone(node);
  
  // Vérifier alt=""
  const hasEmptyAltAttr = hasEmptyAlt(node);
  
  // Au moins un des attributs de marquage décoratif doit être présent
  const hasDecorativeMarking = hasAriaHiddenTrue || hasRolePres || hasRoleNoneAttr;
  
  // Pour les images <img>, alt="" est requis
  if (node.openingElement && node.openingElement.name && node.openingElement.name.name === 'img') {
    return hasDecorativeMarking && hasEmptyAltAttr;
  }
  
  // Pour les autres éléments, le marquage décoratif suffit
  return hasDecorativeMarking;
}

/**
 * Vérifie si une alternative textuelle est trop courte
 * @param node - Le nœud à vérifier
 * @param minLength - Longueur minimale requise (défaut: 25)
 * @returns true si l'alternative est trop courte
 */
export function isAlternativeTooShort(node: any, minLength: number = 25): boolean {
  // Vérifier les alternatives standard
  const altValue = getAttributeValue(node, 'alt');
  const ariaLabelValue = getAttributeValue(node, 'aria-label');
  const titleValue = getAttributeValue(node, 'title');
  
  // Pour les SVG, vérifier aussi le contenu des éléments <title> enfants
  if (isSvgTag(node)) {
    const hasContent = hasAlternativeAttributes(node);
    if (hasContent) {
      // Pour les SVG, vérifier la longueur du contenu <title>
      const svgTitleContent = getSvgTitleContent(node);
      if (svgTitleContent && svgTitleContent.trim().length > 0) {
        if (svgTitleContent.trim().length < minLength) {
          return true; // Alternative trop courte
        }
        return false; // Alternative suffisamment longue
      }
    }
  }
  
  // Vérifier le contenu alternatif des Canvas
  if (isCanvasTag(node)) {
    const hasContent = hasTextContent(node);
    if (hasContent) {
      // Pour les Canvas, vérifier la longueur du contenu textuel
      const canvasTextContent = getCanvasTextContent(node);
      if (canvasTextContent && canvasTextContent.trim().length > 0) {
        if (canvasTextContent.trim().length < minLength) {
          return true; // Alternative trop courte
        }
        return false; // Alternative suffisamment longue
      }
    }
  }
  
  // Vérifier les alternatives standard (seulement si elles ont au moins 1 caractère non vide)
  if (altValue && altValue.trim().length > 0) {
    if (altValue.trim().length >= minLength) {
      return false; // Alternative suffisamment longue
    }
    return true; // Alternative trop courte
  }
  
  if (ariaLabelValue && ariaLabelValue.trim().length > 0) {
    if (ariaLabelValue.trim().length >= minLength) {
      return false; // Alternative suffisamment longue
    }
    return true; // Alternative trop courte
  }
  
  if (titleValue && titleValue.trim().length > 0) {
    if (titleValue.trim().length >= minLength) {
      return false; // Alternative suffisamment longue
    }
    return true; // Alternative trop courte
  }
  
  // Si aucune alternative avec du contenu, ne pas appliquer RGAA 1.3
  // (RGAA 1.1 s'occupera de l'absence d'alternative)
  return false;
}

/**
 * Récupère la plus courte alternative textuelle disponible
 * @param node - Le nœud à analyser
 * @returns La plus courte alternative ou null si aucune trouvée
 */
export function getShortestAlternative(node: any): string | null {
  const alternatives: string[] = [];
  
  // Récupérer les alternatives standard
  const altValue = getAttributeValue(node, 'alt');
  const ariaLabelValue = getAttributeValue(node, 'aria-label');
  const titleValue = getAttributeValue(node, 'title');
  
  if (altValue) alternatives.push(altValue);
  if (ariaLabelValue) alternatives.push(ariaLabelValue);
  if (titleValue) alternatives.push(titleValue);
  
  // Pour les SVG, vérifier aussi le contenu des éléments <title> enfants
  if (isSvgTag(node) && node.children) {
    const svgTitleContent = getSvgTitleContent(node);
    if (svgTitleContent) {
      alternatives.push(svgTitleContent);
    }
  }
  
  // Pour les Canvas, vérifier aussi le contenu textuel
  if (isCanvasTag(node) && node.children) {
    const canvasTextContent = getCanvasTextContent(node);
    if (canvasTextContent) {
      alternatives.push(canvasTextContent);
    }
  }
  
  if (alternatives.length === 0) {
    return null;
  }
  
  // Retourner la plus courte alternative
  return alternatives.reduce((shortest, current) => 
    current.length < shortest.length ? current : shortest
  );
}

/**
 * Vérifie si un nœud a une alternative valide selon les critères spécifiés
 * @param node - Le nœud à vérifier
 * @param allowedAlternatives - Liste des types d'alternatives autorisés
 * @returns true si une alternative valide est trouvée
 */
export function hasValidAlternative(node: any, allowedAlternatives: string[]): boolean {
  for (const alternative of allowedAlternatives) {
    switch (alternative) {
      case 'alt':
        if (hasAttribute(node, 'alt')) {
          const altValue = getAttributeValue(node, 'alt');
          if (altValue && altValue.trim().length > 0) {
            return true;
          }
        }
        break;
      case 'aria-label':
        if (hasAttribute(node, 'aria-label')) {
          const ariaLabelValue = getAttributeValue(node, 'aria-label');
          if (ariaLabelValue && ariaLabelValue.trim().length > 0) {
            return true;
          }
        }
        break;
      case 'aria-labelledby':
        if (hasAttribute(node, 'aria-labelledby')) {
          return true;
        }
        break;
      case 'title':
        if (hasAttribute(node, 'title')) {
          const titleValue = getAttributeValue(node, 'title');
          if (titleValue && titleValue.trim().length > 0) {
            return true;
          }
        }
        break;
      case 'svg-title':
        if (isSvgTag(node) && hasSvgTitle(node)) {
          const svgTitleContent = getSvgTitleContent(node);
          if (svgTitleContent && svgTitleContent.trim().length > 0) {
            return true;
          }
        }
        break;
    }
  }
  
  return false;
}
