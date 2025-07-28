n = 5
for (let i =0;i<5;i++){
    let star = "";
    for(let j=0; j<i+1;j++){
     if ( (j+1)%2 ===1){
        star += "1"
     }
     else 
        star += "0"
    }
    console.log(star)
}