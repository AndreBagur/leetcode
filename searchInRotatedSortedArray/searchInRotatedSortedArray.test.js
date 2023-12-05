const search = require('./searchInRotatedSortedArray.js')

describe('search', () => {
  it('returns 4 for [4,5,6,7,0,1,2]', () => {
    expect(search([4,5,6,7,0,1,2])).toBe(4);
  });
  it('returns -1 for [4,5,6,7,0,1,2]', () => {
    expect(search([4,5,6,7,0,1,2])).toBe(-1);
  });
  it('returns -1 for [1]', () => {
    expect(search([1])).toBe(-1);
  });
});