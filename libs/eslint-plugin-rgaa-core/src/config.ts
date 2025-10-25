/**
 * Configuration du plugin RGAA
 */

export interface RGAAConfig {
  documentationBaseUrl: string;
}

export const defaultRGAAConfig: RGAAConfig = {
  documentationBaseUrl: 'https://novagaia.github.io/eslint-plugin-rgaa'
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

