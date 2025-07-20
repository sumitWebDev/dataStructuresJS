function palindrome(num){
    let rev = 0;
    let org = num;
    while(num>0){
        rem = num%10;
        num = Math.floor(num/10);
        rev = (rev*10)+rem
    }
    if(org == rev ) return "Yes" 
    else return "No"

}

console.log(palindrome(121))