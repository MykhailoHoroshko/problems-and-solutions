function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  if (str1 === str2) {
    return true;
  }

  const strMap = new Map();

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (strMap.has(char)) {
      strMap.set(char, strMap.get(char) + 1);
    } else {
      strMap.set(char, 1);
    }
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];

    if (!strMap.has(char)) {
      return false;
    }

    strMap.set(char, strMap.get(char) - 1);
    if (strMap.get(char) === 0) {
      strMap.delete(char);
    }
  }

  return true;
}

console.log(checkPermutation("abc", "bca"));
console.log(checkPermutation("abcd", "bca1"));
