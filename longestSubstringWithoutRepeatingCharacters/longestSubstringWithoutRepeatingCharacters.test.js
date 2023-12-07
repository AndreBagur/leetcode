const lengthOfLongestSubstring = require('./longestSubstringWithoutRepeatingCharacters.js');

describe('lengthOfLongestSubstring', () => {
  it('returns 3 for "abcabcbb"', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });
  it('returns 1 for "bbbbb"', () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });
  it('returns 3 for "pwwkew"', () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });
});