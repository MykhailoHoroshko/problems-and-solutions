const { LinkedListNode } = require("../common");

function removeMiddleNode(node) {
  let prev = node;
  let curr = node.next;

  while (curr) {
    prev.val = curr.val;
    if (curr.next) {
      prev = curr;
    }
    curr = curr.next;
  }
  prev.next = null;
}

const node = new LinkedListNode(
  3,
  new LinkedListNode(4, new LinkedListNode(5, new LinkedListNode(6)))
);

const head = new LinkedListNode(1, new LinkedListNode(2, node));
removeMiddleNode(node);
console.log(JSON.stringify(head));
