//2.- Repaso de los template strings
/* forma de concatenar cadenas antigua de javascript */
let putita = 'hola pinche putita';
let cachonda = 'te pones bien cachonda';
let cadena = putita +' '+cachonda+'<br>';
document.write(cadena);

/* concatenando con template string */
let cadena2 = `${putita} ${cachonda}`;
document.write(`imprimiendo con template string ${cadena2} <br>`);

function imp_nombre(cadena) {
    return cadena;
}

document.write(`imprimir cadena desde funcion ${imp_nombre(cadena)}`);


