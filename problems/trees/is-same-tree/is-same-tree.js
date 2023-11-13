// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

function isSameTree(A, B) {
  if (A === null && B === null) {
    return 1;
  }
  if ((A === null && B !== null) || (A !== null && B === null)) {
    return 0;
  }

  if (A.data === B.data) {
    const left = isSameTree(A.left, B.left);
    const right = isSameTree(A.right, B.right);

    if (left === 1 && right === 1) {
      return 1;
    }
  }

  return 0;
}

module.exports = {
  //param A : root node of tree
  //param B : root node of tree
  //return an integer
  isSameTree: isSameTree,
};
