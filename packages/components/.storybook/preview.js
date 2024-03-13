import { addParameters, configure } from '@storybook/html';
import '@storybook/addon-console';
import '@primo/tokens/dist/css/tokens.css';
import '@primo/styles/dist/style.min.css?v2';
import '../dist/style.css';

addParameters({
  a11y: {
    config: {},
    options: {},
  },
  layout: 'fullscreen',
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  },
});

// Adds Primo classes to the root iframe to enable theming and styles
document.body.onload = function () {
  document.body.classList.add('primo');
};
