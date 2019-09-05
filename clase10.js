var xocoyotzin = {
    nombre: 'xoco',
    apellido : 'perez',
    edad : 23,
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

function imprimiredad(persona){
    if(persona.edad>17){
        console.log(persona.nombre + ' es mayor de edad')
    }
    else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimiredad(xocoyotzin)