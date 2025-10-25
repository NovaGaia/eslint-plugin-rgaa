const { rgaa1_1 } = require('/Users/renaudheluin/DEV/DEV_NOVAGAIA/eslint-plugin-rgaa/libs/eslint-plugin-rgaa-core/dist/rules/rgaa-1-1');
const { rgaa1_2 } = require('/Users/renaudheluin/DEV/DEV_NOVAGAIA/eslint-plugin-rgaa/libs/eslint-plugin-rgaa-core/dist/rules/rgaa-1-2');

/**
 * ESLint plugin for RGAA HTML accessibility rules
 */
const plugin = {
  rules: {
    'rgaa-1-1': rgaa1_1,
    'rgaa-1-2': rgaa1_2
  },
  configs: {
    recommended: {
      plugins: ['rgaa-html'],
      rules: {
        'rgaa-html/rgaa-1-1': 'error',
        'rgaa-html/rgaa-1-2': 'error'
      }
    }
  }
};

export = plugin;
