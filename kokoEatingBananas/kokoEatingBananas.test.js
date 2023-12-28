const minEatingSpeed = require('./kokoEatingBananas.js');

describe('minEatingSpeed', () => {
  it('returns 4 for [3,6,7,11] and 8', () => {
    expect(minEatingSpeed([3,6,7,11], 8)).toBe(4);
  });
  it('returns 30 for [30,11,23,4,20] and 5', () => {
    expect(minEatingSpeed([30,11,23,4,20], 5)).toBe(30);
  });
  it('returns 23 for [30,11,23,4,20] and 6', () => {
    expect(minEatingSpeed([30,11,23,4,20], 6)).toBe(23);
  });
});