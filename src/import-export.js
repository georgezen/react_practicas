/* para importar codigo de otro archivo es necesario igualarlo al nombre de la variable o constante del cual se hace referencia, asi como en la desestructuracion de objetos, esto en caso de importar varias cosas de un 
mismo arcchivo */
import { heroes/* ,perras */} from './data/putas.js';


/* console.log(heroes);
console.log(perras('perra')); */

//metodo find es para encontrar un elemento en un arreglo de objetos por algun parametro del cual retorna un valor coincidente
export const getId = (id)=>{
    return heroes.find(heroes => heroes.id === id);
};

//metodo filter es para encontrar un elemento en un arreglo de objetos por algun parametro del cual se regresan varios valores coincidentes
export const getOwner = (owner)=>{
    return heroes.filter((heroes) => heroes.owner === owner);
};
/* console.log(`Èl objeto impreso es`);
console.log(getId(2));
console.log(getOwner('Marvel')); */