// .storybook/preview.js
import '@primo/tokens/dist/css/tokens.css';
import '@primo/styles/dist/style.min.css';
import '@primo/components/dist/style.min.css';

export const StoryWrapper = (Story) => (
  <div className='pds-ThemeProvider--primo'>
    <Story />
  </div>
);

export const decorators = [StoryWrapper];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    source: {
      type: 'dynamic',
    },
  },
  options: {
    storySort: {
      order: ['Default'],
    },
  },
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: false,
    },
  },
};
