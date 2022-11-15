const opacityTokens = require('../tokens.json');

describe('opacity tokens', () => {
  test(': matches snapshot', () => {
    expect(opacityTokens).toMatchSnapshot();
  });
});
