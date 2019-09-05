
//      filtrar datos de un array

var xoco = {
    nombre: 'xocoyotzin',
    apellido : 'lopez',
    altura : 1.65,
    libros: 15
}
var ed = {
    nombre: 'eduardo',
    apellido : 'perez',
    altura : 1.56,
    libros: 52
}
var ldy = {
    nombre: 'lodensy',
    apellido : 'alone',
    altura : 1.12,
    libros: 14
}
var shy = {
    nombre: 'shyrako',
    apellido : 'takamoto',
    altura : 2.12,
    libros: 5
}
var  xe= {
    nombre: 'xoxed',
    apellido : 'LoPe',
    altura : 2.32,
    libros: 18
}

var personas = [xoco, ed, ldy, shy, xe]
/////////////////////////////////////////////////////////////////////
var acum = 0

/* for (var i=0; i<personas.length; i++){
    acum = acum + personas[i].libros
} */


/* const reducer = (acum, persona) => {
    return acum + persona.libros
} */
const reducer = (acum,{libros}) => acum + libros

var totaldelibros = personas.reduce(reducer, 0)
console.log(`en total hay ${totaldelibros} libros`)