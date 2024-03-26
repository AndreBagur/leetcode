const { diameterOfBinaryTree, TreeNode } = require('./diameterOfBinaryTree');

describe('diameterOfBinaryTree', () => {
  test('Example 1', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);

    expect(diameterOfBinaryTree(root)).toBe(3);
  });

  test('Example 2', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);

    expect(diameterOfBinaryTree(root)).toBe(1);
  });
});
