let silla = {
    material:'madera',
    color:'morada',
    altura:90,
    calidad:{
        dureza:'alta'
    }
};

const datosSilla = (silla)=>{
    let {material,altura} = silla;
    let {calidad:{dureza}} = silla;
    let {color} = silla;

    return datosConfirmar(material,altura,dureza,color);

    
}

const datosConfirmar = (material,altura,dureza,color)=>{
 
    return `La silla es de ${material} y su altura es de ${altura} su dureza es ${dureza},la puta silla es de color ${color}`;
    
}

console.log(datosSilla(silla)); 


