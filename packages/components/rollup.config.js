import sass from 'sass';
import postcss from 'rollup-plugin-postcss';
import * as postcssConfig from '@primo/postcss-config';

export default [
  // CSS Output
  {
    input: 'index.scss',
    output: {
      file: 'dist/style.css',
      format: 'es',
    },
    plugins: [
      postcss({
        ...postcssConfig,
        preprocessor: (content, id) =>
          new Promise((resolve, _reject) => {
            const result = sass.renderSync({ file: id });
            resolve({ code: result.css.toString() });
          }),
      }),
    ],
  },

  // Minified CSS Output
  {
    input: 'index.scss',
    output: {
      file: 'dist/style.min.css',
      format: 'es',
    },
    plugins: [
      postcss({
        ...postcssConfig,
        preprocessor: (content, id) =>
          new Promise((resolve, _reject) => {
            const result = sass.renderSync({ file: id });
            resolve({ code: result.css.toString() });
          }),
        plugins: [
          require('cssnano')({
            preset: 'default',
            autoprefixer: true,
            discardComments: { removeAll: true },
          }),
        ],
      }),
    ],
  },
];
