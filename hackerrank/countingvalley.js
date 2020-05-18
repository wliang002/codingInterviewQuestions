function countingValleys(n, s) {
    let valley=0;
    let sealevel=0;
    for(let i=0; i<n; i++) {
        if(s.charAt(i)==='D') {
            sealevel--;        
        } else {
            sealevel++;
            // only check if it's sealevel when coming up
            if(sealevel===0){
                valley++;
            }
        }
    }
    return valley;

}