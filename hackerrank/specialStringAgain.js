// Complete the substrCount function below.
function substrCount (n, s) {
  var count = n
  var letter = s.charAt(0)
  var countL = 0
  var kind = 1
  for (let i = 1; i < n - 1; i++) {
    if (letter === s.charAt(i + 1)) {
      countL++
    } else {
      letter
    }
  }
}

var s = abcbaba
var n = 7
console.log(substrCount(n, s))
