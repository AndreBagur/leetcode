const { isValidBST, TreeNode } = require('./validateBinarySearchTree.js');

describe('isValidBST', () => {
    test('Valid BST - Example 1', () => {
        // Constructing the tree [2,1,3]
        const root = new TreeNode(2);
        root.left = new TreeNode(1);
        root.right = new TreeNode(3);
        expect(isValidBST(root)).toBe(true);
    });

    test('Invalid BST - Example 2', () => {
        // Constructing the tree [5,1,4,null,null,3,6]
        const root = new TreeNode(5);
        root.left = new TreeNode(1);
        root.right = new TreeNode(4);
        root.right.left = new TreeNode(3);
        root.right.right = new TreeNode(6);
        expect(isValidBST(root)).toBe(false);
    });
});
