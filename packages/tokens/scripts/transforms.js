import StyleDictionary from 'style-dictionary';
import chroma from 'chroma-js';

StyleDictionary.registerTransform({
  name: 'name/notype',
  type: 'name',
  transformer: ({ path }) => {
    return path
      .filter(
        (segment, i) =>
          segment !== 'base' &&
          // omits the theme name, which is at index 1
          i !== 1
      )
      .join('-');
  },
});

StyleDictionary.registerTransform({
  name: 'size/px',
  type: 'value',
  matcher: ({ attributes }) => {
    return attributes.category === 'size' || attributes.category === 'border-radius' || attributes.category === 'spacing';
  },
  transformer: ({ value }) => `${value}px`,
});

StyleDictionary.registerTransform({
  name: 'size/rem',
  type: 'value',
  matcher: ({ attributes }) => attributes.category === 'font',
  transformer: ({ value }) => `${value}rem`,
});

StyleDictionary.registerTransform({
  name: 'color/figma',
  type: 'value',
  matcher: ({ attributes }) => attributes.category === 'color',
  transformer: ({ value }) => {
    const [r, g, b] = chroma(value.hex).gl();
    return { r, g, b, opacity: value.opacity };
  },
});

StyleDictionary.registerTransform({
  name: 'color/opacity',
  type: 'value',
  matcher: ({ attributes }) => attributes.category === 'color',
  transformer: ({ value }) =>
    chroma(value?.hex).alpha(parseFloat(value?.opacity)).hex(),
});

const colorTransform = (token) => {
  const { value, modify = [] } = token;
  let color = chroma(value);

  modify.forEach(({ type, amount }) => {
    color = color[type](amount);
  });

  return color.hex();
};

StyleDictionary.registerTransform({
  name: 'color/transform',
  type: 'value',
  transitive: true,
  matcher: (token) => token.attributes.category === 'color' && token.modify,
  transformer: colorTransform,
});
