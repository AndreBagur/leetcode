const countSubstrings = require('./palindromicSubstrings.js')

describe('countSubstrings', () => {
  it('returns 3 for "abc"', ()=> {
    expect(countSubstrings("abc")).toBe(2);
  });
  it('returns 6 for "aaa"', ()=> {
    expect(maxSubArray("aaa")).toBe(6);
  });
});