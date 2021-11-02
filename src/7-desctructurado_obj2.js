let persona = {
    nombre: "Juan",
    edad: 23,
    domicilio:{
        calle: "Calle falsa 123",
        numExt: "123"
    }
}

let {domicilio:{calle, numExt}} = persona;
console.log("impresion de deconstruccion de objeto dentro de objeto");
console.log(calle,`el numero ext es ${numExt}` );


const persona2 = ({nombre,edad,pajas =3})=>{
    return ({
        nombre2:nombre,
        edad2:edad,
        pajin:pajas
    })
}

const imprimePersona = persona2(persona);
const {pajin} = persona2(persona);
console.log("impresion de deconstruccion de objeto a traves de una funcion que recibe un objeto como parametro");
console.log(imprimePersona);
console.log(pajin);