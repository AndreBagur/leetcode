const maxArea = require('./containerWithMostWater.js')

describe('maxArea', () => {
  it('should return 49 for [1,8,6,2,5,4,8,3,7]', () => {
    expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49);
  })
  it('should return 1 for [1,1]', () => {
    expect(maxArea([1,1])).toBe(1);
  })
})