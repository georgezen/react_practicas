import { getId} from './import-export';

const promesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const heroeById = getId(1);
        if (typeof(heroeById)  === 'undefined') {
            reject('No se encontro el heroe');
        }else{
            console.table(heroeById);
            resolve(heroeById);
        }
    },2000);
})

promesa.then((heroe)=>{
    console.log(`el heroe es ${heroe.name}`);
    
})
.catch(
    console.warn
);
