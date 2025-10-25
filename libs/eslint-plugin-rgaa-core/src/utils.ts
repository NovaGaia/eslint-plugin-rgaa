
/**
 * Utility functions for RGAA rule checking
 */

/**
 * Check if a node has a specific attribute
 */
export function hasAttribute(node: any, attributeName: string): boolean {
  if (!node || !node.openingElement || !node.openingElement.attributes) {
    return false;
  }
  
  return node.openingElement.attributes.some((attr: any) => 
    attr.name && attr.name.name === attributeName
  );
}

/**
 * Get the value of a specific attribute
 */
export function getAttributeValue(node: any, attributeName: string): string | null {
  if (!node || !node.openingElement || !node.openingElement.attributes) {
    return null;
  }
  
  const attribute = node.openingElement.attributes.find((attr: any) => 
    attr.name && attr.name.name === attributeName
  );
  
  if (!attribute || !attribute.value) {
    return null;
  }
  
  // Handle different types of attribute values
  if (attribute.value.type === 'Literal') {
    return attribute.value.value;
  }
  
  if (attribute.value.type === 'JSXExpressionContainer') {
    // For now, we can't evaluate expressions, so we'll return null
    return null;
  }
  
  return null;
}

/**
 * Check if a node is of a specific type
 */
export function isNodeType(node: any, nodeType: string): boolean {
  return node && node.type === nodeType;
}

/**
 * Check if a node is a specific HTML tag
 */
export function isHtmlTag(node: any, tagName: string): boolean {
  return isNodeType(node, 'JSXElement') && 
         node.openingElement && 
         node.openingElement.name && 
         node.openingElement.name.name === tagName;
}

/**
 * Check if a text content is empty or only whitespace
 */
export function isEmptyText(text: string | null | undefined): boolean {
  return !text || text.trim().length === 0;
}

/**
 * Check if a text content is meaningful (not empty and not just whitespace)
 */
export function isMeaningfulText(text: string | null | undefined): boolean {
  return !isEmptyText(text);
}

/**
 * Get all child elements of a specific type
 */
export function getChildElements(node: any, elementType: string): any[] {
  if (!node || !node.children) {
    return [];
  }
  
  return node.children.filter((child: any) => isNodeType(child, elementType));
}

/**
 * Check if an element has any text content
 */
export function hasTextContent(node: any): boolean {
  if (!node || !node.children) {
    return false;
  }
  
  return node.children.some((child: any) => {
    if (isNodeType(child, 'JSXText')) {
      return isMeaningfulText(child.value);
    }
    if (isNodeType(child, 'JSXElement')) {
      return hasTextContent(child);
    }
    return false;
  });
}

/**
 * Vérifie si un nœud JSX est un élément avec un attribut WAI-ARIA role="img"
 */
export function hasRoleImg(node: any): boolean {
  if (!node || node.type !== 'JSXElement') {
    return false;
  }
  
  const roleValue = getAttributeValue(node, 'role');
  return roleValue === 'img';
}

/**
 * Vérifie si un nœud JSX est une balise input avec type="image"
 */
export function isInputImage(node: any): boolean {
  if (!isHtmlTag(node, 'input')) {
    return false;
  }
  
  const typeValue = getAttributeValue(node, 'type');
  return typeValue === 'image';
}

/**
 * Vérifie si un nœud JSX est une balise area
 */
export function isAreaTag(node: any): boolean {
  return isHtmlTag(node, 'area');
}

/**
 * Vérifie si un nœud JSX est une balise svg
 */
export function isSvgTag(node: any): boolean {
  return isHtmlTag(node, 'svg');
}

/**
 * Vérifie si un nœud JSX est une balise object avec type="image/..."
 */
export function isObjectImage(node: any): boolean {
  if (!isHtmlTag(node, 'object')) {
    return false;
  }
  
  const typeValue = getAttributeValue(node, 'type');
  return Boolean(typeValue && typeValue.startsWith('image/'));
}

/**
 * Vérifie si un nœud JSX est une balise embed avec type="image/..."
 */
export function isEmbedImage(node: any): boolean {
  if (!isHtmlTag(node, 'embed')) {
    return false;
  }
  
  const typeValue = getAttributeValue(node, 'type');
  return Boolean(typeValue && typeValue.startsWith('image/'));
}

