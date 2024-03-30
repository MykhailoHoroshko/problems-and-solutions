/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Recursive
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = [];
  findPath(root, "", res);
  return res;
};

function findPath(root, currentPath, res) {
  currentPath += root.val;

  if (!root.left && !root.right) {
    res.push(currentPath);
    return;
  }
  if (root.left) {
    findPath(root.left, currentPath + "->", res);
  }
  if (root.right) {
    findPath(root.right, currentPath + "->", res);
  }
}
