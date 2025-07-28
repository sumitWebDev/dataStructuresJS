n = 5
for (let i =n;i>0;i--){
    let star = "";
    let space ="";
    for(let j=0; j<i-1;j++){
        space+=' '
    }
   
    for(let k=0; k<(n-i)+1;k++){
        space+='*'
    } 
    console.log(space)
}