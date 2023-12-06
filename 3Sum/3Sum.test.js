const threeSum = require('./3Sum.js');

describe('threeSum', () => {
  it('returns [[-1,-1,2],[-1,0,1]] for [-1,0,1,2,-1,-4]', () => {
    expect(threeSum([-1,0,1,2,-1,-4])).toEqual([[-1,-1,2],[-1,0,1]]);
  });
  it('returns [] for [0,1,1]', () => {
    expect(threeSum([0,1,1])).toEqual([]);
  });
  it('returns [[0,0,0]] for [0,0,0]', () => {
    expect(threeSum([0,0,0])).toEqual([[0,0,0]]);
  });
});