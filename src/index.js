import {getPromise} from './9-promesas.js';

//console.log(getPromise(1));

 const asincronia = async () => {
    console.log( await getPromise(1));
    console.log('hola');
}

asincronia();




    
