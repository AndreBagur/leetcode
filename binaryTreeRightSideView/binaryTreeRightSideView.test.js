const { rightSideView, TreeNode } = require('./binaryTreeRightSideView.js');

describe('rightSideView', () => {
  test('should return an empty array for an empty tree', () => {
    const root = null;
    expect(rightSideView(root)).toEqual([]);
  });

  test('should return the root value for a tree with only one node', () => {
    const root = new TreeNode(5);
    expect(rightSideView(root)).toEqual([5]);
  });

  test('should return the correct right side view for a tree with multiple nodes', () => {
    // Constructing the following binary tree:
    //       1
    //     /   \
    //    2     3
    //     \     \
    //      5     4
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.right = new TreeNode(5);
    root.right.right = new TreeNode(4);

    expect(rightSideView(root)).toEqual([1, 3, 4]);
  });

  test('should return the correct right side view for a tree with multiple nodes', () => {
    // Constructing the following binary tree:
    //       1
    //     /   \
    //    2     3
    //   / \   / \
    //  4   5 6   7
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);

    expect(rightSideView(root)).toEqual([1, 3, 7]);
  });
});