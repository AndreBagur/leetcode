const subsets = require('./subsets.js');

describe('subsets', () => {
  test('returns all subsets for [1,2,3]', () => {
    const input = [1, 2, 3];
    const output = subsets(input);
    const expected = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];
    expect(output).toEqual(expect.arrayContaining(expected));
    expect(output.length).toBe(expected.length);
  });

  test('returns all subsets for [0]', () => {
    const input = [0];
    const output = subsets(input);
    const expected = [[], [0]];
    expect(output).toEqual(expect.arrayContaining(expected));
    expect(output.length).toBe(expected.length);
  });

  test('returns all subsets for an empty array', () => {
    const input = [];
    const output = subsets(input);
    const expected = [[]];
    expect(output).toEqual(expect.arrayContaining(expected));
    expect(output.length).toBe(expected.length);
  });

  test('handles array with negative numbers', () => {
    const input = [-1, -2, -3];
    const output = subsets(input);
    const expected = [[], [-1], [-2], [-1, -2], [-3], [-1, -3], [-2, -3], [-1, -2, -3]];
    expect(output).toEqual(expect.arrayContaining(expected));
    expect(output.length).toBe(expected.length);
  });

  test('handles array with 10 elements', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const output = subsets(input);
    // Just checking the count of subsets, which should be 2^n, where n is the array length
    const expectedCount = Math.pow(2, input.length);
    expect(output.length).toBe(expectedCount);
  });
});

