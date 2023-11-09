function lengthOfLastWord(A) {
  let res = 0;
  for (let i = A.length - 1; i > -1; i--) {
    const code = A.charCodeAt(i);
    if (code >= 65 && code <= 122) {
      res++;
    } else if (res > 0) {
      break;
    }
  }
  return res;
}

module.exports = {
  //param A : string
  //return an integer
  lengthOfLastWord: lengthOfLastWord,
};
