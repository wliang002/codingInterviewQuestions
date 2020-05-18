function twoNumberSum(array, targetSum) {
    // Write your code here.
    let map = {}
    // key = numer val=compliment
    for (let i = 0; i < array.length; i++) {
        map[array[i]] = targetSum - array[i]
    }
    let comp = Object.values(map)
    for (let j = 0; j < comp.length; j++) {
        if (map[comp[j]] && map[comp[j]] !== comp[j]) {
            return [map[comp[j]], comp[j]]
        }
    }
    return []
}


let array = [3, 5, -4, 8, 11, 1, -1, 6]
let sum = 10
console.log(twoNumberSum(array, sum))