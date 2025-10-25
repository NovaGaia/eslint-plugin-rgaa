/**
 * Configuration du plugin RGAA
 */

export interface RGAAConfig {
  documentationBaseUrl: string;
  minAlternativeLength: number;
}

export const defaultRGAAConfig: RGAAConfig = {
  documentationBaseUrl: 'https://novagaia.github.io/eslint-plugin-rgaa',
  minAlternativeLength: 25
};

/**
 * Obtient l'URL de documentation pour un critère donné
 */
export function getCriterionDocumentationUrl(criterion: string, config: RGAAConfig = defaultRGAAConfig): string {
  return `${config.documentationBaseUrl}/rgaa/criteres/${criterion}`;
}

/**
 * Obtient l'URL de documentation pour le critère 1.1
 */
export function getRGAA1_1DocumentationUrl(config: RGAAConfig = defaultRGAAConfig): string {
  return getCriterionDocumentationUrl('1-images/1.1', config);
}

/**
 * Obtient l'URL de documentation pour le critère 1.3
 */
export function getRGAA1_3DocumentationUrl(config: RGAAConfig = defaultRGAAConfig): string {
  return getCriterionDocumentationUrl('1-images/1.3', config);
}

