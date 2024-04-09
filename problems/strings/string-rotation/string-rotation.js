function isSubstring(s1, s2) {
  // method to check if s2 is substring of s1
}

function stringRotation(s1, s2) {
  if (s1.length === 0) {
    return false;
  }

  if (s1.length !== s2.length) {
    return false;
  }

  return isSubstring(s1 + s1, s2);
}

console.log(stringRotation("waterbottle", "erbottlewat"));
