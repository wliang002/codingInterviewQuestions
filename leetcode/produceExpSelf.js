/**
 *Given an array nums of n integers where n > 1,
 return an array output such that output[i]
 is equal to the product of all the elements of nums except nums[i].

Example:
Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).
 */

 /**
  * 1. empty ans, answer[i] would contain the product 
  * of all the numbers to the left of i
  * 2.use a variable to keep track of the running 
  * product of elements to the right and we keep updating the
  * ans[i] = ans[i] *r
  */
var productExceptSelf = function (nums) {
  let ans = []
  ans[0] = 1
  // product of all the num to the left of i
  // input [4,5,1,8,2] this is [1,4,20,20,160]
  for (let i = 1; i < nums.length; i++) {
    ans[i] = nums[i - 1] * ans[i - 1]
  }
  // calc prod at right side
  let rightProd = 1
  // [160 * 1, 20 * 2,  ]
  // rightProd 1, 1 * 2, 1*2*8 ...
  for (let j = nums.length - 1; j >= 0; j--) {
    ans[j] = ans[j] * rightProd
    rightProd *= nums[j]
  }
  return ans
}


