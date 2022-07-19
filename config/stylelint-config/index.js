'use strict';

module.exports = {
  extends: [
    require.resolve('stylelint-config-standard'),
    require.resolve('stylelint-no-unsupported-browser-features'),
    require.resolve('stylelint-config-idiomatic-order'),
    require.resolve('stylelint-config-suitcss'),
    require.resolve('stylelint-config-standard-scss'),
    require.resolve('./plugins/a11y'),
    require.resolve('./plugins/prettier'),
    require.resolve('./plugins/scss'),
    require.resolve('./plugins/selector-bem-pattern'),
  ],
  rules: {
    'selector-class-pattern': null,
    'function-whitespace-after': null,
    'no-eol-whitespace': null,
    'string-quotes': 'single',
    'prettier/prettier': true,
    'order/properties-order': null,
    'scss/no-global-function-names': null,
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
      },
    ],
  },
  ignoreFiles: [
    'build',
    'build/*',
    'node_modules',
    'umd',
    'dist',
    'dist/*',
    'lib',
    'lib/*',
    'es',
  ],
};
