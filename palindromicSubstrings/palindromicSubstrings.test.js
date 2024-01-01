const countSubstrings = require('./palindromicSubstrings.js')

describe('countSubstrings', () => {
  it('returns 3 for "abc"', ()=> {
    expect(countSubstrings("abc")).toBe(3);
  });
  it('returns 6 for "aaa"', ()=> {
    expect(countSubstrings("aaa")).toBe(6);
  });
});