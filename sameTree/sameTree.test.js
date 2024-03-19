const { isSameTree, TreeNode } = require('./sameTree.js')

describe('isSameTree', () => {
  test('returns true for two identical trees', () => {
    const input1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

    const input2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

    const output = true;

    expect(isSameTree(input1, input2)).toBe(output);
  });

  test('returns false for two mirror image but different trees', () => {
    const input1 = new TreeNode(1, new TreeNode(2));

    const input2 = new TreeNode(1, null, new TreeNode(2));

    const output = false;

    expect(isSameTree(input1, input2)).toBe(output);
  });

  test('returns false for trees of different order', () => {
    const input1 = new TreeNode(1, new TreeNode(2), new TreeNode(1));

    const input2 = new TreeNode(1, new TreeNode(1), new TreeNode(2));

    const output = false;

    expect(isSameTree(input1, input2)).toBe(output);
  });

  test('returns true for two empty trees', () => {
    const input1 = null;

    const input2 = null;

    const output = true;

    expect(isSameTree(input1, input2)).toBe(output);
  });
});

