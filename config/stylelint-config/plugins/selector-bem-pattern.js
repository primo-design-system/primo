'use strict';

module.exports = {
  plugins: [require.resolve('stylelint-selector-bem-pattern')],
  rules: {
    'plugin/selector-bem-pattern': {
      preset: 'suit',
      presetOptions: { namespace: 'primo' },
      componentName: '[A-Z]+',
      componentSelectors: {
        initial:
          '^\\.primo-{componentName}(?:-[a-zA-Z0-9]+)?(?:--[a-zA-Z0-9]+)?(?:.is-[a-zA-Z0-9]+)?(?:.has-[a-zA-Z0-9]+)?$',
        combined: '^.+$',
      },
      utilitySelectors: '^.u-(?:[a-z][a-zA-Z0-9]+)?(?:[:a-z]+)?$',
    },
  },
};
