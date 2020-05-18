/**
 * Given two sorted integer arrays nums1 and nums2,
 * merge nums2 into nums1 as one sorted array.
 * The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n)
to hold additional elements from nums2.
 *
 * nums1 = [1,2,3,0,0,0], m = 3
   nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let result = nums1
  let p1 = 0; let p2 = 0; let i = 0
  let num1 = nums1.splice(0, m)
  console.log(num1)
  while ((p1 < m) || (p2 < n)) {
    if (num1[p1] < nums2[p2]) {
      result[i] = num1[p1]
      p1++
    } else {
      result[i] = nums2[p2]
      p2++
    }
    i++
  }

  return result
}

let num1 = [1, 2, 3, 0, 0, 0]
let num2 = [2, 5, 6]
console.log(merge(num1, 3, num2, 3))
