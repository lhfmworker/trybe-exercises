let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
let info2 = {
    personagem:'Tio Patinhas',
    origem:'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota:'O último MacPatinhas',
    recorrente: 'Sim',
}

console.log('Seja bem-vinda, ' + info.personagem);
info['recorrente']='Sim';
console.log(info);
for (let key in info){
    console.log(key);
}
for (let key in info){
    console.log(info[key]);
}
for (let key in info2){
    console.log(info2[key]);
}