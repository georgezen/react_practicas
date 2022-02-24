let arra1 = [1,2,3];

let [uno,dos,tres] = arra1;
console.log(uno,dos,tres);

const imprimeArray = ([one,tow,three])=>{

    return([
        one,
        tow,
        three
    ]);
};

console.log(imprimeArray(arra1)); 

const retorArray = (valor) => {
    return [valor,2,3,4,()=>{console.log('hola')}];
}

export default retorArray;