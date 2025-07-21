var reverseString = function(s) {
    let last_index = s.length-1;
    let temp;
    for(let i =0; i<s.length;i++){
        if(i < last_index){
            temp = s[i];
            s[i] = s[last_index];
            s[last_index] = temp;
            last_index --;
        }
    }
    return s
};

output = reverseString(["h","e","l","l","o"])
console.log(output)