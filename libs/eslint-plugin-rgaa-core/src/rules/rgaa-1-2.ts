import {
  createReportDescriptor,
  getAttributeValue,
  hasAlternativeAttributes,
  hasAlternativeAttributesForDecorative,
  hasAriaHidden,
  hasAttribute,
  hasEmptyAlt,
  hasHrefAttribute,
  hasRoleNone,
  hasRolePresentation,
  hasSvgTitleOrDesc,
  hasSvgTitleOrDescWithContent,
  hasTextContent,
  hasTitleAttribute,
  isAreaTag,
  isCanvasTag,
  isCorrectlyMarkedDecorative,
  isEmbedImage,
  isHtmlTag,
  isObjectImage,
  isSvgTag
} from '../utils';

import { Rule } from 'eslint';
import { getCriterionDocumentationUrl } from '../config';

export const rgaa1_2: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Chaque image de décoration est-elle correctement ignorée par les technologies d\'assistance ?',
      category: 'RGAA',
      recommended: true,
      url: getCriterionDocumentationUrl('1-images/1.2')
    },
    schema: [],
    messages: {
      'test1-img-decorative-missing-marking': 'Test 1.2.1 ÉCHEC : L\'image décorative <img> doit être correctement marquée (alt="" ou aria-hidden="true" ou role="presentation")',
      'test1-img-decorative-has-alternative': 'Test 1.2.1 ÉCHEC : L\'image décorative <img> ne doit pas avoir d\'attributs d\'alternative textuelle (aria-labelledby, aria-label, title)',
      'test2-area-decorative-missing-marking': 'Test 1.2.2 ÉCHEC : La zone décorative <area> doit être correctement marquée (alt="" ou aria-hidden="true" ou role="presentation")',
      'test2-area-decorative-has-alternative': 'Test 1.2.2 ÉCHEC : La zone décorative <area> ne doit pas avoir d\'attributs d\'alternative textuelle (aria-labelledby, aria-label, title)',
      'test3-object-decorative-missing-aria-hidden': 'Test 1.2.3 ÉCHEC : L\'image objet décorative <object> doit avoir l\'attribut aria-hidden="true"',
      'test3-object-decorative-has-alternative': 'Test 1.2.3 ÉCHEC : L\'image objet décorative <object> ne doit pas avoir d\'attributs d\'alternative textuelle',
      'test3-object-decorative-has-content': 'Test 1.2.3 ÉCHEC : L\'image objet décorative <object> ne doit pas avoir de contenu alternatif',
      'test4-svg-decorative-missing-aria-hidden': 'Test 1.2.4 ÉCHEC : L\'image vectorielle décorative <svg> doit avoir l\'attribut aria-hidden="true"',
      'test4-svg-decorative-has-alternative': 'Test 1.2.4 ÉCHEC : L\'image vectorielle décorative <svg> ne doit pas avoir d\'attributs d\'alternative textuelle',
      'test4-svg-decorative-has-title-desc': 'Test 1.2.4 ÉCHEC : L\'image vectorielle décorative <svg> ne doit pas contenir d\'éléments <title> ou <desc> avec du contenu',
      'test4-svg-decorative-has-title-attr': 'Test 1.2.4 ÉCHEC : L\'image vectorielle décorative <svg> ne doit pas avoir d\'attributs title',
      'test5-canvas-decorative-missing-aria-hidden': 'Test 1.2.5 ÉCHEC : L\'image bitmap décorative <canvas> doit avoir l\'attribut aria-hidden="true"',
      'test5-canvas-decorative-has-alternative': 'Test 1.2.5 ÉCHEC : L\'image bitmap décorative <canvas> ne doit pas avoir d\'attributs d\'alternative textuelle',
      'test5-canvas-decorative-has-content': 'Test 1.2.5 ÉCHEC : L\'image bitmap décorative <canvas> ne doit pas avoir de contenu alternatif',
      'test6-embed-decorative-missing-aria-hidden': 'Test 1.2.6 ÉCHEC : L\'image embarquée décorative <embed> doit avoir l\'attribut aria-hidden="true"',
      'test6-embed-decorative-has-alternative': 'Test 1.2.6 ÉCHEC : L\'image embarquée décorative <embed> ne doit pas avoir d\'attributs d\'alternative textuelle',
      
      // Avertissements pour aria-labelledby
      'aria-labelledby-warning': 'RGAA 1.2 ATTENTION : L\'élément utilise aria-labelledby. Vérifiez manuellement que l\'élément référencé ne contient pas d\'alternative textuelle (image décorative).'
    }
  },

  create(context: Rule.RuleContext) {
    const documentationUrl = getCriterionDocumentationUrl('1-images/1.2');

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
              rgaaCriterion: '1.2',
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
        if (rgaaComment === 'informative' || rgaaComment === 'ignore') {
          return; // Ignorer les images marquées comme informatives ou à ignorer
        }
        
        // Déterminer si l'image est décorative
        const isDecorativeByComment = rgaaComment === 'decorative';
        const isDecorativeByAttrs = isCorrectlyMarkedDecorative(node);
        
        if (!isDecorativeByComment && !isDecorativeByAttrs) {
          return; // Image informative, traitée par RGAA 1.1
        }

        // Vérifier et signaler les éléments avec aria-labelledby
        checkAriaLabelledBy(node);
        // Test 1 : Images <img> décoratives
        if (isHtmlTag(node, 'img')) {
          // Si marquée comme décorative par commentaire, vérifier qu'elle est correctement marquée
          if (rgaaComment === 'decorative') {
            const hasEmptyAltAttr = hasEmptyAlt(node);
            const hasAriaHiddenAttr = hasAriaHidden(node);
            const hasRolePresentationAttr = hasRolePresentation(node);
            const hasRoleNoneAttr = hasRoleNone(node);
            
            if (!hasEmptyAltAttr && !hasAriaHiddenAttr && !hasRolePresentationAttr && !hasRoleNoneAttr) {
              context.report(createReportDescriptor(
                node,
                'Test 1.2.1 ÉCHEC : L\'image décorative <img> doit être correctement marquée (alt="" ou aria-hidden="true" ou role="presentation")',
                '1.2',
                documentationUrl
              ));
              return;
            }
          }
          
          // Une image est considérée comme décorative si :
          // 1. Elle n'a pas d'attributs d'alternative (aria-labelledby, aria-label, title)
          // 2. OU elle a alt="" (explicitement décorative)
          // 3. OU elle a aria-hidden="true" ou role="presentation"/"none"
          
          const hasEmptyAltAttr = hasEmptyAlt(node);
          const hasAriaHiddenAttr = hasAriaHidden(node);
          const hasRolePresentationAttr = hasRolePresentation(node);
          const hasRoleNoneAttr = hasRoleNone(node);
          const hasAlternativeAttrs = hasAlternativeAttributesForDecorative(node);
          
          // Déterminer si l'image est décorative
          // Pour les images <img>, vérifier aussi l'attribut alt
          const altValue = getAttributeValue(node, 'alt');
          const hasAlt = hasAttribute(node, 'alt');
          const hasNonEmptyAlt = hasAlt && altValue !== '';
          
          const isDecorative = hasEmptyAltAttr || hasAriaHiddenAttr || hasRolePresentationAttr || hasRoleNoneAttr || (!hasNonEmptyAlt && !hasAlternativeAttrs);
          
          if (isDecorative) {
            // Image décorative : vérifier le marquage correct
            if (!hasEmptyAltAttr && !hasAriaHiddenAttr && !hasRolePresentationAttr && !hasRoleNoneAttr) {
              context.report({
                node,
                messageId: 'test1-img-decorative-missing-marking',
                data: {
                  rgaaCriterion: '1.2.1',
                  documentationUrl
                }
              });
              return;
            }
            
            // Vérifier qu'il n'y a pas d'attributs d'alternative
            if (hasAlternativeAttrs) {
              context.report({
                node,
                messageId: 'test1-img-decorative-has-alternative',
                data: {
                  rgaaCriterion: '1.2.1',
                  documentationUrl
                }
              });
              return;
            }
          }
        }

        // Test 2 : Zones <area> décoratives (sans href)
        if (isAreaTag(node) && !hasHrefAttribute(node)) {
          const hasEmptyAltAttr = hasEmptyAlt(node);
          const hasAriaHiddenAttr = hasAriaHidden(node);
          const hasRolePresentationAttr = hasRolePresentation(node);
          const hasRoleNoneAttr = hasRoleNone(node);
          const hasAlternativeAttrs = hasAlternativeAttributesForDecorative(node);
          
          // Déterminer si la zone est décorative
          // Pour les zones <area>, vérifier aussi l'attribut alt
          const altValue = getAttributeValue(node, 'alt');
          const hasAlt = hasAttribute(node, 'alt');
          const hasNonEmptyAlt = hasAlt && altValue !== '';
          
          const isDecorative = hasEmptyAltAttr || hasAriaHiddenAttr || hasRolePresentationAttr || hasRoleNoneAttr || (!hasNonEmptyAlt && !hasAlternativeAttrs);
          
          if (isDecorative) {
            // Zone décorative : vérifier le marquage correct
            if (!hasEmptyAltAttr && !hasAriaHiddenAttr && !hasRolePresentationAttr && !hasRoleNoneAttr) {
              context.report({
                node,
                messageId: 'test2-area-decorative-missing-marking',
                data: {
                  rgaaCriterion: '1.2.2',
                  documentationUrl
                }
              });
              return;
            }
            
            // Vérifier qu'il n'y a pas d'attributs d'alternative
            if (hasAlternativeAttrs) {
              context.report({
                node,
                messageId: 'test2-area-decorative-has-alternative',
                data: {
                  rgaaCriterion: '1.2.2',
                  documentationUrl
                }
              });
              return;
            }
          }
        }

        // Test 3 : Images objet <object type="image/..."> décoratives
        if (isObjectImage(node)) {
          const hasAriaHiddenAttr = hasAriaHidden(node);
          const hasAlternativeAttrs = hasAlternativeAttributesForDecorative(node);
          const hasContent = hasTextContent(node);
          
          // Déterminer si l'objet est décoratif
          const isDecorative = hasAriaHiddenAttr || !hasAlternativeAttrs;
          
          if (isDecorative) {
            // Objet décoratif : vérifier le marquage correct
            if (!hasAriaHiddenAttr) {
              context.report({
                node,
                messageId: 'test3-object-decorative-missing-aria-hidden',
                data: {
                  rgaaCriterion: '1.2.3',
                  documentationUrl
                }
              });
              return;
            }
            
            // Vérifier qu'il n'y a pas d'attributs d'alternative
            if (hasAlternativeAttrs) {
              context.report({
                node,
                messageId: 'test3-object-decorative-has-alternative',
                data: {
                  rgaaCriterion: '1.2.3',
                  documentationUrl
                }
              });
              return;
            }
            
            // Vérifier qu'il n'y a pas de contenu alternatif
            if (hasContent) {
              context.report({
                node,
                messageId: 'test3-object-decorative-has-content',
                data: {
                  rgaaCriterion: '1.2.3',
                  documentationUrl
                }
              });
              return;
            }
          }
        }

        // Test 4 : Images vectorielles <svg> décoratives
        if (isSvgTag(node)) {
          const hasAriaHiddenAttr = hasAriaHidden(node);
          const hasAlternativeAttrs = hasAlternativeAttributesForDecorative(node);
          const hasTitleDesc = hasSvgTitleOrDescWithContent(node);
          const hasTitleAttr = hasTitleAttribute(node);
          
          // Déterminer si le SVG est décoratif
          // Pour les SVG, vérifier aussi les éléments <title>
          const hasAnyAlternative = hasAlternativeAttrs || hasTitleDesc;
          const isDecorative = hasAriaHiddenAttr || !hasAnyAlternative;
          
          if (isDecorative) {
            // SVG décoratif : vérifier le marquage correct
            if (!hasAriaHiddenAttr) {
              context.report({
                node,
                messageId: 'test4-svg-decorative-missing-aria-hidden',
                data: {
                  rgaaCriterion: '1.2.4',
                  documentationUrl
                }
              });
              return;
            }
            
            // Vérifier qu'il n'y a pas d'attributs d'alternative
            if (hasAlternativeAttrs) {
              context.report({
                node,
                messageId: 'test4-svg-decorative-has-alternative',
                data: {
                  rgaaCriterion: '1.2.4',
                  documentationUrl
                }
              });
              return;
            }
            
            // Vérifier qu'il n'y a pas d'éléments title/desc
            if (hasTitleDesc) {
              context.report({
                node,
                messageId: 'test4-svg-decorative-has-title-desc',
                data: {
                  rgaaCriterion: '1.2.4',
                  documentationUrl
                }
              });
              return;
            }
            
            // Vérifier qu'il n'y a pas d'attribut title
            if (hasTitleAttr) {
              context.report({
                node,
                messageId: 'test4-svg-decorative-has-title-attr',
                data: {
                  rgaaCriterion: '1.2.4',
                  documentationUrl
                }
              });
              return;
            }
          }
        }

        // Test 5 : Images bitmap <canvas> décoratives
        if (isCanvasTag(node)) {
          const hasAriaHiddenAttr = hasAriaHidden(node);
          const hasAlternativeAttrs = hasAlternativeAttributesForDecorative(node);
          const hasContent = hasTextContent(node);
          
          // Déterminer si le canvas est décoratif
          // Pour les Canvas, vérifier aussi le contenu alternatif
          const hasCanvasContent = hasTextContent(node);
          const hasAnyAlternative = hasAlternativeAttrs || hasCanvasContent;
          const isDecorative = hasAriaHiddenAttr || !hasAnyAlternative;
          
          if (isDecorative) {
            // Canvas décoratif : vérifier le marquage correct
            if (!hasAriaHiddenAttr) {
              context.report({
                node,
                messageId: 'test5-canvas-decorative-missing-aria-hidden',
                data: {
                  rgaaCriterion: '1.2.5',
                  documentationUrl
                }
              });
              return;
            }
            
            // Vérifier qu'il n'y a pas d'attributs d'alternative
            if (hasAlternativeAttrs) {
              context.report({
                node,
                messageId: 'test5-canvas-decorative-has-alternative',
                data: {
                  rgaaCriterion: '1.2.5',
                  documentationUrl
                }
              });
              return;
            }
            
            // Vérifier qu'il n'y a pas de contenu alternatif
            if (hasContent) {
              context.report({
                node,
                messageId: 'test5-canvas-decorative-has-content',
                data: {
                  rgaaCriterion: '1.2.5',
                  documentationUrl
                }
              });
              return;
            }
          }
        }

        // Test 6 : Images embarquées <embed type="image/..."> décoratives
        if (isEmbedImage(node)) {
          const hasAriaHiddenAttr = hasAriaHidden(node);
          const hasAlternativeAttrs = hasAlternativeAttributesForDecorative(node);
          
          // Déterminer si l'embed est décoratif
          const isDecorative = hasAriaHiddenAttr || !hasAlternativeAttrs;
          
          if (isDecorative) {
            // Embed décoratif : vérifier le marquage correct
            if (!hasAriaHiddenAttr) {
              context.report({
                node,
                messageId: 'test6-embed-decorative-missing-aria-hidden',
                data: {
                  rgaaCriterion: '1.2.6',
                  documentationUrl
                }
              });
              return;
            }
            
            // Vérifier qu'il n'y a pas d'attributs d'alternative
            if (hasAlternativeAttrs) {
              context.report({
                node,
                messageId: 'test6-embed-decorative-has-alternative',
                data: {
                  rgaaCriterion: '1.2.6',
                  documentationUrl
                }
              });
              return;
            }
          }
        }
      }
    };
  }
};
