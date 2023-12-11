const isAnagram = require("./validAnagram.js")

describe('isAnagram', () => {
  it('returns true for "anagram" "nagagram"', () => {
    expect(isAnagram("anagram", "nagagram").toBe(true));
  });
  it('returns false for "rat" and "car"', () => {
    expect(isAnagram("rat", "car").toBe(false));
  });
}):