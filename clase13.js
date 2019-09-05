var xocoyotzin = {
    nombre: 'xoco',
    apellido : 'perez',
    edad : 12,
    peso : 55
}

console.log(`al inicio del año ${xocoyotzin.nombre} pesa ${xocoyotzin.peso}kg`)

const INCREMENTO_PESO=.2
const aumentopeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO 
for(var i=1; i<=365; i++) {
    var random = Math.random()
    if(random< 0.25) {  
        aumentopeso(xocoyotzin)
    }else if(random<.5){
        adelgazar(xocoyotzin)
    }
}

console.log(`al final del año ${xocoyotzin.nombre} pesa ${xocoyotzin.peso.toFixed(2)}kg`)