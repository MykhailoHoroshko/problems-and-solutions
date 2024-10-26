const { TreeNode } = require("../tree-node");

function validateBST(root, min = null, max = null) {
  if (root === null) {
    return true;
  }

  if (min !== null && root.value <= min) {
    return false;
  }
  if (max !== null && root.value > max) {
    return false;
  }

  return (
    validateBST(root.left, min, root.value) &&
    validateBST(root.right, root.value, max)
  );
}

const root = new TreeNode(20);
root.left = new TreeNode(10);
root.right = new TreeNode(30);
// root.left.left = new TreeNode(1);
root.left.right = new TreeNode(15);
// root.right.left = new TreeNode(5);
// root.right.right = new TreeNode(7);

console.log(validateBST(root));
