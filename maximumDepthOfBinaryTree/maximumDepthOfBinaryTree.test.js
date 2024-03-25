const { maxDepth, TreeNode } = require('./maximumDepthOfBinaryTree.js');

describe('maxDepth', () => {
  test('returns 0 for an empty tree', () => {
    const root = null;
    expect(maxDepth(root)).toBe(0);
  });

  test('returns 1 for a tree with only one node', () => {
    const root = new TreeNode(5);
    expect(maxDepth(root)).toBe(1);
  });

  test('returns the correct depth for a tree with multiple nodes', () => {
    /*
          3
         / \
        9  20
          /  \
         15   7
    */

    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    expect(maxDepth(root)).toBe(3);
  });
});
