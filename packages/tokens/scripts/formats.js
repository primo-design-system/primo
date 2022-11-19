import StyleDictionary from 'style-dictionary';
const { createPropertyFormatter, fileHeader } = StyleDictionary.formatHelpers;

StyleDictionary.registerFormat({
  name: 'custom/format/custom-media',
  formatter(dictionary) {
    return dictionary.allProperties
      .filter((prop) => typeof prop.value === 'string')
      .map((prop) => {
        const {
          attributes: { item, type },
          value,
        } = prop;
        const extensionName = `--custom-media-${type}${
          item ? `-${item}` : ''
        }`.trim();

        return `@custom-media ${extensionName} (${type}: ${value});\n`;
      })
      .join('');
  },
});

// format that outputs dark mode variables
StyleDictionary.registerFormat({
  name: 'custom/format/dark-mode',
  formatter(dictionary) {
    return dictionary.allProperties
      .filter((prop) => typeof prop.value === 'string')
      .map((prop) => {
        const {
          attributes: { item, type },
          value,
        } = prop;
        const extensionName = `--dark-mode-${type}${
          item ? `-${item}` : ''
        }`.trim();

        return `${extensionName}: ${value};\n`;
      })
      .join('');
  },
});

['css'].forEach((format) => {
  StyleDictionary.registerFormat({
    name: 'css/variables/pseudo',
    formatter: function ({ dictionary, file, options, selector }) {
      const { allTokens } = dictionary;
      const { outputReferences } = options;

      const prefix = format === 'css' ? `${this.selector || ':root'} {\n` : '';
      const suffix = format === 'css' ? '\n}' : '';

      return (
        fileHeader({ file, commentStyle: format === 'less' && 'short' }) +
        prefix +
        allTokens
          .map(
            createPropertyFormatter({ dictionary, format, outputReferences })
          )
          .join('\n') +
        suffix
      );
    },
  });
});
