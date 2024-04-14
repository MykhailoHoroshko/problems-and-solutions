const { LinkedListNode } = require("../common");

function removeDups(node) {
  let prev = node;
  let curr = node.next;

  if (!curr) {
    return;
  }

  const valueSet = new Set();
  valueSet.add(prev.val);
  while (curr) {
    if (valueSet.has(curr.val)) {
      prev.next = curr.next || null;
    } else {
      valueSet.add(curr.val);
      prev = curr;
    }
    curr = curr.next;
  }
}

function removeDupsWithoutExtraSpace(node) {
  let curr = node;

  if (!curr) {
    return;
  }

  while (curr) {
    findAndRemoveDups(curr);
    curr = curr.next;
  }
}

function findAndRemoveDups(node) {
  let prev = node;
  let curr = node.next;

  while (curr) {
    if (curr.val === node.val) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
}

const node = new LinkedListNode(
  3,
  new LinkedListNode(
    4,
    new LinkedListNode(
      3,
      new LinkedListNode(5, new LinkedListNode(3, new LinkedListNode(1)))
    )
  )
);
removeDupsWithoutExtraSpace(node);
console.log(JSON.stringify(node));
