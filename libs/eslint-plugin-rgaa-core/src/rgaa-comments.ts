/**
 * Gestion des commentaires ESLint RGAA
 * Permet de contrôler explicitement le statut des images via des commentaires
 */

/**
 * Types de commentaires RGAA supportés
 */
export type RgaaCommentType = 'decorative' | 'informative' | 'ignore';

/**
 * Parse les commentaires ESLint RGAA dans le code source
 * @param context - Le contexte ESLint
 * @param node - Le nœud à analyser
 * @returns Le type de commentaire RGAA ou null
 */
export function parseRgaaComment(context: any, node: any): RgaaCommentType | null {
  if (!context || !node) {
    return null;
  }

  try {
    // Récupérer le code source complet
    const sourceCode = context.getSourceCode();
    const source = sourceCode.getText();
    
    // Trouver la position du nœud dans le code source
    const nodeStart = node.range[0];
    const nodeEnd = node.range[1];
    
    // Chercher les commentaires avant le nœud (dans les 5 lignes précédentes)
    const lines = source.split('\n');
    const nodeLine = sourceCode.getLocFromIndex(nodeStart).line;
    
    // Analyser les lignes précédentes pour trouver des commentaires RGAA
    for (let i = Math.max(0, nodeLine - 6); i < nodeLine; i++) {
      const line = lines[i];
      if (!line) continue;
      
      // Chercher les commentaires de type {/* eslint-rgaa: ... */}
      const jsxCommentMatch = line.match(/{\s*\/\*\s*eslint-rgaa:\s*(\w+)/);
      if (jsxCommentMatch) {
        const commentType = jsxCommentMatch[1].toLowerCase();
        if (isValidRgaaCommentType(commentType)) {
          return commentType as RgaaCommentType;
        }
      }
      
      // Chercher les commentaires de type // eslint-rgaa: ...
      const lineCommentMatch = line.match(/\/\/\s*eslint-rgaa:\s*(\w+)/);
      if (lineCommentMatch) {
        const commentType = lineCommentMatch[1].toLowerCase();
        if (isValidRgaaCommentType(commentType)) {
          return commentType as RgaaCommentType;
        }
      }
    }
    
    return null;
  } catch (error) {
    // En cas d'erreur, retourner null
    return null;
  }
}

/**
 * Vérifie si un type de commentaire RGAA est valide
 * @param commentType - Le type de commentaire à vérifier
 * @returns true si le type est valide
 */
function isValidRgaaCommentType(commentType: string): commentType is RgaaCommentType {
  return commentType === 'decorative' || 
         commentType === 'informative' || 
         commentType === 'ignore';
}

/**
 * Détermine si une image est décorative en analysant les commentaires et attributs
 * @param context - Le contexte ESLint
 * @param node - Le nœud à analyser
 * @param isCorrectlyMarkedDecorative - Fonction pour vérifier le marquage décoratif
 * @returns true si l'image est décorative
 */
export function isDecorativeImage(
  context: any, 
  node: any, 
  isCorrectlyMarkedDecorative: (node: any) => boolean
): boolean {
  // Vérifier d'abord les commentaires ESLint RGAA
  const rgaaComment = parseRgaaComment(context, node);
  if (rgaaComment === 'decorative') {
    return true;
  }
  if (rgaaComment === 'informative') {
    return false;
  }
  if (rgaaComment === 'ignore') {
    return false; // Les images ignorées ne sont pas considérées comme décoratives
  }
  
  // Si pas de commentaire explicite, analyser les attributs
  return isCorrectlyMarkedDecorative(node);
}

/**
 * Détermine si une image est informative en analysant les commentaires
 * @param context - Le contexte ESLint
 * @param node - Le nœud à analyser
 * @returns true si l'image est explicitement marquée comme informative
 */
export function isInformativeImage(context: any, node: any): boolean {
  const rgaaComment = parseRgaaComment(context, node);
  return rgaaComment === 'informative';
}

/**
 * Détermine si une image doit être ignorée par les règles RGAA
 * @param context - Le contexte ESLint
 * @param node - Le nœud à analyser
 * @returns true si l'image doit être ignorée
 */
export function isIgnoredImage(context: any, node: any): boolean {
  const rgaaComment = parseRgaaComment(context, node);
  return rgaaComment === 'ignore';
}

/**
 * Génère un message d'aide pour les commentaires RGAA
 * @returns Message d'aide formaté
 */
export function getRgaaCommentHelpMessage(): string {
  return `
Commentaires RGAA disponibles :
- {/* eslint-rgaa: decorative */} - Image décorative (vérifiée par RGAA 1.2)
- {/* eslint-rgaa: informative */} - Image informative (vérifiée par RGAA 1.1 et 1.3)
- {/* eslint-rgaa: ignore */} - Image ignorée temporairement

Par défaut, toutes les images sont considérées comme informatives.
`;
}
