const { levelOrder, TreeNode } = require('./binaryTreeLevelOrderTraversal.js');

describe('levelOrder', () => {
  // Helper function to construct a binary tree from an array
  const constructTree = (arr) => {
    if (arr.length === 0) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let index = 1;
    while (index < arr.length) {
      const current = queue.shift();
      const leftVal = arr[index++];
      if (leftVal !== null && leftVal !== undefined) {
        current.left = new TreeNode(leftVal);
        queue.push(current.left);
      }
      const rightVal = arr[index++];
      if (rightVal !== null && rightVal !== undefined) {
        current.right = new TreeNode(rightVal);
        queue.push(current.right);
      }
    }
    return root;
  };

  // Test cases
  it('should return the correct level order for Example 1', () => {
    const root = constructTree([3,9,20,null,null,15,7]);
    expect(levelOrder(root)).toEqual([[3],[9,20],[15,7]]);
  });

  it('should return the correct level order for Example 2', () => {
    const root = constructTree([1]);
    expect(levelOrder(root)).toEqual([[1]]);
  });

  it('should return the correct level order for Example 3', () => {
    const root = constructTree([]);
    expect(levelOrder(root)).toEqual([]);
  });
});
