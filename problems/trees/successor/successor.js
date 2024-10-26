function findSuccessor(node) {
  if (!node) {
    return null;
  }

  if (node.right) {
    let snode = node.right;
    while (snode.left) {
      snode = snode.left;
    }
    return snode;
  }

  let snode = node;
  while (snode.parent && snode !== snode.parent.left) {
    snode = snode.parent;
  }
  return snode.parent ? snode.parent : undefined;
}
