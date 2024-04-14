const { LinkedListNode } = require("../common");

function sumListsReverse(head1, head2) {
  let node1 = head1;
  let node2 = head2;
  let m = 0;
  let res = new LinkedListNode();
  let curr = res;

  while (node1 || node2 || m) {
    const val1 = node1 ? parseInt(node1.val || 0, 10) : 0;
    const val2 = node2 ? parseInt(node2.val || 0, 10) : 0;
    const sum = val1 + val2 + m;

    if (sum > 9) {
      curr.val = sum % 10;
      m = 1;
    } else {
      curr.val = sum;
      m = 0;
    }
    if (node1) node1 = node1.next;
    if (node2) node2 = node2.next;

    if (node1 || node2 || m) {
      curr.next = new LinkedListNode();
      curr = curr.next;
    }
  }

  return res;
}

const node = new LinkedListNode(
  5,
  new LinkedListNode(9, new LinkedListNode(7))
);

const node2 = new LinkedListNode(
  5,
  new LinkedListNode(9, new LinkedListNode(3))
);

console.log(JSON.stringify(sumListsReverse(node, node2)));

function sumLists(head1, head2) {
  let node1 = head1;
  let node2 = head2;
  let str1 = "";
  let str2 = "";

  while (node1 || node2) {
    if (node1) {
      str1 += node1.val;
      node1 = node1.next;
    }
    if (node2) {
      str2 += node2.val;
      node2 = node2.next;
    }
  }

  const sum = (parseInt(str1, 10) + parseInt(str2, 10)).toString();
  let head = new LinkedListNode();
  let curr = head;

  for (let i = 0; i < sum.length; i++) {
    curr.val = sum.charAt(i);
    if (i !== sum.length - 1) {
      curr.next = new LinkedListNode();
      curr = curr.next;
    }
  }

  return head;
}

console.log(JSON.stringify(sumLists(node, node2)));
