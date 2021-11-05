import { getId} from './import-export';

//generacion de una funcion que es una promesa
export const getPromise = (id) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const heroeById = getId(id);
            if (typeof(heroeById)  === 'undefined') {
                reject('No se encontro el heroe');
            }else{
                console.table(heroeById);
                resolve(heroeById);
            }
        },2000);
    })
}


getPromise().then((heroe)=>{
    console.log(`el heroe es ${heroe.name}`);
    
})
.catch(
    console.warn
);
