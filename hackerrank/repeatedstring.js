// Complete the repeatedString function below.
function repeatedString (s, n) {
  if (s.includes('a')) {
    // substring 'a' out
    let numOfa = s.match(/a/g).length
    // number of repeats of s
    let repeats = Math.floor(n / s.length)
    var count = numOfa * repeats
    // the over hanging bit of string after repeats
    var left = s.substring(0, n - s.length * repeats)

    if (left.includes('a')) {
      return count + left.match(/a/g).length
    } else {
      return count
    }
  } else {
    return 0
  }
}

let s = 'ceebbcb'
let n = 817723
console.log(repeatedString(s, n))
