function stringCompression(str) {
  if (!str) {
    return str;
  }

  let count = 1;
  let compressedStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      compressedStr += str[i] + count;
      count = 1;
    } else {
      count++;
    }
  }

  return compressedStr.length >= str.length ? str : compressedStr;
}

console.log(stringCompression("aaaaaaaaabcd"));
