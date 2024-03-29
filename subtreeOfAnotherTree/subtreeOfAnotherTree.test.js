const { isSubtree, TreeNode } = require('./subtreeOfAnotherTree.js');

describe('isSubtree', () => {
  // Example 1: root = [3,4,5,1,2], subRoot = [4,1,2]
  test('Example 1: Subtree exists', () => {
      // Constructing the trees
      const root = new TreeNode(3);
      root.left = new TreeNode(4);
      root.right = new TreeNode(5);
      root.left.left = new TreeNode(1);
      root.left.right = new TreeNode(2);

      const subRoot = new TreeNode(4);
      subRoot.left = new TreeNode(1);
      subRoot.right = new TreeNode(2);

      expect(isSubtree(root, subRoot)).toBe(true);
  });

  // Example 2: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
  test('Example 2: Subtree does not exist', () => {
      // Constructing the trees
      const root = new TreeNode(3);
      root.left = new TreeNode(4);
      root.right = new TreeNode(5);
      root.left.left = new TreeNode(1);
      root.left.right = new TreeNode(2);
      root.left.right.left = new TreeNode(0);

      const subRoot = new TreeNode(4);
      subRoot.left = new TreeNode(1);
      subRoot.right = new TreeNode(2);

      expect(isSubtree(root, subRoot)).toBe(false);
  });
});


