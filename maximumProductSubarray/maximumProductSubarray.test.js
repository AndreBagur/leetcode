const maxProduct = require('./maximumProductSubarray.js')

describe('maxProduct', () => {
  it('returns 6 for [2,3,-2,4]', () => {
    expect(maxProduct[2,3,-2,4]).toBe(6);
  });
  it('returns 0 for [-2,0,-1]', () => {
    expect(maxProduct[-2,0,-1]).toBe(0);
  });
});