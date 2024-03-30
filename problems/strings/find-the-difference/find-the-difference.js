/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  if (s.length === 0) {
    return t;
  }

  const sMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (sMap.has(char)) {
      sMap.set(char, sMap.get(char) + 1);
    } else {
      sMap.set(char, 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (sMap.has(char)) {
      const val = sMap.get(char);

      if (val === 1) {
        sMap.delete(char);
      } else {
        sMap.set(char, val - 1);
      }
    } else return char;
  }
};
