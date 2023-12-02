const maxSubArray = require('./maximumSubarray.js')

describe('maxSubArray', () => {
  it('returns 6 for [-2,1,-3,4,-1,2,1,-5,4]', ()=> {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
  });
  it('returns 1 for [1]', ()=> {
    expect(maxSubArray([1])).toBe(1);
  });
  it('returns 23 for [5,4,-1,7,8]', ()=> {
    expect(maxSubArray([5,4,-1,7,8])).toBe(23);
  });
});