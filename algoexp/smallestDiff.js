function smallestDifference (arrayOne, arrayTwo) {
  // Write your code here.
  // use hint 1
  // sort array1
  let arrySort = arrayOne.sort(function (a, b) { return a - b })

  let difference = []
  for (let i = 0; i < arrayTwo.length; i++) {
    let diff = getDiff(arrySort, arrayTwo[i])
    difference.push(diff)
  }
  return Math.min(...difference)
}

function getDiff (sorted, num) {
  // bst insert
  let left = 0
  let right = sorted.length - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (sorted[mid] === num) {
      return 0
    } else if (sorted[mid] < num) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  // left is approaching sorted.length, right = lengh -1
  // when left = length, right = length -1 (end of array)
  // means num is larger than last item
  // there's only 1 diff
  if (left === sorted.length) {
    return Math.abs(sorted[right] - num)
  }
  // right is approaching -1, left = 0
  // num is smaller than first item
  else if (right === -1) {
    return Math.abs(sorted[left] - num)
  } else {
    let dif1 = Math.abs(sorted[left] - num)
    let dif2 = Math.abs(sorted[right] - num)
    return dif1 > dif2 ? dif2 : dif1
  }
}

let a1 = [-1, 5, 10, 20, 28, 3]
let a2 = [26, 134, 135, 15, 17]

// getDiff(a1.sort(function (a, b) { return a - b }), 26)
// smallestDifference(a1, a2)
console.log(smallestDifference(a1, a2))
