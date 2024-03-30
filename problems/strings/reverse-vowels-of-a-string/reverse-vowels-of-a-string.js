/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let l = 0,
    r = s.length - 1,
    strs = s.split("");
  const vovels = ["a", "e", "i", "o", "u"];

  while (l < r) {
    while (!vovels.includes(strs[l].toLowerCase())) {
      if (l >= r) {
        break;
      }
      l++;
    }
    while (!vovels.includes(strs[r].toLowerCase())) {
      if (r <= l) {
        break;
      }
      r--;
    }

    if (r !== l) {
      swap(strs, l++, r--);
    }
  }

  return strs.join("");
};

function swap(s, l, r) {
  const tmp = s[l];
  s[l] = s[r];
  s[r] = tmp;
}

const res = reverseVowels("aA");
console.log(res);
