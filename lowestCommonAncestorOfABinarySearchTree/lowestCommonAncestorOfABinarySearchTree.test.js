const { lowestCommonAncestor, TreeNode } = require('./lowestCommonAncestorOfABinarySearchTree.js');

describe('lowestCommonAncestor', () => {
  // Helper function to construct a BST from an array
  const constructBST = (arr) => {
    if (arr.length === 0) return null;
    const root = new TreeNode(arr[0]);
    for (let i = 1; i < arr.length; i++) {
      insertNode(root, arr[i]);
    }
    return root;
  };

  // Helper function to insert a node into BST
  const insertNode = (root, val) => {
    if (val < root.val) {
      if (!root.left) {
        root.left = new TreeNode(val);
      } else {
        insertNode(root.left, val);
      }
    } else {
      if (!root.right) {
        root.right = new TreeNode(val);
      } else {
        insertNode(root.right, val);
      }
    }
  };

  // Test cases
  it('should return the correct LCA for Example 1', () => {
    const root = constructBST([6,2,8,0,4,7,9,null,null,3,5]);
    const p = new TreeNode(2);
    const q = new TreeNode(8);
    expect(lowestCommonAncestor(root, p, q).val).toBe(6);
  });

  it('should return the correct LCA for Example 2', () => {
    const root = constructBST([6,2,8,0,4,7,9,null,null,3,5]);
    const p = new TreeNode(2);
    const q = new TreeNode(4);
    expect(lowestCommonAncestor(root, p, q).val).toBe(2);
  });

  it('should return the correct LCA for Example 3', () => {
    const root = constructBST([2,1]);
    const p = new TreeNode(2);
    const q = new TreeNode(1);
    expect(lowestCommonAncestor(root, p, q).val).toBe(2);
  });
});
