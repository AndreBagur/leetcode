const isValid = require('./validParentheses.js')



describe('valid parentheses', () => {
  it('handles a basic string', () => {
    expect(isValid('()')).toBe(true);
  })
  it('handles strings with different brackets', () => {
    expect(isValid('()[]{}')).toBe(true);
  })
  it('handles invalid parentheses', () => {
    expect(isValid('(]')).toBe(false);
  })
})