const kClosest = require('./KClosestPointsToOrigin.js');

describe('kclosest', () => {
  test('Test Case 1', () => {
    const points = [[1, 3], [-2, 2]];
    const k = 1;
    const expected = [[-2, 2]];
    const result = kClosest(points, k);
    expect(result).toEqual(expected);
  });

  test('Test Case 2', () => {
    const points = [[3, 3], [5, -1], [-2, 4]];
    const k = 2;
    const expected = [[3, 3], [-2, 4]];
    const result = kClosest(points, k);
    expect(result).toEqual(expected);
  });
});



