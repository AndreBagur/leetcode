const reverse = require('./reverseInteger.js')

describe('reverse', () => {
  it('reverses a number', () => {
    expect(reverse(123)).toBe(321);
  })
  it('handles negative numbers', () => {
    expect(reverse(-123)).toBe(-321);
  })
  it('handles numbers with trailing zeros', () => {
    expect(reverse(120)).toBe(21);
  })
})