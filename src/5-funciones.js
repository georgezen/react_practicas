//repaso de las funciones y alguna recomendacion para su declaracion

function name1(nombre){
    return nombre;
}

//otra manera de declarar funciones y con el arrow function

const name2 = (nombre) =>{
    return nombre;
}

const name3 = (nombre,apellido) => `nombre con ${nombre} y ${apellido}`;
//Una manera de retornar un objeto de una funcion sin la palabra reservada return
const name4 = () =>({
    nombre: 'juan',
    apellido:'ramirez'
}
);


console.log(name1("dsds"));
console.log(name2("dsds2"));
console.log(name3("wifi","fibra optica"));
console.log(name4());


const get_user = (nombre) =>({
    id:12,
    name: nombre
});

const usuario = get_user('lucas');
console.log(usuario.name);