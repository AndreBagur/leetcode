const search = require('./searchInRotatedSortedArray.js')

describe('search', () => {
  it('returns the index 4 for [4,5,6,7,0,1,2] and target 0', () => {
    expect(search([4,5,6,7,0,1,2], 0)).toBe(4);
  });
  it('returns -1 for [4,5,6,7,0,1,2] and target 3', () => {
    expect(search([4,5,6,7,0,1,2], 3)).toBe(-1);
  });
  it('returns -1 for [1] and target 0', () => {
    expect(search([1], 0)).toBe(-1);
  });
});