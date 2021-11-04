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