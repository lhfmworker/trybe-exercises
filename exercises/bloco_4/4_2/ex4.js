let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somatoria = 0;
let mArit = 0;

for (let index=0; index<numbers.length; index+=1){
    somatoria = somatoria+numbers[index];
}

mArit = somatoria/numbers.length;

console.log(mArit);
if (mArit <= 20){
    console.log('Valor menor ou igual a 20.');
} else {
    console.log('Valor maior que 20.');
}