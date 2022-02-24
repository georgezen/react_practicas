import {getPromise} from './9-promesas.js';
import retorArray from './destrcut_array';
//console.log(getPromise(1));

 const asincronia = async () => {
    console.log( await getPromise(1));
    console.log('hola');
}

asincronia();



const [a,b,c,d,funk] = retorArray('perra');
console.log(a,b,c,d);
funk(); 




    
