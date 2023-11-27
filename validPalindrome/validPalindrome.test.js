const isPalindrome = require('./validPalindrome.js')

describe('isPalindrome', () => {
  it('handles a common palindrome', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  })
  it('handles non-palindromes', () => {
    expect(isPalindrome('race a car')).toBe(false);
  })
  it('handles an empty string', () => {
    expect(isPalindrome(' ')).toBe(true);
  })
})