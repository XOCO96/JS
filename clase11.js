var xocoyotzin = {
    nombre: 'xoco',
    apellido : 'perez',
    edad : 22,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirprofesiones(persona){
    console.log(`${persona.nombre} es: `)
    if(persona.ingeniero){
        console.log('ingeniero')
    }
    if(persona.cocinero){
        console.log('cocinero')
    }
    else{
        console.log('no es cocinero')
    }
    if(persona.cantante){
        console.log('cantante')
    }
    if(persona.dj){
        console.log('Dj')
    }
    if(persona.guitarrista){
        console.log('guitarrista')
    }
    if(persona.drone){
        console.log('drone')
    }
}

imprimirprofesiones(xocoyotzin)

const MAYORIA_DE_EDAD=18
function esmayordeedad(persona){
    return persona.edad>=MAYORIA_DE_EDAD
}
function imprimiredad(persona){
    if(esmayordeedad(persona)){
        console.log(persona.nombre + ' es mayor de edad')
    }
    else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimiredad(xocoyotzin)