/**
 *Given an integer array nums, find the contiguous subarray
 (containing at least one number) which has the largest sum
 and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
 */

/**
  * The problem to find sum or maximum or minimum in an entire array or in a fixed-size sliding window could be solved by the dynamic programming (DP) approach in linear time.

There are two standard DP approaches suitable for arrays:

Constant space one. Move along the array and modify the array itself.

Linear space one. First move in the direction left->right, then in the direction right->left. Combine the results. Here is an example.

Let's use here the first approach since one could modify the array to
track the current local maximum sum at this given point.

Next step is to update the global maximum sum, knowing the local one
log(n) constant space

  */

// can the array be modified?
// if yes then, no, make a copy
var maxSubArray = function (nums) {
  let max = nums[0]
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1]
    }
    max = Math.max(nums[i], max)
  }
  return max
}

let nums = [-1, -1, -2, -2]

console.log(maxSubArray(nums))
