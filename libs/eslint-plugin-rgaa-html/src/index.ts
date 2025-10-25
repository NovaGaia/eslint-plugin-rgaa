const { rgaa1_1 } = require('/Users/renaudheluin/DEV/DEV_NOVAGAIA/eslint-plugin-rgaa/libs/eslint-plugin-rgaa-core/dist/rules/rgaa-1-1');

/**
 * ESLint plugin for RGAA HTML accessibility rules
 */
const plugin = {
  rules: {
    'rgaa-1-1': rgaa1_1
  },
  configs: {
    recommended: {
      plugins: ['rgaa-html'],
      rules: {
        'rgaa-html/rgaa-1-1': 'error'
      }
    }
  }
};

export = plugin;
