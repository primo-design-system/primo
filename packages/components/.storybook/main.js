module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-postcss',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-notes/register',
    '@whitespace/storybook-addon-html',
  ],
  framework: '@storybook/html',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
};
