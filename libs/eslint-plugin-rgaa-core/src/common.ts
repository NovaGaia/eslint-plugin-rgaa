/**
 * Fonctions communes pour la manipulation des nœuds JSX et des attributs
 * Ces fonctions sont utilisées par toutes les règles RGAA
 */

/**
 * Vérifie si un nœud a un attribut spécifique
 * @param node - Le nœud JSX à vérifier
 * @param attributeName - Le nom de l'attribut à rechercher
 * @returns true si l'attribut existe, false sinon
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
 * Récupère la valeur d'un attribut spécifique
 * @param node - Le nœud JSX à analyser
 * @param attributeName - Le nom de l'attribut
 * @returns La valeur de l'attribut ou null si non trouvé
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
  
  // Gérer différents types de valeurs d'attributs
  if (attribute.value.type === 'Literal') {
    return attribute.value.value;
  }
  
  if (attribute.value.type === 'JSXExpressionContainer') {
    // Pour l'instant, on ne peut pas évaluer les expressions, donc on retourne null
    return null;
  }
  
  return null;
}

/**
 * Vérifie si un nœud est d'un type spécifique
 * @param node - Le nœud à vérifier
 * @param nodeType - Le type de nœud attendu
 * @returns true si le nœud est du type spécifié
 */
export function isNodeType(node: any, nodeType: string): boolean {
  return node && node.type === nodeType;
}

/**
 * Vérifie si un nœud est une balise HTML spécifique
 * @param node - Le nœud à vérifier
 * @param tagName - Le nom de la balise HTML
 * @returns true si le nœud est la balise spécifiée
 */
export function isHtmlTag(node: any, tagName: string): boolean {
  return isNodeType(node, 'JSXElement') && 
         node.openingElement && 
         node.openingElement.name && 
         node.openingElement.name.name === tagName;
}

/**
 * Vérifie si un texte est vide ou ne contient que des espaces
 * @param text - Le texte à vérifier
 * @returns true si le texte est vide ou ne contient que des espaces
 */
export function isEmptyText(text: string | null | undefined): boolean {
  return !text || text.trim().length === 0;
}

/**
 * Vérifie si un texte est significatif (non vide et pas seulement des espaces)
 * @param text - Le texte à vérifier
 * @returns true si le texte est significatif
 */
export function isMeaningfulText(text: string | null | undefined): boolean {
  return !isEmptyText(text);
}

/**
 * Récupère tous les éléments enfants d'un type spécifique
 * @param node - Le nœud parent
 * @param elementType - Le type d'élément à rechercher
 * @returns Tableau des éléments enfants du type spécifié
 */
export function getChildElements(node: any, elementType: string): any[] {
  if (!node || !node.children) {
    return [];
  }
  
  return node.children.filter((child: any) => isNodeType(child, elementType));
}

/**
 * Vérifie si un élément a du contenu textuel
 * @param node - Le nœud à vérifier
 * @returns true si l'élément contient du texte significatif
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
 * @param node - Le nœud à vérifier
 * @returns true si l'élément a role="img"
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
 * @param node - Le nœud à vérifier
 * @returns true si c'est un input de type image
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
 * @param node - Le nœud à vérifier
 * @returns true si c'est une balise area
 */
export function isAreaTag(node: any): boolean {
  return isHtmlTag(node, 'area');
}

/**
 * Vérifie si un nœud JSX est une balise svg
 * @param node - Le nœud à vérifier
 * @returns true si c'est une balise svg
 */
export function isSvgTag(node: any): boolean {
  return isHtmlTag(node, 'svg');
}

/**
 * Vérifie si un nœud JSX est une balise object avec type="image/..."
 * @param node - Le nœud à vérifier
 * @returns true si c'est un object d'image
 */
export function isObjectImage(node: any): boolean {
  if (!isHtmlTag(node, 'object')) {
    return false;
  }
  
  const typeValue = getAttributeValue(node, 'type');
  return typeValue ? typeValue.startsWith('image/') : false;
}

/**
 * Vérifie si un nœud JSX est une balise embed avec type="image/..."
 * @param node - Le nœud à vérifier
 * @returns true si c'est un embed d'image
 */
export function isEmbedImage(node: any): boolean {
  if (!isHtmlTag(node, 'embed')) {
    return false;
  }
  
  const typeValue = getAttributeValue(node, 'type');
  return typeValue ? typeValue.startsWith('image/') : false;
}

/**
 * Vérifie si un nœud JSX est une balise canvas
 * @param node - Le nœud à vérifier
 * @returns true si c'est une balise canvas
 */
export function isCanvasTag(node: any): boolean {
  return isHtmlTag(node, 'canvas');
}

/**
 * Vérifie si un nœud JSX a l'attribut ismap
 * @param node - Le nœud à vérifier
 * @returns true si l'attribut ismap est présent
 */
export function hasIsmapAttribute(node: any): boolean {
  return hasAttribute(node, 'ismap');
}

/**
 * Vérifie si un nœud JSX a l'attribut href
 * @param node - Le nœud à vérifier
 * @returns true si l'attribut href est présent
 */
export function hasHrefAttribute(node: any): boolean {
  return hasAttribute(node, 'href');
}

/**
 * Vérifie si un nœud JSX a l'attribut aria-hidden="true"
 * @param node - Le nœud à vérifier
 * @returns true si aria-hidden="true" est présent
 */
export function hasAriaHidden(node: any): boolean {
  const ariaHiddenValue = getAttributeValue(node, 'aria-hidden');
  return ariaHiddenValue === 'true';
}

/**
 * Vérifie si un nœud JSX a l'attribut role="presentation"
 * @param node - Le nœud à vérifier
 * @returns true si role="presentation" est présent
 */
export function hasRolePresentation(node: any): boolean {
  const roleValue = getAttributeValue(node, 'role');
  return roleValue === 'presentation';
}

/**
 * Vérifie si un nœud JSX a l'attribut role="none"
 * @param node - Le nœud à vérifier
 * @returns true si role="none" est présent
 */
export function hasRoleNone(node: any): boolean {
  const roleValue = getAttributeValue(node, 'role');
  return roleValue === 'none';
}

/**
 * Vérifie si un nœud JSX a l'attribut alt=""
 * @param node - Le nœud à vérifier
 * @returns true si alt="" est présent
 */
export function hasEmptyAlt(node: any): boolean {
  const altValue = getAttributeValue(node, 'alt');
  return altValue === '';
}

/**
 * Vérifie si un nœud JSX a l'attribut title
 * @param node - Le nœud à vérifier
 * @returns true si l'attribut title est présent
 */
export function hasTitleAttribute(node: any): boolean {
  return hasAttribute(node, 'title');
}

/**
 * Crée un descripteur de rapport pour les violations RGAA
 * @param node - Le nœud concerné par la violation
 * @param message - Le message d'erreur à afficher
 * @param rgaaCriterion - Le critère RGAA concerné (ex: "1.1")
 * @param documentationUrl - URL de documentation optionnelle
 * @returns Le descripteur de rapport ESLint
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
