function stringRotation(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return false;
  let x = "",
    y = "";

  for (let i = 0; i < s1.length; i++) {
    let index = s2.indexOf(s1[i]);

    if (index !== -1) {
      while (index < s2.length) {
        ++index;

        if (s1[i] === s2[index]) {
          ++i;
          x += s1[i];
        }
      }

      x = x + s2.slice(0, index);
    }
  }

  console.log(x, s1);
  return x === s1;
}

console.log(stringRotation("waterbottle", "erbottlewat"));
