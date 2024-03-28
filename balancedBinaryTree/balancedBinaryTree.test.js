const { isBalanced, TreeNode } = require('./balancedBinaryTree.js');

describe('isBalanced', () => {
    test('Balanced Tree - Example 1', () => {
        // Constructing the balanced tree [3,9,20,null,null,15,7]
        const root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);
        expect(isBalanced(root)).toBe(true);
    });

    test('Unbalanced Tree - Example 2', () => {
        // Constructing the unbalanced tree [1,2,2,3,3,null,null,4,4]
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(2);
        root.left.left = new TreeNode(3);
        root.left.right = new TreeNode(3);
        root.left.left.left = new TreeNode(4);
        root.left.left.right = new TreeNode(4);
        expect(isBalanced(root)).toBe(false);
    });

    test('Empty Tree - Example 3', () => {
        // Empty tree
        expect(isBalanced(null)).toBe(true);
    });
});
