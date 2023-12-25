const search = require('./binarySearch.js');

describe('search', () => {
  test('returns 4 for [-1,0,3,5,9,12] and 9', () => {
    expect(search([-1,0,3,5,9,12], 9)).toBe(4);
  });
  test('returns -1 for [-1,0,3,5,9,12] and 2', () => {
    expect(search([-1,0,3,5,9,12], 2)).toBe(-1);
  });
});