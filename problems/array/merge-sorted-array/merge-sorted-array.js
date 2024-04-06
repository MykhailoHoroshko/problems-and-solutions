/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = nums1.length - 1;

  while (j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
};

let nums1 = [1, 2, 3, 4, 0, 0],
  m = 4,
  nums2 = [5, 6],
  n = 2;
merge(nums1, m, nums2, n);
console.log(nums1);