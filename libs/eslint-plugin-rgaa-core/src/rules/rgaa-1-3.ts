import { defaultRGAAConfig, getRGAA1_3DocumentationUrl } from '../config';
import {
  getShortestAlternative,
  hasAlternativeAttributes,
  hasAttribute,
  hasSvgTitleOrDesc,
  isAlternativeTooShort,
  isAreaTag,
  isCanvasTag,
  isDecorativeImage,
  isEmbedImage,
  isHtmlTag,
  isInputImage,
  isObjectImage,
  isSvgTag
} from '../utils';

import { Rule } from 'eslint';

/**
 * RGAA 1.3 - Pertinence des alternatives textuelles
 * 
 * Pour chaque image porteuse d'information ayant une alternative textuelle,
 * cette alternative est-elle pertinente (hors cas particuliers) ?
 */
export const rgaa1_3: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'RGAA 1.3 - Vérifier la pertinence des alternatives textuelles',
      category: 'Accessibility',
      recommended: true,
      url: getRGAA1_3DocumentationUrl()
    },
    messages: {
      // Test 1.3.1 - Images <img> et role="img"
      'test1-3-1-img-alternative-too-short': 'Test 1.3.1 ATTENTION : Votre alternative textuelle de l\'image <img> semble courte ({{length}} caractères), veuillez vérifier sa pertinence.',
      'test1-3-1-role-img-alternative-too-short': 'Test 1.3.1 ATTENTION : Votre alternative textuelle de l\'élément avec role="img" semble courte ({{length}} caractères), veuillez vérifier sa pertinence.',
      
      // Test 1.3.2 - Zones <area>
      'test1-3-2-area-alternative-too-short': 'Test 1.3.2 ATTENTION : Votre alternative textuelle de la zone <area> semble courte ({{length}} caractères), veuillez vérifier sa pertinence.',
      
      // Test 1.3.3 - Boutons <input type="image">
      'test1-3-3-input-alternative-too-short': 'Test 1.3.3 ATTENTION : Votre alternative textuelle du bouton <input type="image"> semble courte ({{length}} caractères), veuillez vérifier sa pertinence.',
      
      // Test 1.3.4 - Images <object>
      'test1-3-4-object-alternative-too-short': 'Test 1.3.4 ATTENTION : Votre alternative textuelle de l\'image <object> semble courte ({{length}} caractères), veuillez vérifier sa pertinence.',
      
      // Test 1.3.5 - Images <embed>
      'test1-3-5-embed-alternative-too-short': 'Test 1.3.5 ATTENTION : Votre alternative textuelle de l\'image <embed> semble courte ({{length}} caractères), veuillez vérifier sa pertinence.',
      
      // Test 1.3.6 - Images <svg>
      'test1-3-6-svg-alternative-too-short': 'Test 1.3.6 ATTENTION : Votre alternative textuelle de l\'image <svg> semble courte ({{length}} caractères), veuillez vérifier sa pertinence.',
      
      // Test 1.3.7 - Images <canvas>
      'test1-3-7-canvas-alternative-too-short': 'Test 1.3.7 ATTENTION : Votre alternative textuelle de l\'image <canvas> semble courte ({{length}} caractères), veuillez vérifier sa pertinence.',
      
      // Test 1.3.8 - Contenu alternatif <canvas>
      'test1-3-8-canvas-content-not-accessible': 'Test 1.3.8 ATTENTION : Le contenu alternatif du <canvas> n\'est pas correctement restitué par les technologies d\'assistance',
      
      // Test 1.3.9 - Alternatives courtes et concises
      'test1-3-9-alternative-too-short': 'Test 1.3.9 ATTENTION : Votre alternative textuelle semble courte ({{length}} caractères), veuillez vérifier sa pertinence.',
      
      // Avertissements pour aria-labelledby
      'aria-labelledby-warning': 'RGAA 1.3 ATTENTION : L\'élément utilise aria-labelledby. Vérifiez manuellement que l\'élément référencé contient une alternative textuelle pertinente et suffisamment descriptive.'
    },
    schema: [
      {
        type: 'object',
        properties: {
          minLength: {
            type: 'number',
            minimum: 1,
            default: 25
          }
        },
        additionalProperties: false
      }
    ]
  },

  create(context: Rule.RuleContext) {
    const documentationUrl = getRGAA1_3DocumentationUrl();
    const options = context.options[0] || {};
    const minLength = options.minLength || defaultRGAAConfig.minAlternativeLength;

    // Fonction pour parser les commentaires RGAA dans le code source
    const parseRgaaCommentFromSource = (node: any): 'decorative' | 'informative' | 'ignore' | null => {
      const sourceCode = context.getSourceCode();
      const nodeStart = node.range[0];
      
      // Chercher dans les 10 lignes précédentes
      const lines = sourceCode.getText().split('\n');
      const nodeLine = sourceCode.getLocFromIndex(nodeStart).line;
      
      for (let i = Math.max(0, nodeLine - 10); i < nodeLine; i++) {
        const line = lines[i];
        const rgaaMatch = line.match(/\/\*\s*eslint-rgaa:\s*(decorative|informative|ignore)\s*\*\//);
        if (rgaaMatch) {
          return rgaaMatch[1] as 'decorative' | 'informative' | 'ignore';
        }
      }
      
      return null;
    };

    // Fonction pour vérifier et signaler les éléments avec aria-labelledby
    const checkAriaLabelledBy = (node: any) => {
      if (hasAttribute(node, 'aria-labelledby')) {
        // Ne générer l'avertissement que si l'élément n'a pas d'autres alternatives
        const hasOtherAlternatives = hasAttribute(node, 'alt') ||
                                    hasAttribute(node, 'aria-label') ||
                                    hasAttribute(node, 'title');

        if (!hasOtherAlternatives) {
          context.report({
            node,
            messageId: 'aria-labelledby-warning',
            data: {
              rgaaCriterion: '1.3',
              documentationUrl
            }
          });
        }
      }
    };

    return {
      JSXElement(node: any) {
        // Vérifier d'abord les commentaires RGAA
        const rgaaComment = parseRgaaCommentFromSource(node);
        if (rgaaComment === 'decorative' || rgaaComment === 'ignore') {
          return; // Ignorer les images marquées comme décoratives ou à ignorer
        }
        // Par défaut, toutes les images sont considérées comme informatives
        // (pas besoin de vérifier isDecorativeImage)
        
        // Vérifier et signaler les éléments avec aria-labelledby
        checkAriaLabelledBy(node);

        // Test 1.3.1 - Images <img> et éléments avec role="img"
        if (isHtmlTag(node, 'img')) {
          if (hasAlternativeAttributes(node) && isAlternativeTooShort(node, minLength)) {
            const shortestAlt = getShortestAlternative(node);
            context.report({
              node,
              messageId: 'test1-3-1-img-alternative-too-short',
              data: {
                length: String(shortestAlt?.length || 0),
                minLength,
                rgaaCriterion: '1.3.1',
                documentationUrl
              }
            });
            return;
          }
        }

        // Test 1.3.1 - Éléments avec role="img"
        if (node.openingElement?.name?.name && 
            node.openingElement.attributes?.some((attr: any) => 
              attr.type === 'JSXAttribute' && 
              attr.name?.name === 'role' && 
              attr.value?.value === 'img'
            )) {
          // Pour les SVG avec role="img", vérifier spécialement les éléments <title> enfants
          if (isSvgTag(node)) {
            if (hasSvgTitleOrDesc(node) && isAlternativeTooShort(node, minLength)) {
              const shortestAlt = getShortestAlternative(node);
              context.report({
                node,
                messageId: 'test1-3-1-role-img-alternative-too-short',
                data: {
                  length: String(shortestAlt?.length || 0),
                  minLength,
                  rgaaCriterion: '1.3.1',
                  documentationUrl
                }
              });
              return;
            }
          } else {
            // Pour les autres éléments avec role="img"
            if (hasAlternativeAttributes(node) && isAlternativeTooShort(node, minLength)) {
              const shortestAlt = getShortestAlternative(node);
              context.report({
                node,
                messageId: 'test1-3-1-role-img-alternative-too-short',
                data: {
                  length: String(shortestAlt?.length || 0),
                  minLength,
                  rgaaCriterion: '1.3.1',
                  documentationUrl
                }
              });
              return;
            }
          }
        }

        // Test 1.3.2 - Zones <area>
        if (isAreaTag(node)) {
          if (hasAlternativeAttributes(node) && isAlternativeTooShort(node, minLength)) {
            const shortestAlt = getShortestAlternative(node);
            context.report({
              node,
              messageId: 'test1-3-2-area-alternative-too-short',
              data: {
                length: String(shortestAlt?.length || 0),
                minLength,
                rgaaCriterion: '1.3.2',
                documentationUrl
              }
            });
            return;
          }
        }

        // Test 1.3.3 - Boutons <input type="image">
        if (isInputImage(node)) {
          if (hasAlternativeAttributes(node) && isAlternativeTooShort(node, minLength)) {
            const shortestAlt = getShortestAlternative(node);
            context.report({
              node,
              messageId: 'test1-3-3-input-alternative-too-short',
              data: {
                length: String(shortestAlt?.length || 0),
                minLength,
                rgaaCriterion: '1.3.3',
                documentationUrl
              }
            });
            return;
          }
        }

        // Test 1.3.4 - Images <object>
        if (isObjectImage(node)) {
          if (hasAlternativeAttributes(node) && isAlternativeTooShort(node, minLength)) {
            const shortestAlt = getShortestAlternative(node);
            context.report({
              node,
              messageId: 'test1-3-4-object-alternative-too-short',
              data: {
                length: String(shortestAlt?.length || 0),
                minLength,
                rgaaCriterion: '1.3.4',
                documentationUrl
              }
            });
            return;
          }
        }

        // Test 1.3.5 - Images <embed>
        if (isEmbedImage(node)) {
          if (hasAlternativeAttributes(node) && isAlternativeTooShort(node, minLength)) {
            const shortestAlt = getShortestAlternative(node);
            context.report({
              node,
              messageId: 'test1-3-5-embed-alternative-too-short',
              data: {
                length: String(shortestAlt?.length || 0),
                minLength,
                rgaaCriterion: '1.3.5',
                documentationUrl
              }
            });
            return;
          }
        }

        // Test 1.3.6 - Images <svg>
        if (isSvgTag(node)) {
          if (hasAlternativeAttributes(node) && isAlternativeTooShort(node, minLength)) {
            const shortestAlt = getShortestAlternative(node);
            context.report({
              node,
              messageId: 'test1-3-6-svg-alternative-too-short',
              data: {
                length: String(shortestAlt?.length || 0),
                minLength,
                rgaaCriterion: '1.3.6',
                documentationUrl
              }
            });
            return;
          }
        }

        // Test 1.3.7 - Images <canvas>
        if (isCanvasTag(node)) {
          if (hasAlternativeAttributes(node) && isAlternativeTooShort(node, minLength)) {
            const shortestAlt = getShortestAlternative(node);
            context.report({
              node,
              messageId: 'test1-3-7-canvas-alternative-too-short',
              data: {
                length: String(shortestAlt?.length || 0),
                minLength,
                rgaaCriterion: '1.3.7',
                documentationUrl
              }
            });
            return;
          }
        }

        // Test 1.3.8 - Contenu alternatif <canvas> (pas de règle automatique pour la pertinence, donc pas de test de longueur ici)
        // Ce test est plus complexe et nécessite une évaluation manuelle ou des outils plus avancés.
        // Pour l'instant, nous ne pouvons pas implémenter une vérification automatique de la "pertinence" du contenu alternatif du canvas.
        // Nous pourrions ajouter un message d'avertissement générique si le contenu existe mais n'est pas validé.
        // if (isCanvasTag(node)) {
        //   // Vérifier si le canvas a du contenu alternatif mais pas d'attributs d'alternative
        //   const hasContent = node.children && node.children.length > 0;
        //   const hasAttrs = hasAlternativeAttributes(node);
        //   
        //   if (hasContent && !hasAttrs) {
        //     context.report({
        //       node,
        //       messageId: 'test1-3-8-canvas-content-not-accessible',
        //       data: {
        //         rgaaCriterion: '1.3.8',
        //         documentationUrl
        //       }
        //     });
        //     return;
        //   }
        // }

        // Test 1.3.9 - Alternatives courtes et concises (fallback général)
        // Ce test s'applique à tous les types d'images qui ont des alternatives
        if ((isHtmlTag(node, 'img') || isAreaTag(node) || isInputImage(node) || 
             isObjectImage(node) || isEmbedImage(node) || isSvgTag(node) || isCanvasTag(node)) &&
            hasAlternativeAttributes(node) && isAlternativeTooShort(node, minLength)) {
          const shortestAlt = getShortestAlternative(node);
          context.report({
            node,
            messageId: 'test1-3-9-alternative-too-short',
            data: {
              length: String(shortestAlt?.length || 0),
              minLength,
              rgaaCriterion: '1.3.9',
              documentationUrl
            }
          });
        }
      }
    };
  }
};
