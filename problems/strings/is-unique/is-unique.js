// function isUnique(str) {
//   const setStr = new Set();

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (setStr.has(char)) {
//       return false;
//     }
//     setStr.add(char);
//   }
//   return true;
// }

function isUnique(str) {
  let checker = 0;

  for (let i = 0; i < str.length; i++) {
    let val = str.charCodeAt(i) - "a".charCodeAt(0);
    if ((checker & (1 << val)) > 0) {
      return false;
    }
    checker |= 1 << val;
  }
  return true;
}

console.log(isUnique("abca"));
console.log(isUnique("abcd"));
