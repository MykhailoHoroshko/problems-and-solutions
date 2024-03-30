/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length === 0) {
    return true;
  }
  if (s.length > t.length) {
    return false;
  }
  if (s === t) {
    return true;
  }

  let str = t;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    let currIndex = str.indexOf(char);

    if (currIndex === -1) {
      return false;
    }
    str = str.substring(currIndex + 1);
  }

  return true;
};

console.log(isSubsequence("aaaaaa", "bbaaaa"));
