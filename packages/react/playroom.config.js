const exampleCode = `
  <Button>Hello World</Button>
`;

module.exports = {
  components: './src/components/index.ts',
  outputPath: './dist/playroom',

  // Optional:
  title: 'Primo Design System',
  widths: [320, 768, 1024],
  port: 9000,
  openBrowser: true,
  paramType: 'search', // default is 'hash'
  frameComponent: './.playroom/FrameComponent.tsx',
  exampleCode: exampleCode,
  baseUrl: '/playroom/',
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: __dirname,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/,
          exclude: /node_modules\/(?!(@primo)\/).*/,
          use: [require.resolve('style-loader'), require.resolve('css-loader')],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.css', '.pcss'],
      modules: ['node_modules'],
    },
  }),
  iframeSandbox: 'allow-scripts',
};
