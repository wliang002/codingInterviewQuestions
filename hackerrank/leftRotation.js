// Complete the rotLeft function below.
function rotLeft(a, d) {
    var unshift = []
    var shift = []
    for(let i=0; i<a.length; i++) {
        
        if (i < d) {
            shift.push(a[i])
        } else {
            unshift.push(a[i])
        }
    }
    return [...unshift, ...shift]


}


var a = [1, 2, 3, 4, 5]
var d = 4

console.log(rotLeft(a, d))