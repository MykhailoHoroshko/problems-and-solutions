const { LinkedListNode } = require("../common");

function loopDetection(head) {
  const nodeSet = new Set();

  let curr = head;

  while (curr) {
    if (nodeSet.has(curr)) {
      return curr;
    }
    nodeSet.add(curr);
    curr = curr.next;
  }
}

const head = new LinkedListNode(1);
head.next = new LinkedListNode(2, new LinkedListNode(3, head));

console.log(loopDetection(head).val);
