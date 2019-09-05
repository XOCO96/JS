
var eduardo = {
    nombre: 'Ed',
    apellido : 'lopez',
    edad : 22
}
var xocoyotzin = {
    nombre: 'xoco',
    apellido : 'perez',
    edad : 23
}

function imprimirnombremayusculas(persona){
    //var nombre = persona.nombre
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

imprimirnombremayusculas(eduardo)
imprimirnombremayusculas(xocoyotzin)

//////      reto    

function imprimirdatos(persona){
    var {nombre} = persona
    var edad= persona.edad
    console.log('Hola, me llamo ' + nombre + ' y tengo ' + edad +' años')
}

imprimirdatos(eduardo)
imprimirdatos(xocoyotzin)
imprimirdatos({nombre:'pepito', edad: 16})