/**
 * Vérifie si un nœud JSX est une balise canvas
 */
export function isCanvasTag(node: any): boolean {
  return isHtmlTag(node, 'canvas');
}

/**
 * Vérifie si une image a l'attribut ismap
 */
export function hasIsmapAttribute(node: any): boolean {
  return hasAttribute(node, 'ismap');
}

/**
 * Vérifie si un élément a au moins une alternative textuelle valide
 */
export function hasValidAlternative(node: any, allowedAlternatives: string[]): boolean {
  for (const alternative of allowedAlternatives) {
    if (alternative === 'aria-labelledby') {
      if (hasAttribute(node, 'aria-labelledby')) {
        return true;
      }
    } else if (alternative === 'aria-label') {
      const ariaLabel = getAttributeValue(node, 'aria-label');
      if (ariaLabel && isMeaningfulText(ariaLabel)) {
        return true;
      }
    } else if (alternative === 'alt') {
      const altValue = getAttributeValue(node, 'alt');
      if (altValue && isMeaningfulText(altValue)) {
        return true;
      }
    } else if (alternative === 'title') {
      const titleValue = getAttributeValue(node, 'title');
      if (titleValue && isMeaningfulText(titleValue)) {
        return true;
      }
    } else if (alternative === 'svg-title') {
      // Pour SVG, chercher un élément <title> dans les enfants
      if (hasSvgTitle(node)) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Vérifie si un SVG a un élément <title> avec du contenu
 */
export function hasSvgTitle(node: any): boolean {
  if (!isSvgTag(node) || !node.children) {
    return false;
  }
  
  return node.children.some((child: any) => {
    if (child.type === 'JSXElement' && child.openingElement && child.openingElement.name && child.openingElement.name.name === 'title') {
      return hasTextContent(child);
    }
    return false;
  });
}

/**
 * Vérifie si un élément area a un attribut href (zone cliquable)
 */
export function hasHrefAttribute(node: any): boolean {
  return hasAttribute(node, 'href');
}

/**
 * Vérifie si un élément a l'attribut aria-hidden="true"
 */
export function hasAriaHidden(node: any): boolean {
  const ariaHidden = getAttributeValue(node, 'aria-hidden');
  return ariaHidden === 'true';
}

/**
 * Vérifie si un élément a l'attribut role="presentation"
 */
export function hasRolePresentation(node: any): boolean {
  const roleValue = getAttributeValue(node, 'role');
  return roleValue === 'presentation';
}

/**
 * Vérifie si un élément a l'attribut role="none"
 */
export function hasRoleNone(node: any): boolean {
  const roleValue = getAttributeValue(node, 'role');
  return roleValue === 'none';
}

/**
 * Vérifie si un élément a un attribut alt vide
 */
export function hasEmptyAlt(node: any): boolean {
  const altValue = getAttributeValue(node, 'alt');
  return altValue === '';
}

/**
 * Vérifie si un élément a des attributs d'alternative textuelle
 */
export function hasAlternativeAttributes(node: any): boolean {
  return hasAttribute(node, 'aria-labelledby') || 
         hasAttribute(node, 'aria-label') || 
         hasAttribute(node, 'title');
}

/**
 * Vérifie si un SVG a des éléments title ou desc avec du contenu
 */
export function hasSvgTitleOrDesc(node: any): boolean {
  if (!isSvgTag(node) || !node.children) {
    return false;
  }
  
  return node.children.some((child: any) => {
    if (child.type === 'JSXElement' && child.openingElement && child.openingElement.name) {
      const tagName = child.openingElement.name.name;
      if (tagName === 'title' || tagName === 'desc') {
        return hasTextContent(child);
      }
    }
    return false;
  });
}

/**
 * Vérifie si un élément a des attributs title sur lui-même ou ses enfants
 */
export function hasTitleAttribute(node: any): boolean {
  if (hasAttribute(node, 'title')) {
    return true;
  }
  
  // Vérifier les enfants pour les attributs title
  if (node.children) {
    return node.children.some((child: any) => {
      if (child.type === 'JSXElement') {
        return hasTitleAttribute(child);
      }
      return false;
    });
  }
  
  return false;
}

/**
 * Vérifie si un élément est correctement marqué comme décoratif
 */
export function isCorrectlyMarkedDecorative(node: any): boolean {
  // Vérifier qu'il n'a pas d'attributs d'alternative
  if (hasAlternativeAttributes(node)) {
    return false;
  }

  // Vérifier les conditions de marquage décoratif
  const hasEmptyAltAttr = hasEmptyAlt(node);
  const hasAriaHiddenAttr = hasAriaHidden(node);
  const hasRolePresentationAttr = hasRolePresentation(node);
  const hasRoleNoneAttr = hasRoleNone(node);

  return hasEmptyAltAttr || hasAriaHiddenAttr || hasRolePresentationAttr || hasRoleNoneAttr;
}

/**
 * Vérifie si un élément est une image décorative
 * (utilisé par RGAA 1.1 pour ignorer les images décoratives)
 */
export function isDecorativeImage(node: any): boolean {
  // Vérifier si c'est un élément d'image
  if (!isHtmlTag(node, 'img') && !isAreaTag(node) && !isSvgTag(node) && 
      !isObjectImage(node) && !isCanvasTag(node) && !isEmbedImage(node)) {
    return false;
  }

  // Vérifier les conditions de marquage décoratif
  const hasEmptyAltAttr = hasEmptyAlt(node);
  const hasAriaHiddenAttr = hasAriaHidden(node);
  const hasRolePresentationAttr = hasRolePresentation(node);
  const hasRoleNoneAttr = hasRoleNone(node);
  const hasAlternativeAttrs = hasAlternativeAttributes(node);

  // Pour les images <img> et <area>, vérifier aussi l'attribut alt
  if (isHtmlTag(node, 'img') || isAreaTag(node)) {
    const altValue = getAttributeValue(node, 'alt');
    const hasAlt = hasAttribute(node, 'alt');
    const hasNonEmptyAlt = hasAlt && altValue !== '';
    
    // Une image <img> ou <area> est décorative si :
    // 1. Elle a des attributs de marquage décoratif explicites (aria-hidden, role="presentation", role="none")
    // 2. OU elle a alt="" (explicitement décorative)
    // 3. OU elle n'a pas d'attribut alt ET pas d'autres attributs d'alternative (considérée comme décorative par défaut)
    return hasAriaHiddenAttr || hasRolePresentationAttr || hasRoleNoneAttr || hasEmptyAltAttr || (!hasNonEmptyAlt && !hasAlternativeAttrs);
  }

  // Pour les autres types d'images (SVG, object, canvas, embed)
  // Une image est décorative si :
  // 1. Elle a des attributs de marquage décoratif
  // 2. OU elle n'a pas d'attributs d'alternative (considérée comme décorative par défaut)
  
  // Pour les SVG, vérifier aussi les éléments <title>
  if (isSvgTag(node)) {
    const hasSvgTitle = hasSvgTitleOrDesc(node);
    const hasAnyAlternative = hasAlternativeAttrs || hasSvgTitle;
    
    return hasEmptyAltAttr || hasAriaHiddenAttr || hasRolePresentationAttr || hasRoleNoneAttr || !hasAnyAlternative;
  }
  
  // Pour les Canvas, vérifier aussi le contenu alternatif
  if (isCanvasTag(node)) {
    const hasCanvasContent = hasTextContent(node);
    const hasAnyAlternative = hasAlternativeAttrs || hasCanvasContent;
    return hasEmptyAltAttr || hasAriaHiddenAttr || hasRolePresentationAttr || hasRoleNoneAttr || !hasAnyAlternative;
  }
  
  // Pour les autres types (object, embed)
  return hasEmptyAltAttr || hasAriaHiddenAttr || hasRolePresentationAttr || hasRoleNoneAttr || !hasAlternativeAttrs;
}

/**
 * Create a report descriptor for RGAA violations
 */
export function createReportDescriptor(
  node: any,
  message: string,
  rgaaCriterion: string,
  documentationUrl?: string
): any {
  const descriptor: any = {
    node,
    message,
    data: {
      rgaaCriterion,
      documentationUrl: documentationUrl || `https://novagaia.github.io/eslint-plugin-rgaa/rgaa/criteres/${rgaaCriterion}/`
    }
  };
  
  return descriptor;
}
