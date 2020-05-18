/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  let allPoints = []
  let ans = []
  for (let i = 0; i < points.length; i++) {
    let map = {}
    let dist = distance(points[i])
    map['dist'] = dist
    map['point'] = points[i]
    allPoints.push(map)
  }

  // sort the array of obj base on dist
  // Arrays. sort(Object[]) is based on the TimSort algorithm,
  // giving us a time complexity of O(n log(n)). In short, TimSort makes use of the Insertion sort and the MergeSort algorithms.
  allPoints.sort((a, b) => (a.dist > b.dist) ? 1 : -1)

  for (let j = 0; j < K; j++) {
    ans.push(allPoints[j].point)
  }

  return ans
}


function distance (point) {
  let x = point[0]
  let y = point[1]
  return x * x + y * y
}

let points = [[0, 1], [1, 0], [2, 4], [1, 4]]
let k = 2

console.log(kClosest(points, k))
