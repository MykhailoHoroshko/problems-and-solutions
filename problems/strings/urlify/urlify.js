function urlify(str) {
  let spaceCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === " ") {
      spaceCount++;
    }
  }

  const trueLength = str.length + 2 * spaceCount;

  for (let i = str.length - 1, j = trueLength - 1; i >= 0; i--, j--) {
    if (str[i] === " ") {
      str[j--] = "0";
      str[j--] = "2";
      str[j] = "%";
    } else {
      str[j] = str[i];
    }
  }

  return str;
}

console.log(urlify("Mr John Smith".split("")).join(""));
