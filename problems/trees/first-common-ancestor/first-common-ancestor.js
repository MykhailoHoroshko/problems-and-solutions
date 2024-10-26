function firstCommonAncestor(head, node1, node2) {
  if (!head) {
    throw new Error("Head is not defined");
  }
  const leftFirst = hasDescedant(head.left, node1);
  const rightSecond = hasDescedant(head.right, node2);

  if (leftFirst && rightSecond) {
    return head;
  }

  if (leftFirst) {
    return firstCommonAncestor(head.left, node1, node2);
  }
  if (rightSecond) {
    return firstCommonAncestor(head.right, node1, node2);
  }
}

function hasDescedant(head, node) {
  if (!head) {
    return false;
  }
  if (head === node) {
    return true;
  }

  return hasDescedant(head.left, node) || hasDescedant(head.right, node);
}
