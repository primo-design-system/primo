import StyleDictionary from 'style-dictionary';

const transforms = [
  'attribute/cti',
  'name/cti/kebab',
  'time/seconds',
  'content/icon',
  'size/px',
  'size/rem',
  'color/opacity',
  'color/transform',
  'color/hsl',
];

const web = [
  {
    source: [`src/globals/**/*.json`],

    transform: {
      'color/css': Object.assign({}, StyleDictionary.transform[`color/css`], {
        transitive: true,
      }),
    },

    platforms: {
      styles: {
        transforms,
        buildPath: 'dist/',
        files: [
          {
            destination: 'css/tokens.css',
            format: 'css/variables/pseudo',
            selector: ':root',
            options: { showFileHeader: false, outputReferences: true },
          },
          {
            destination: 'scss/tokens.scss',
            format: 'scss/variables',
            options: { showFileHeader: false, outputReferences: true },
          },
          {
            destination: 'less/tokens.less',
            format: 'less/variables',
            options: { showFileHeader: false, outputReferences: true },
          },
          {
            destination: 'css/custom-media.css',
            format: 'custom/format/custom-media',
            filter: { attributes: { category: 'media' } },
          },
          {
            destination: `json/tokens.json`,
            format: `json/flat`,
          },
        ],
      },
    },
  },
];

export default [...web];
