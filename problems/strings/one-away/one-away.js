function oneAway(str1, str2) {
  if (str1 === str2) {
    return true;
  }

  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  let index1 = 0,
    index2 = 0,
    isReplaced = false;

  while (index1 < str1.length && index2 < str2.length) {
    if (str1[index1] !== str2[index2]) {
      if (isReplaced) {
        return false;
      }
      isReplaced = true;
    }
    index1++;
    index2++;
  }

  return true;
}

console.log(oneAway("pale", "bake"));
