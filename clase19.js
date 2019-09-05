
//      filtrar datos de un array

var xoco = {
    nombre: 'xocoyotzin',
    apellido : 'lopez',
    altura : 1.65,
}
var ed = {
    nombre: 'eduardo',
    apellido : 'perez',
    altura : 1.56
}
var ldy = {
    nombre: 'lodensy',
    apellido : 'alone',
    altura : 1.12,
}
var shy = {
    nombre: 'shyrako',
    apellido : 'takamoto',
    altura : 2.12,
}
var  xe= {
    nombre: 'xoxed',
    apellido : 'LoPe',
    altura : 2.32,
}

/* const esAlta =(persona) => {                                 // a
    return persona.altura > 1.8                     
} */
//const esAlta =persona => persona.altura > 1.8                 // b

const esAlta =({altura}) => altura > 1.8                        // c. a,b y c son lo mismo


var personas = [xoco, ed, ldy, shy, xe]

var personasaltas = personas.filter(esAlta)

console.log(personasaltas)

/* var convertiralturas = persona => {
    persona.altura *= 100
    return persona
} */

/* var convertiralturas = persona => {
    return{ 
    ...persona,                                         // v 
    altura : persona.altura * 100}
} */

var convertiralturas = persona => ({                    // v y este son los mismo, 2 formas de escribirlo    
    ...persona,
    altura : persona.altura * 100
})

var personasCms = personas.map(convertiralturas)
console.log(personasCms)