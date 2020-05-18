/**
 * mplement pow(x, n), which calculates x raised to the power n (xn).
 * 
 */

var myPow = function(x, n) {
    if (n < 0) {
        x = 1/x
        n = -n
    }
    let res = 1
    let product = x
    for(let i = n; i > 0;i = Math.floor(i/2)) {
        if( (i % 2) === 1) {
            res = res * product
        }
        product = product * product
    }  
    return res
};

console.log(myPow(2,10))