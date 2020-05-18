// Complete the makeAnagram function below.
function makeAnagram(a, b) {

   let miss = 0
   for (let i = 0; i < a.length; i++) {
      if (b.indexOf(a.charAt(i)) === -1) {
         miss++
      } else {
         // remove the letter in b to avoid repeats
         let arr = b.split('')
         let index = b.indexOf(a.charAt(i))
         arr.splice(index, 1)
         b = arr.join('')
      }
   }
   return miss + b.length

}

let a = ''
let b = 'bed'
console.log(makeAnagram(a, b))
console.log(a.length)