const breakpointTokens = require('../tokens.json');

describe('breakpoint tokens', () => {
  test(': matches snapshot', () => {
    expect(breakpointTokens).toMatchSnapshot();
  });
});
