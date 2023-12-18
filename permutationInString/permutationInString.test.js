const checkInclusion = require('./permutationInString.js')

describe('checkInclusion', () => {
  it('returns true for "ab" and "eidbaooo"', ()=> {
    expect(checkInclusion("abc", "eidbaooo")).toBe(true);
  });
  it('returns false for "ab" and "eidboaoo"', ()=> {
    expect(checkInclusion("ab", "eidboaoo")).toBe(false);
  });
});