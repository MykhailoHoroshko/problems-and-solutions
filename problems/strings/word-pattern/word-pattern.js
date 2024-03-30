/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const strs = s.split(" ");

  if (pattern.length !== strs.length) {
    return false;
  }

  const mapWord = new Map();
  const setWord = new Set();

  for (let i = 0; i < pattern.length; i++) {
    if (mapWord.has(pattern[i])) {
      if (mapWord.get(pattern[i]) !== strs[i]) {
        return false;
      }
    } else if (setWord.has(strs[i])) {
      return false;
    } else {
      mapWord.set(pattern[i], strs[i]);
      setWord.add(strs[i]);
    }
  }

  return true;
};

let res = wordPattern("abba", "dog dog dog dog");
console.log(res);
