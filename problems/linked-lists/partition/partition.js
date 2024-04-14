const { LinkedListNode } = require("../common");

function partition(head, val) {
  let before = null;
  let after = null;
  let curr = head;
  let target = null;
  let newHead = null;

  while (curr) {
    if (val < curr.val) {
      // add to after
      const tmp = curr.next;
      curr.next = null;
      if (after) {
        curr.next = after;
      }
      after = curr;
      curr = tmp;
    } else if (val > curr.val) {
      // add to before
      const tmp = curr.next;
      curr.next = null;
      if (before) {
        before.next = curr;
      } else {
        newHead = curr;
      }
      before = curr;
      curr = tmp;
    } else {
      target = curr;
      curr = curr.next;
    }
  }
  if (before) {
    before.next = target;
  }
  target.next = after;

  return newHead || target;
}

const node = new LinkedListNode(
  6,
  new LinkedListNode(
    5,
    new LinkedListNode(
      4,
      new LinkedListNode(3, new LinkedListNode(2, new LinkedListNode(1)))
    )
  )
);

console.log(JSON.stringify(partition(node, 4)));
