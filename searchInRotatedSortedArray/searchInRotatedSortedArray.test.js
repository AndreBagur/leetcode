const search = require('./searchInRotatedSortedArray.js')

describe('search', () => {
  test('Example 1', () => {
    const nums = [4, 5, 6, 7, 0, 1, 2];
    const target = 0;
    expect(search(nums, target)).toBe(4);
  });

  test('Example 2', () => {
    const nums = [4, 5, 6, 7, 0, 1, 2];
    const target = 3;
    expect(search(nums, target)).toBe(-1);
  });

  test('Example 3', () => {
    const nums = [1];
    const target = 0;
    expect(search(nums, target)).toBe(-1);
  });

  test('Array with multiple elements, target at the beginning', () => {
    const nums = [4, 5, 6, 7, 0, 1, 2];
    const target = 4;
    expect(search(nums, target)).toBe(0);
  });

  test('Array with multiple elements, target at the end', () => {
    const nums = [4, 5, 6, 7, 0, 1, 2];
    const target = 2;
    expect(search(nums, target)).toBe(6);
  });

  test('Array with multiple elements, target not in array', () => {
    const nums = [4, 5, 6, 7, 0, 1, 2];
    const target = 8;
    expect(search(nums, target)).toBe(-1);
  });

  test('Array with multiple elements, single element, target present', () => {
    const nums = [1];
    const target = 1;
    expect(search(nums, target)).toBe(0);
  });

  test('Array with multiple elements, single element, target not present', () => {
    const nums = [1];
    const target = 2;
    expect(search(nums, target)).toBe(-1);
  });
});