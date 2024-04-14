const { LinkedListNode } = require("../common");

function intersection(head1, head2) {
  const nodeSet = new Set();

  let node1 = head1;

  while (node1) {
    nodeSet.add(node1);
    node1 = node1.next;
  }

  let node2 = head2;

  while (node2) {
    if (nodeSet.has(node2)) {
      return node2;
    }
    node2 = node2.next;
  }
}

const tail = new LinkedListNode(
  1,
  new LinkedListNode(2, new LinkedListNode(3))
);
const head1 = new LinkedListNode(4, new LinkedListNode(5, tail));
const head2 = new LinkedListNode(
  7,
  new LinkedListNode(8, new LinkedListNode(9, tail))
);

console.log(intersection(head1, head2));
