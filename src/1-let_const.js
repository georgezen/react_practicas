//repaso de las declaraciones de let y const
let nombre = 'jorge';
document.write(`Hola ${nombre} <br>`);
let edad = 30;
 edad = 20;
 console.log(edad);

 if (true){
     /*scope de bloque, sirve para redeclarar variables que solo se pueden usar dentro del bloque*/
    let nombre = 'perra';
    document.write("console.log de la linea 9 "+nombre);
 }