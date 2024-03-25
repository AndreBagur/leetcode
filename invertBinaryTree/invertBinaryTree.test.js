const { invertTree, TreeNode } = require('./invertBinaryTree');

describe('invertTree', () => {
  test('inverts a binary tree with multiple nodes', () => {
    /*
          4
         / \
        2   7
       / \ / \
      1  3 6  9
    */

    const root = new TreeNode(4);
    root.left = new TreeNode(2);
    root.right = new TreeNode(7);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(9);

    const invertedRoot = invertTree(root);

    expect(invertedRoot.val).toBe(4);
    expect(invertedRoot.left.val).toBe(7);
    expect(invertedRoot.right.val).toBe(2);
    expect(invertedRoot.left.left.val).toBe(9);
    expect(invertedRoot.left.right.val).toBe(6);
    expect(invertedRoot.right.left.val).toBe(3);
    expect(invertedRoot.right.right.val).toBe(1);
  });

  test('inverts a binary tree with one node', () => {
    const root = new TreeNode(1);

    const invertedRoot = invertTree(root);

    expect(invertedRoot.val).toBe(1);
    expect(invertedRoot.left).toBeNull();
    expect(invertedRoot.right).toBeNull();
  });

  test('returns null for an empty tree', () => {
    const root = null;

    const invertedRoot = invertTree(root);

    expect(invertedRoot).toBeNull();
  });
});