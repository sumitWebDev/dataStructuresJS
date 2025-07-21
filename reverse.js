/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let org = x;
    if(x<0) {x=Math.abs(x)}
    let rev = 0;
    let count = 0;
    while(x > 0){
        rem = x%10;
        x=Math.floor(x/10);
        rev = (rev*10) + rem
    }
    if(rev>(Math.pow(2,31)-1) || rev< (-Math.pow(2, 31))) return 0
    return (org<0 ? -rev : rev)
};
