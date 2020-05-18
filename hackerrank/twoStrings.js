// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    let map = {}
    for (let i=0; i<s1.length; i++) {   
        map[s1.charAt(i)] = 'y'
    }
    
    for (let j=0; j<s2.length; j++) {
        if(map[s2.charAt(j)]) {
            return 'YES'
        } 
    }
    return 'NO'
}


var s1 = 'hi'
var s2 = 'world'
console.log(twoStrings(s1,s2))

var s3 = 'hello'
var s4 = 'world'
console.log(twoStrings(s3,s4))