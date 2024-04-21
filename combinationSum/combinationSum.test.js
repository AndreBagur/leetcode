const combinationSum = require('./combinationSum.js');

describe('combinationSum', () => {
  test('finds combinations that sum up to target 7', () => {
    const candidates = [2,3,6,7];
    const target = 7;
    const expected = [[2,2,3], [7]];
    const result = combinationSum(candidates, target);
    // We sort the arrays to ensure the order of elements doesn't affect the test outcome
    const sortedResult = result.map(arr => arr.sort((a, b) => a - b));
    expect(sortedResult).toEqual(expect.arrayContaining(expected));
  });

  test('finds combinations that sum up to target 8', () => {
    const candidates = [2,3,5];
    const target = 8;
    const expected = [[2,2,2,2], [2,3,3], [3,5]];
    const result = combinationSum(candidates, target);
    const sortedResult = result.map(arr => arr.sort((a, b) => a - b));
    expect(sortedResult).toEqual(expect.arrayContaining(expected));
  });

  test('returns empty array when target cannot be achieved', () => {
    const candidates = [2];
    const target = 1;
    const expected = [];
    const result = combinationSum(candidates, target);
    expect(result).toEqual(expected);
  });

  test('handles single candidate that can be used multiple times to meet target', () => {
    const candidates = [4];
    const target = 12;
    const expected = [[4, 4, 4]];
    const result = combinationSum(candidates, target);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  test('returns empty array when candidates are empty', () => {
    const candidates = [];
    const target = 7;
    const expected = [];
    const result = combinationSum(candidates, target);
    expect(result).toEqual(expected);
  });

  test('handles large target with multiple combinations', () => {
    const candidates = [2, 3, 5];
    const target = 15;
    // Testing for the count only, assuming the function's correctness for specific combinations
    const result = combinationSum(candidates, target);
    expect(result.length).toBeGreaterThan(0);
  });
});
