/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let m = 0;
  const startCode = "0".charCodeAt(0);
  let res = "";

  for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
    const el1 = num1[num1.length - i - 1] || "0";
    const el2 = num2[num2.length - i - 1] || "0";
    const int1 = el1.charCodeAt(0) - startCode;
    const int2 = el2.charCodeAt(0) - startCode;
    const sum = int1 + int2 + m;

    if (sum > 9) {
      res = (sum - 10).toString() + res;
      m = 1;
    } else {
      res = sum.toString() + res;
      m = 0;
    }
  }

  return m > 0 ? m + res : res;
};

console.log(addStrings("1", "9"));
