const longestPalindrome = require('./longestPalindromicSubstring.js')

describe('longestPalindrome', () => {
  it('returns "bab" for "babad"', () => {
    expect(longestPalindrome("babad")).toBe("bab");
  });
  it('returns "bb" for "cbbd"', () => {
    expect(longestPalindrome("cbbd")).toBe("bb");
  })
});