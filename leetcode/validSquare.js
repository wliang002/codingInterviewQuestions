// pureStorage
// All the input integers are in the range [-10000, 10000].
// A valid square has four equal sides with positive length and four equal angles (90-degree angles).
// Input points have no order.
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
    let types = {}
    let pts = [[p1, p2], [p1, p3], [p1, p4], [p2, p3], [p2, p4], [p3, p4]]
    for (let i = 0; i < pts.length; i++) {
        let length = calcDist(pts[i][0], pts[i][1])
        if (types[length]) {
            types[length] = types[length] + 1
        } else {
            types[length] = 1
        }
    }
   
    let lengthArray = Object.values(types)
    return lengthArray.length === 2 && (lengthArray[0] === 2 || lengthArray[0] === 4)
}

function calcDist(p1, p2) {
    let x1 = p1[0]
    let x2 = p2[0]
    let y1 = p1[1]
    let y2 = p2[1]

    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)
}
let p1 = [0, 0]
let p2 = [1, 1]
let p3 = [1, 0]
let p4 = [0, 1]
console.log(validSquare(p1, p2, p3, p4))
let p5 = [0, 0]
let p6 = [5, 0]
let p7 = [5, 4]
let p8 = [0, 4]
console.log(validSquare(p5, p6, p7, p8))
