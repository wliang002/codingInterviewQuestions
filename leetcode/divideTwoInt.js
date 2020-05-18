/**
 * Given two integers dividend and divisor,
 * divide two integers without using multiplication,
 * division and mod operator.
 *
 * Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.
 *
 * Input: dividend = 10, divisor = 3
Output: 3
 * [-2^31, 2^31 - 1]
 */
// dividend > divisor?
// output is int?
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let largest = Math.pow(2, 31) - 1
  let smallest = -largest - 1

  // edge cases:
  if (divisor === 1) {
    return dividend
  } else if (divisor === -1) {
    // -2147483648 / -1 = 2147483647
    if (dividend === smallest) {
      return largest
    }
    return -dividend
  }

  let x = Math.abs(dividend)
  let y = Math.abs(divisor)
  let result = 0
  // 10 - 3 >=0
  while (x - y >= 0) {
    // dividend contain at least 1 divisor
    let count = 1
    // tmp = 3
    let tmp = y
    // does half of dividend contain divior
    // 5 - 3 >=0
    while ((x >> 1) - tmp >= 0) {
      // tmp = 6  
      tmp = tmp << 1
      // count = 2
      count = count << 1
      console.log(tmp, count, x)
    }
    result += count
    x -= tmp
  }

  return (dividend >0 && divisor <0) || (dividend <0 && divisor > 0) ? -result : result


}
// bitwise OR
// 1 = 00000001
// 2 = 00000010
//     00000100
// << add 0 to right side, push off left dig
// << 1 increasing a num by x2 << 2 increase by x2x2  <<3 x2x2x2
// >> add copy of leftmost bit to left, half the number, round down
// console.log(2 >> 1)

console.log(divide(888, 3))
