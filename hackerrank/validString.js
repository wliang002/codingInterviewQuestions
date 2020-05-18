// Complete the isValid function below.
function isValid (s) {
  var map = {}
  for (let i = 0; i < s.length; i++) {
    if (map[s.charAt(i)]) {
      map[s.charAt(i)] = map[s.charAt(i)] + 1
    } else {
      map[s.charAt(i)] = 1
    }
  }
  var count = Object.values(map).sort()
  console.log(count)
  var trend = count[0]
  var dif = 0
  for (let j = 1; j < count.length; j++) {
    if (count[j] !== trend) {
      if (j === 1) {
        trend = count[j]
        // edge case, delete first item, the remaining items must be the same
        // [ 1, 2, 2, 2, 2, 3 ]
        dif += 1
      } else if (count[j] - 1 === trend) {
        dif += 1
      } else {
        // difference greater than 1
        return 'NO'
      }
    }
    if (dif > 1) {
      return 'NO'
    }
  }
  return 'YES'
}

var s1 = 'xxxaabbccrry'
var s2 = 'abcdefghhgfedecba'
console.log(isValid(s1))
console.log(isValid(s2))
