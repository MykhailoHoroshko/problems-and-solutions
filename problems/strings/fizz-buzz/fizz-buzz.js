/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const answ = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answ[i - 1] = "FizzBuzz";
    } else if (i % 3 === 0) {
      answ[i - 1] = "Fizz";
    } else if (i % 5 === 0) {
      answ[i - 1] = "Buzz";
    } else {
      answ[i - 1] = i.toString();
    }
  }
  return answ;
};
