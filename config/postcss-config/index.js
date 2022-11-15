module.exports = {
  modules: false,
  extract: true,
  syntax: require('postcss-scss'),
  plugins: [
    require('postcss-reporter')({ clearReportedMessages: true }),
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'color-mod-function': { unresolved: 'ignore' },
        'custom-properties': false,
      },
    }),
    require('postcss-sort-media-queries')({
      sort: 'mobile-first',
      configuration: {
        unitlessMqAlwaysFirst: true, // or false
      },
    }),
    require('autoprefixer')(),
  ],
};
