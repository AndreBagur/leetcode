const characterReplacement = require('./longestRepeatingCharacterReplacement.js');

describe('characterReplacement', () => {
  it('returns 4 for for "ABAB" and 2', () => {
    expect(characterReplacement("ABAB", 2)).toBe(4);
  });
  it('returns 4 for "AABABBA" and 1', () => {
    expect(characterReplacement("AABABBA", 1)).toBe(4);
  });
});