//repaso de objetos y clonacion de uno

let lapiz = {
    color: "verde",
    trazo: "fino",
    marca: "bic",
    materiales:{
        principal: "plastico",
        secundario: "metal"
    }
}

document.write(lapiz.materiales.secundario);
console.log(lapiz);

//clonacion de un objeto es mejor hacerla con los 3 puntos seguidos , ya que al asignar un objeto de una variable  a otra variable, no se copia en realidad sino solo su referencia, el operador de 3 puntos se llama spread
let lapiz2 = {...lapiz};
lapiz2.color = "rojo";
console.log(lapiz2);