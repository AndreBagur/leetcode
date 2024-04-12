const findDuplicate = require('./findTheDuplicateNumber.js');

describe('findDuplicate', () => {
  test('Example 1', () => {
    const nums = [1, 3, 4, 2, 2];
    expect(findDuplicate(nums)).toBe(2);
  });

  test('Example 2', () => {
    const nums = [3, 1, 3, 4, 2];
    expect(findDuplicate(nums)).toBe(3);
  });

  test('Array with two elements', () => {
    const nums = [1, 1];
    expect(findDuplicate(nums)).toBe(1);
  });

  test('Array with multiple elements', () => {
    const nums = [1, 2, 3, 4, 5, 6, 3];
    expect(findDuplicate(nums)).toBe(3);
  });

  test('Array with only one element', () => {
    const nums = [1];
    expect(findDuplicate(nums)).toBe(undefined);
  });
});
