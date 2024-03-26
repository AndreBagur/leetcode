const { goodNodes, TreeNode } = require('./countGoodNodesInBinaryTree');

describe('goodNodes', () => {
  test('Example 1', () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(1);
    root.right = new TreeNode(4);
    root.left.left = new TreeNode(3);
    root.right.left = new TreeNode(1);
    root.right.right = new TreeNode(5);

    expect(goodNodes(root)).toBe(4);
  });

  test('Example 2', () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.left.right.left = new TreeNode(2);

    expect(goodNodes(root)).toBe(3);
  });

  test('Example 3', () => {
    const root = new TreeNode(1);
    expect(goodNodes(root)).toBe(1);
  });
});

