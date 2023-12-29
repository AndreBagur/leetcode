const searchMatrix = require('./searchA2DMatrix.js');

describe('searchMatrix', () => {
  test('returns true for [[1,3,5,7],[10,11,16,20],[23,30,34,60]] and 3', () => {
    expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)).toBe(true);
  });
  test('returns false for [[1,3,5,7],[10,11,16,20],[23,30,34,60]] and 13', () => {
    expect(search([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)).toBe(false);
  });
});