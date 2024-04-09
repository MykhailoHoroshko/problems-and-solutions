function isPalindromPermutation(str) {
  const charMap = new Map();

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (char !== " ") {
      charMap.set(char, charMap.get(char) + 1 || 1);
    }
  }

  let hasOdd = false;
  for (const [char, count] of charMap) {
    if (count % 2 !== 0 && hasOdd) {
      return false;
    }
    hasOdd = count % 2 !== 0;
  }

  return true;
}

console.log(isPalindromPermutation("Tact Coa"));
