const { LinkedListNode } = require("../../linked-lists/common");
const { TreeNode } = require("../tree-node");

function getListOfDepths(root) {
  const depths = [];

  if (!root) {
    return depths;
  }

  search(root, 0, depths);

  return depths.map((layer) => layer[0]);
}

function search(node, depth, depths) {
  if (node === null) {
    return;
  }

  if (depths[depth]) {
    depths[depth][1].next = new LinkedListNode(node.value);
    depths[depth][1] = depths[depth][1].next;
  } else {
    const newNode = new LinkedListNode(node.value);
    depths[depth] = [newNode, newNode];
  }

  search(node.left, depth + 1, depths);
  search(node.right, depth + 1, depths);
}

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

const res = getListOfDepths(root);
console.log(JSON.stringify(res, null, 2));
