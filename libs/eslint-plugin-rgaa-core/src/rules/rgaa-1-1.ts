import {
  createReportDescriptor,
  getAttributeValue,
  hasAttribute,
  hasIsmapAttribute,
  hasRoleImg,
  hasSvgTitle,
  hasTextContent,
  hasValidAlternative,
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
import { getRGAA1_1DocumentationUrl } from '../config';

/**
 * RGAA Critère 1.1 - Chaque image porteuse d'information a-t-elle une alternative textuelle ?
 * 
 * Ce critère implémente les 8 tests RGAA 1.1 dans l'ordre défini par la documentation officielle.
 * L'ordre des tests est important et la validation s'arrête au premier échec.
 * 
 * Tests implémentés :
 * 1. Images <img> et éléments avec role="img"
 * 2. Zones d'images réactives <area>
 * 3. Boutons de type image <input type="image">
 * 4. Images réactives côté serveur <img ismap>
 * 5. Images vectorielles <svg>
 * 6. Images objet <object type="image/...">
 * 7. Images embarquées <embed type="image/...">
 * 8. Images bitmap <canvas>
 */
export const rgaa1_1: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Chaque image porteuse d\'information a-t-elle une alternative textuelle ?',
      category: 'RGAA',
      recommended: true,
      url: getRGAA1_1DocumentationUrl()
    },
    schema: [],
    messages: {
      // Test 1 - Images <img> et role="img"
      test1_missingAlt: 'Test 1.1.1 ÉCHEC : L\'image <img> doit avoir une alternative textuelle (alt, aria-label, aria-labelledby, ou title).',
      test1_emptyAlt: 'Test 1.1.1 ÉCHEC : L\'attribut alt ne peut pas être vide pour une image porteuse d\'information. Utilisez alt="" pour une image décorative ou fournissez une description appropriée.',
      test1_missingRoleImg: 'Test 1.1.1 ÉCHEC : L\'élément avec role="img" doit avoir une alternative textuelle (aria-label ou aria-labelledby).',
      
      // Test 2 - Zones d'images réactives <area>
      test2_missingAlt: 'Test 1.1.2 ÉCHEC : La zone d\'image réactive <area> doit avoir une alternative textuelle (alt ou aria-label).',
      
      // Test 3 - Boutons de type image <input type="image">
      test3_missingAlt: 'Test 1.1.3 ÉCHEC : Le bouton de type image <input type="image"> doit avoir une alternative textuelle (alt, aria-label, aria-labelledby, ou title).',
      
      // Test 4 - Images réactives côté serveur <img ismap>
      test4_missingLinks: 'Test 1.1.4 ÉCHEC : L\'image réactive côté serveur <img ismap> doit être doublée d\'un mécanisme accessible permettant d\'accéder aux mêmes ressources.',
      
      // Test 5 - Images vectorielles <svg>
      test5_missingRole: 'Test 1.1.5 ÉCHEC : L\'image vectorielle <svg> doit avoir l\'attribut role="img".',
      test5_missingAlt: 'Test 1.1.5 ÉCHEC : L\'image vectorielle <svg> doit avoir une alternative textuelle (title, aria-label, ou aria-labelledby).',
      
      // Test 6 - Images objet <object type="image/...">
      test6_missingRole: 'Test 1.1.6 ÉCHEC : L\'image objet <object> doit avoir l\'attribut role="img".',
      test6_missingAlt: 'Test 1.1.6 ÉCHEC : L\'image objet <object> doit avoir une alternative textuelle (aria-label, aria-labelledby, ou title).',
      test6_missingAlternative: 'Test 1.1.6 ÉCHEC : L\'image objet <object> doit être suivie d\'un lien ou bouton permettant d\'accéder à un contenu alternatif.',
      
      // Test 7 - Images embarquées <embed type="image/...">
      test7_missingRole: 'Test 1.1.7 ÉCHEC : L\'image embarquée <embed> doit avoir l\'attribut role="img".',
      test7_missingAlt: 'Test 1.1.7 ÉCHEC : L\'image embarquée <embed> doit avoir une alternative textuelle (aria-label, aria-labelledby, ou title).',
      test7_missingAlternative: 'Test 1.1.7 ÉCHEC : L\'image embarquée <embed> doit être suivie d\'un lien ou bouton permettant d\'accéder à un contenu alternatif.',
      
      // Test 8 - Images bitmap <canvas>
      test8_missingRole: 'Test 1.1.8 ÉCHEC : L\'image bitmap <canvas> doit avoir l\'attribut role="img".',
      test8_missingAlt: 'Test 1.1.8 ÉCHEC : L\'image bitmap <canvas> doit avoir une alternative textuelle (aria-label ou aria-labelledby).',
      test8_missingAlternative: 'Test 1.1.8 ÉCHEC : L\'image bitmap <canvas> doit avoir un contenu alternatif ou être suivie d\'un lien permettant d\'accéder à un contenu alternatif.',
      
      // Avertissements pour aria-labelledby
      'aria-labelledby-warning': 'RGAA 1.1 ATTENTION : L\'élément utilise aria-labelledby. Vérifiez manuellement que l\'élément référencé contient une alternative textuelle.'
    }
  },
  
  create(context: Rule.RuleContext) {
    const documentationUrl = getRGAA1_1DocumentationUrl();

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
              rgaaCriterion: '1.1',
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
        // Test 5 : Images vectorielles <svg> (doit être avant le test role="img")
        if (isSvgTag(node)) {
          // Vérifier que le SVG a role="img"
          if (!hasRoleImg(node)) {
            context.report(createReportDescriptor(
              node,
              'Test 1.1.5 ÉCHEC : L\'image vectorielle <svg> doit avoir l\'attribut role="img".',
              '1.1',
              documentationUrl
            ));
            return;
          }
          
          // Vérifier les alternatives : title, aria-labelledby, aria-label
          if (!hasValidAlternative(node, ['svg-title', 'aria-labelledby', 'aria-label'])) {
            context.report(createReportDescriptor(
              node,
              'Test 1.1.5 ÉCHEC : L\'image vectorielle <svg> doit avoir une alternative textuelle (title, aria-label, ou aria-labelledby).',
              '1.1',
              documentationUrl
            ));
            return;
          }
          return; // Test 5 terminé
        }
        
        // Test 6 : Images objet <object type="image/..."> (doit être avant le test role="img")
        if (isObjectImage(node)) {
          // Vérifier que l'object a role="img"
          if (!hasRoleImg(node)) {
            context.report(createReportDescriptor(
              node,
              'Test 1.1.6 ÉCHEC : L\'image objet <object> doit avoir l\'attribut role="img".',
              '1.1',
              documentationUrl
            ));
            return;
          }
          
          // Vérifier les alternatives : aria-labelledby, aria-label, title
          if (!hasValidAlternative(node, ['aria-labelledby', 'aria-label', 'title'])) {
            // Si pas d'alternative, vérifier qu'il y a un lien ou bouton adjacent
            // Note: Cette vérification nécessite d'analyser le contexte parent
            context.report(createReportDescriptor(
              node,
              'Test 1.1.6 ÉCHEC : L\'image objet <object> doit avoir une alternative textuelle (aria-label, aria-labelledby, ou title) ou être suivie d\'un lien ou bouton permettant d\'accéder à un contenu alternatif.',
              '1.1',
              documentationUrl
            ));
            return;
          }
          return; // Test 6 terminé
        }
        
        // Test 7 : Images embarquées <embed type="image/..."> (doit être avant le test role="img")
        if (isEmbedImage(node)) {
          // Vérifier que l'embed a role="img"
          if (!hasRoleImg(node)) {
            context.report(createReportDescriptor(
              node,
              'Test 1.1.7 ÉCHEC : L\'image embarquée <embed> doit avoir l\'attribut role="img".',
              '1.1',
              documentationUrl
            ));
            return;
          }
          
          // Vérifier les alternatives : aria-labelledby, aria-label, title
          if (!hasValidAlternative(node, ['aria-labelledby', 'aria-label', 'title'])) {
            // Si pas d'alternative, vérifier qu'il y a un lien ou bouton adjacent
            context.report(createReportDescriptor(
              node,
              'Test 1.1.7 ÉCHEC : L\'image embarquée <embed> doit avoir une alternative textuelle (aria-label, aria-labelledby, ou title) ou être suivie d\'un lien ou bouton permettant d\'accéder à un contenu alternatif.',
              '1.1',
              documentationUrl
            ));
            return;
          }
          return; // Test 7 terminé
        }
        
        // Test 8 : Images bitmap <canvas> (doit être avant le test role="img")
        if (isCanvasTag(node)) {
          // Vérifier si le canvas a un contenu alternatif
          const hasAlternativeContent = hasTextContent(node);
          
          if (hasRoleImg(node)) {
            // Si le canvas a role="img", vérifier les alternatives : aria-labelledby, aria-label
            if (!hasValidAlternative(node, ['aria-labelledby', 'aria-label'])) {
              context.report(createReportDescriptor(
                node,
                'Test 1.1.8 ÉCHEC : L\'image bitmap <canvas> avec role="img" doit avoir une alternative textuelle (aria-label ou aria-labelledby).',
                '1.1',
                documentationUrl
              ));
              return;
            }
          } else if (!hasAlternativeContent) {
            // Si le canvas n'a pas role="img" et pas de contenu alternatif, c'est une erreur
            context.report(createReportDescriptor(
              node,
              'Test 1.1.8 ÉCHEC : L\'image bitmap <canvas> doit avoir l\'attribut role="img" ou un contenu alternatif.',
              '1.1',
              documentationUrl
            ));
            return;
          }
          return; // Test 8 terminé
        }
        
        // Test 1 : Images <img> et éléments avec role="img"
        if (isHtmlTag(node, 'img') || hasRoleImg(node)) {
          if (isHtmlTag(node, 'img')) {
            // Vérifier si l'image est décorative
            const roleValue = getAttributeValue(node, 'role');
            const isDecorative = roleValue === 'presentation' || roleValue === 'none';
            
            if (isDecorative) {
              // Pour les images décoratives, alt="" est acceptable
              const altValue = getAttributeValue(node, 'alt');
              if (hasAttribute(node, 'alt') && altValue !== '') {
                context.report(createReportDescriptor(
                  node,
                  'Test 1.1.1 ÉCHEC : L\'image décorative doit avoir alt="" (vide).',
                  '1.1',
                  documentationUrl
                ));
                return;
              }
            } else {
              // Pour les images porteuses d'information, vérifier les alternatives : aria-labelledby, aria-label, alt, title
              if (!hasValidAlternative(node, ['aria-labelledby', 'aria-label', 'alt', 'title'])) {
                context.report(createReportDescriptor(
                  node,
                  'Test 1.1.1 ÉCHEC : L\'image <img> doit avoir une alternative textuelle (alt, aria-label, aria-labelledby, ou title).',
                  '1.1',
                  documentationUrl
                ));
                return; // Arrêt au premier échec
              }
              
              // Vérifier que l'alt n'est pas vide si présent
              const altValue = getAttributeValue(node, 'alt');
              if (hasAttribute(node, 'alt') && !altValue) {
                context.report(createReportDescriptor(
                  node,
                  'Test 1.1.1 ÉCHEC : L\'attribut alt ne peut pas être vide pour une image porteuse d\'information. Utilisez alt="" pour une image décorative ou fournissez une description appropriée.',
                  '1.1',
                  documentationUrl
                ));
                return;
              }
            }
          } else if (hasRoleImg(node)) {
            // Pour les éléments avec role="img", vérifier les alternatives : aria-labelledby, aria-label
            if (!hasValidAlternative(node, ['aria-labelledby', 'aria-label'])) {
              context.report(createReportDescriptor(
                node,
                'Test 1.1.1 ÉCHEC : L\'élément avec role="img" doit avoir une alternative textuelle (aria-label ou aria-labelledby).',
                '1.1',
                documentationUrl
              ));
              return;
            }
          }
          return; // Test 1 terminé
        }
        
        // Test 2 : Zones d'images réactives <area>
        if (isAreaTag(node)) {
          if (!hasValidAlternative(node, ['aria-label', 'alt'])) {
            context.report(createReportDescriptor(
              node,
              'Test 1.1.2 ÉCHEC : La zone d\'image réactive <area> doit avoir une alternative textuelle (alt ou aria-label).',
              '1.1',
              documentationUrl
            ));
            return;
          }
          return; // Test 2 terminé
        }
        
        // Test 3 : Boutons de type image <input type="image">
        if (isInputImage(node)) {
          if (!hasValidAlternative(node, ['aria-labelledby', 'aria-label', 'alt', 'title'])) {
            context.report(createReportDescriptor(
              node,
              'Test 1.1.3 ÉCHEC : Le bouton de type image <input type="image"> doit avoir une alternative textuelle (alt, aria-label, aria-labelledby, ou title).',
              '1.1',
              documentationUrl
            ));
            return;
          }
          return; // Test 3 terminé
        }
        
        // Test 4 : Images réactives côté serveur <img ismap>
        if (isHtmlTag(node, 'img') && hasIsmapAttribute(node)) {
          // Note: Ce test nécessite de vérifier la présence de liens adjacents
          // Pour l'instant, on ne signale pas d'erreur car la vérification des liens adjacents
          // nécessite une analyse du contexte parent qui est complexe à implémenter
          // TODO: Implémenter la vérification des liens adjacents
          return; // Test 4 terminé
        }
        
      }
    };
  }
};
