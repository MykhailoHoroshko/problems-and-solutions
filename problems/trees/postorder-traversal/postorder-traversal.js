// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

// Recursion
// function postorderTraversal(A, res = []) {
//   if (!A) {
//     return res;
//   }
//   res = postorderTraversal(A.left, res);
//   res = postorderTraversal(A.right, res);
//   res.push(A.data);

//   return res;
// }

function postorderTraversal(A) {
  const traversal = [];
  const stack = [A];

  while (stack.length) {
    curr = stack.pop();

    traversal.push(curr.data);

    if (curr.left) {
      stack.push(curr.left);
    }

    if (curr.right) {
      stack.push(curr.right);
    }
  }

  return traversal.reverse();
}

module.exports = {
  //param A : root node of tree
  //return a array of integers
  postorderTraversal: postorderTraversal,
};
