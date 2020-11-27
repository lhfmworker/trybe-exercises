let stars=5;
let square=' ';
let symbol='*';
let position=stars;

for (let i=0;i<stars;i+=1){
    for (let j=0;j<stars;j+=1){
        if (j<position){
            square=square+' ';
        } else{
            square=square+symbol;
        }
    }
   console.log (square);
   square=' ';
   position -= 1;
}