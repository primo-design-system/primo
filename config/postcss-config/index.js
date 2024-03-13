module.exports = {
  modules: false,
  extract: true,
  syntax: require('postcss-scss'),
  plugins: [
    require('postcss-reporter')({ clearReportedMessages: true }),
    require('postcss-preset-env')({
      stage: 0,
      browsers: 'last 2 versions',
      features: {
        'color-mod-function': { unresolved: 'ignore' },
        'custom-properties': false,
        'focus-visible-pseudo-class': false,
        'is-pseudo-class': false
      }
    }),
    require('postcss-sort-media-queries')({
      sort: 'mobile-first',
      configuration: {
        unitlessMqAlwaysFirst: true, // or false
      },
    }),
    require('postcss-discard-comments'),
    require('autoprefixer')(),
  ],
};
