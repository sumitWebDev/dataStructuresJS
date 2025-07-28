var num = -988
count=0;

//Check for number when it is 0
if(num == 0 ) {
    count=1;
}
//Check for negative number
num = Math.abs(num)
while(num>0){
    num = Math.floor(num/10);
    count ++;
}

console.log(count)