//desesctructuracion de un objeto
const putita = {
    name1: 'putita',
    age: 23,

};

//desestructuracion de un objeto funciona con asignacion de variables o constantes siempre y cuando sea referenciada a una propiedad del objeto
/* const {name1} = putita; */


//cuando una funcion recibe un objeto como parametro, se puede desestructurar el objeto para obtener sus propiedades y manipularlas, en este caso tambien puede recibir parametros opcionales aunque no esten en el objeto que se recive como parametro
const impPersona = ({name1,age,color = "1"})=>{
    //console.log(name1,age,color);
    return ({
        nombre : name1,
        edad : age,
        colorind : color,
        coordenadas : {
            x : 1,
            y : 2
        }
    });
}
//se puede mandar como parametro a una funcion un objeto
console.log( impPersona(putita));

//tambien se puede mandar a desmenuzar una propiedad de una funcion con un objeto como parametro que retorna un objeto
const {nombre} = impPersona(putita);
//asi como asignar a variables a desmenuzar de una funcion que tiene un objeto como parametro y regresa un objeto dentro de otro objeto, de esta forma
const {coordenadas:{x,y}} = impPersona(putita);

console.log(nombre);
console.log(x,y);
