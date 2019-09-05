var xocoyotzin = {
    nombre: 'xoco',
    apellido : 'perez',
    edad : 12,
    peso : 55
}

console.log(`al inicio del año ${xocoyotzin.nombre} pesa ${xocoyotzin.peso}kg`)

const INCREMENTO_PESO=.2
const DIAS_dEL_AÑO=365

const aumentopeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO 
const comemucho =() => Math.random() < 0.3
const realizardeporte = () => Math.random() < 0.4 

const META = xocoyotzin.peso - 3
var dias =0

while(xocoyotzin.peso > META){
    
    if(comemucho()){
        aumentopeso(xocoyotzin)
    }
    if(realizardeporte()){
        adelgazar(xocoyotzin)
    }
    dias += 1
}

console.log(`pasaron ${dias} para  que ${xocoyotzin.nombre} baje 3kg`)