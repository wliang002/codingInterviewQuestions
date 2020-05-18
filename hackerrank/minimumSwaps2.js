// Complete the minimumSwaps function below.
// function minimumSwaps (arr) {
//   let count = 0
//   for (let i = 0; i < arr.length; i++) {
//     let min = i
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j
//       }
//     }
//     if (i !== min) {
//       swap(arr, i, min)
//       count++
//     }
//   }
//   return count
// }

// function swap (array, i, j) {
//   let temp = array[i]
//   array[i] = array[j]
//   array[j] = temp
// }

// if a number is not in position, find it and swap it with the number in its position
// 7,1,3,2,4
// position 0 should be 1, find 1 and swap 1 with the num at pos 0
function minimumSwaps (arr) {
  let count = 0
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== i + 1) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] === i + 1) {
          let temp = arr[j]
          arr[j] = arr[i]
          arr[i] = temp
          count++
          break
        }
      }
    }
  }
  return count
}

var arr = [2, 3, 4, 1, 5]
var arr2 = [7, 1, 3, 2, 4, 5, 6]
console.log(minimumSwaps(arr))
console.log(minimumSwaps(arr2))
