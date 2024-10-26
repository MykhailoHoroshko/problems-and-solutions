const { TreeNode } = require("../tree-node");

function isBalanced(root) {
  return getHeight(root) !== Number.MIN_VALUE;
}

function getHeight(root) {
  if (!root) {
    return 0;
  }

  let leftHeight = getHeight(root.left);
  if (leftHeight === Number.MIN_VALUE) return Number.MIN_VALUE;
  let rightHeight = getHeight(root.right);
  if (rightHeight === Number.MIN_VALUE) return Number.MIN_VALUE;

  if (Math.abs(leftHeight - rightHeight) > 1) return Number.MIN_VALUE;

  return Math.max(leftHeight, rightHeight) + 1;
}

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);
root.right.left.left = new TreeNode(4);
root.right.left.left.right = new TreeNode(4);

console.log(isBalanced(root));
