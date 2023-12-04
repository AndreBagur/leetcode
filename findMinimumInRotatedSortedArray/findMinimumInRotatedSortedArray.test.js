const findMin = require('./findMinimumInRotatedSortedArray.js');

describe('findMin', () => {
  it('returns 1 for [3,4,5,1,2]', () => {
    expect(findMin([3,4,5,1,2])).toBe(1);
  });
  it('returns 0 for [4,5,6,7,0,1,2]', () => {
    expect(findMin([4,5,6,7,0,1,2])).toBe(0);
  });
  it('returns 11 for [11,13,15,17]', () => {
    expect(findMin([11,13,15,17])).toBe(11);
  });
});