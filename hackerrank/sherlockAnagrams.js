// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    let count = 0
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
        
        }
    }

}

function anagram(s1, s2) {
    if (s1.length !== s2) {
        return false
    }

   for (let i = 0; i < s1; i++) {
       if (s1.indexOf(s2.charAt(i)) === -1) {
            return false
       }
   }
   
   return true
}  


var s = 'cdcd'
console.log(sherlockAndAnagrams(s))

console.log(anagram('abc', 'cba'))
console.log(anagram('adbc', 'ccba'))