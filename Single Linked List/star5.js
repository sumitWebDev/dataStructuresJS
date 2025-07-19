n = 5

let toggle = '';
for (let i =0;i<5;i++){
    let star = "";
    for(let j=0; j<i+1;j++){
     if ( toggle == 1){
        toggle =0;
     }
     else 
        toggle = 1
    star+= toggle
    }
    console.log(star)
}