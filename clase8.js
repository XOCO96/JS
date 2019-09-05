
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

/* function cumpleaños(persona){
    persona.edad += 1
} */
/* function cumpleaños(edad){
    edad += 1
} */
function cumpleaños(persona){
    return{
    ...persona,                     // copian los atributos de persona y regresa uno objeto igual
    edad: persona.edad + 1          // con el atributo edad modificado
    }
}