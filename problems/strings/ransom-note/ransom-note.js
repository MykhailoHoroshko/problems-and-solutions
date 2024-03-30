/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }

  const magazineMap = new Map();

  for (let i = 0; i < magazine.length; i++) {
    const char = magazine[i];
    if (magazineMap.has(char)) {
      magazineMap.set(char, magazineMap.get(char) + 1);
    } else {
      magazineMap.set(char, 1);
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    if (magazineMap.has(char)) {
      const value = magazineMap.get(char);

      if (value === 1) {
        magazineMap.delete(char);
      } else {
        magazineMap.set(char, value - 1);
      }
    } else return false;
  }

  return true;
};

console.log(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi"));
