import { Rule } from 'eslint';

export interface RGAAContext {
  node: any;
  report: (descriptor: Rule.ReportDescriptor) => void;
  getSourceCode: () => any;
  options: any[];
}

export interface RGAARule {
  name: string;
  description: string;
  category: 'error' | 'warning' | 'suggestion';
  severity: 'error' | 'warn' | 'off';
  rgaaCriterion: string;
  documentationUrl?: string;
  check: (context: RGAAContext) => void;
}

export interface RGAARuleConfig {
  [ruleName: string]: 'error' | 'warn' | 'off';
}

export interface RGAAPluginConfig {
  rules: RGAARuleConfig;
  settings?: {
    [key: string]: any;
  };
}

