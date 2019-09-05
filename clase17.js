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

var personas = [xoco, ed, ldy, shy, xe]

for(var i=0; i<personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} metros`)
}