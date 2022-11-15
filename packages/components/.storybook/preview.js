import { addParameters } from '@storybook/html';
import '@storybook/addon-console';
import '@primo/tokens/dist/css/tokens.css';
import '@primo/styles/dist/style.min.css';
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

document.body.onload = function () {
  document.body.classList.add(
    'primo pds-ThemeProvider pds-ThemeProvider--primo'
  );
};
