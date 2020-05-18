/**
 * Given a matrix of m x n elements (m rows, n columns),
 *  return all elements of the matrix in spiral order.
 * Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
 *
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// layer by layer
var spiralOrder = function (matrix) {
  let ans = []
  if (matrix.length === 0) {
    return ans
  }
  let r0 = 0; let r1 = matrix.length - 1
  let c0 = 0; let c1 = matrix[0].length - 1
  while (r0 <= r1 && c0 <= c1) {
    for (let col = c0; col <= c1; col++) {
      ans.push(matrix[r0][col])
    }
    // add each row's last item
    for (let row = r0 + 1; row <= r1; row++) {
      ans.push(matrix[row][c1])
    }
    if (r0 < r1 && c0 < c1) {
      for (let c = c1 - 1; c > c0; c--) {
        ans.push(matrix[r1][c])
      }
      for (let r = r1; r > r0; r--) {
        ans.push(matrix[r][c0])
      }
    }
    r0++
    r1--
    c0++
    c1--
  }
  return ans
}
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ]
  console.log(spiralOrder(matrix))