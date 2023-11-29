const twoSum = require('./twoSum.js');

describe(twoSum, () => {
  it('returns the correct indexes for a valid input', () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
  });
  it('returns the correct indexes for a valid input', () => {
    expect(twoSum([3,2,4], 6)).toEqual([1,2]);
  });
  it('returns the correct indexes for a valid input', () => {
    expect(twoSum([3,3], 6)).toEqual([0,1]);
  });
});