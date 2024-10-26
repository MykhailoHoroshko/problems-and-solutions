const { TreeNode } = require("../tree-node");

function minimalTree(arr, start = 0, end = arr.length - 1) {
  if (start > end) {
    return null;
  }

  const middle = Math.floor((start + end) / 2);
  const node = new TreeNode(arr[middle]);
  node.left = minimalTree(arr, start, middle - 1);
  node.right = minimalTree(arr, middle + 1, end);
  return node;
}

const head = minimalTree([1, 2, 3, 4, 5, 65]);
console.log(JSON.stringify(head, null, 2));
