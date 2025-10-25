/**
 * Fichier de compatibilité temporaire
 * Réexporte tout depuis le nouvel index pour maintenir la compatibilité
 * 
 * @deprecated Ce fichier sera supprimé après la migration complète
 * Utilisez les imports directs depuis les modules spécialisés :
 * - import { hasAttribute } from './common'
 * - import { hasAlternativeAttributes } from './image-utils'
 * - import { getSvgTitleContent } from './svg-utils'
 * - import { getCanvasTextContent } from './canvas-utils'
 * - import { parseRgaaComment } from './rgaa-comments'
 */

// Réexport de tout depuis le nouvel index
export * from './index';
