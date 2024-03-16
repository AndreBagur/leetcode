const reverse = require('./reverseInteger.js')

describe('reverse', () => {
  it('reverses a positive number', () => {
    expect(reverse(123)).toBe(321);
  });

  it('reverses a negative number', () => {
    expect(reverse(-123)).toBe(-321);
  });

  it('reverses a number with trailing zeros', () => {
    expect(reverse(120)).toBe(21);
  });

  it('returns 0 if the reversed number is outside the 32-bit integer range', () => {
    expect(reverse(2147483647)).toBe(0);
    expect(reverse(-2147483648)).toBe(0);
  });
});
