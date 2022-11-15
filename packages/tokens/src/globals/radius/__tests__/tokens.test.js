const radiusTokens = require('../tokens.json');

describe('radius tokens', () => {
  test(': matches snapshot', () => {
    expect(radiusTokens).toMatchSnapshot();
  });
});
