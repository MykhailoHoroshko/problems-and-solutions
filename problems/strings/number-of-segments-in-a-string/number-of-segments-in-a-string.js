/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  if (s.length === 0) {
    return 0;
  }

  let count = 0;
  let prevEmpty = true;

  for (let i = 0; i < s.length; i++) {
    const el = s[i];

    if (el !== " " && prevEmpty) {
      count++;
      prevEmpty = false;
    } else if (el === " ") {
      prevEmpty = true;
    }
  }

  return count;
};
